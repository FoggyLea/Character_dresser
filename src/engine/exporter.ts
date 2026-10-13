import type { CharacterConfig, Item } from '../types';
import vkBridge from '@vkontakte/vk-bridge';

export async function downloadOutfit(character: CharacterConfig, equippedItems: Item[]): Promise<void> {
  const canvas = document.createElement('canvas');
  canvas.width = character.canvasSize.width;   // 1450
  canvas.height = character.canvasSize.height; // 1950
  const ctx = canvas.getContext('2d');

  if (!ctx) return;

  // Функция загрузки изображений в память
  const loadImage = (src: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  };

  // 1. Отрисовка фона (цвет или картинка)
  const bgItem = equippedItems.find(i => i.slot === 'bg');
  if (bgItem) {
    if (bgItem.src.startsWith('#')) {
      // Если фон — цвет
      ctx.fillStyle = bgItem.src;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    } else {
      // Если фон — картинка
      try {
        const bgImg = await loadImage(bgItem.src);
        ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
      } catch (e) {
        console.error(`Ошибка загрузки фона: ${bgItem.src}`);
      }
    }
  }

  // 2. Подготовка слоев одежды и деталей
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

  // Сортировка предметов по effectiveZIndex
  preparedItems.sort((a, b) => {
    if (a.effectiveZIndex === b.effectiveZIndex) {
      return clothesItems.indexOf(a.item) - clothesItems.indexOf(b.item);
    }
    return a.effectiveZIndex - b.effectiveZIndex;
  });

  // 3. Собираем массив путей: сначала тело, затем одежда
  const sourcesToDraw = [character.bodySrc];
  preparedItems.forEach(({ finalSrc }) => {
    if (finalSrc) {
      sourcesToDraw.push(finalSrc);
    }
  });

  // 4. Последовательная отрисовка тела и одежды поверх фона
  for (const src of sourcesToDraw) {
    try {
      const img = await loadImage(src);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    } catch (e) {
      console.error(`Ошибка загрузки слоя для сохранения: ${src}`);
    }
  }

  const dataUrl = canvas.toDataURL('image/png');

  // 5. Скачивание (VK Bridge / Обычный браузер)
  if (vkBridge.isWebView()) {
    try {
      await vkBridge.send('VKWebAppDownloadFile', {
        url: dataUrl,
        filename: `${character.name}_outfit.png`
      });
      return;
    } catch(e) {
      window.open(dataUrl, '_blank');
      return;
    }
  }

  const link = document.createElement('a');
  link.download = `${character.name}_outfit.png`;
  link.href = dataUrl;
  link.click();
}