import type { CharacterConfig, Item } from '../types';
import vkBridge from '@vkontakte/vk-bridge';

export async function downloadOutfit(character: CharacterConfig, equippedItems: Item[]): Promise<void> {
  const canvas = document.createElement('canvas');
  canvas.width = character.canvasSize.width;   // 1450
  canvas.height = character.canvasSize.height; // 1950
  const ctx = canvas.getContext('2d');

  if (!ctx) return;

  // 1. Отрисовка фона
  const bgItem = equippedItems.find(i => i.slot === 'bg');
  if (bgItem && bgItem.src.startsWith('#')) {
    ctx.fillStyle = bgItem.src;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  // Функция загрузки изображений в память
  const loadImage = (src: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  };

  // 2. Подготовка слоев в правильном порядке z-index
  const equippedIds = new Set(equippedItems.map(i => i.id));
  const clothesItems = equippedItems.filter(i => i.slot !== 'bg' && !i.src.startsWith('#'));

  const preparedItems = clothesItems.map(item => {
    let finalSrc: string | null = item.src;
    let effectiveZIndex = item.zIndexOverride ?? item.defaultZIndex;

    if (item.variants) {
      for (const [conflictId, variant] of Object.entries(item.variants)) {
        if (equippedIds.has(conflictId)) {
          if (variant.src !== undefined) {
            finalSrc = variant.src;
          }
          if (variant.zIndex !== undefined) {
            effectiveZIndex = variant.zIndex;
          }
          break;
        }
      }
    }

    return { item, finalSrc, effectiveZIndex };
  });

  // Теперь сортируем предметы по пересчитанному effectiveZIndex
  preparedItems.sort((a, b) => {
    if (a.effectiveZIndex === b.effectiveZIndex) {
      return clothesItems.indexOf(a.item) - clothesItems.indexOf(b.item);
    }
    return a.effectiveZIndex - b.effectiveZIndex;
  });

  // Собираем массив путей: сначала тело, затем сортированная одежда
  const sourcesToDraw = [character.bodySrc];
  preparedItems.forEach(({ finalSrc }) => {
    if (finalSrc) {
      sourcesToDraw.push(finalSrc);
    }
  });

  // 3. Последовательная отрисовка на Canvas
  for (const src of sourcesToDraw) {
    try {
      const img = await loadImage(src);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    } catch (e) {
      console.error(`Ошибка загрузки слоя для сохранения: ${src}`);
    }
  }
  const dataUrl = canvas.toDataURL('image/png');
  if (vkBridge.isWebView()) {
    try {
      await vkBridge.send('VKWebAppDownloadFile', {
        url: dataUrl,
        filename: `${character.name}_outfit.png`
      });
      return;
    } catch (e) {
      console.warn('VK Download failed, falling back to window.open', e);
      window.open(dataUrl, '_blank');
      return;
    }
  }

  // 4. Генерация и скачивание файла
  const link = document.createElement('a');
  link.download = `${character.name}_outfit.png`;
  link.href = dataUrl;
  link.click();
}