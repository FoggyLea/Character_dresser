import type { CharacterConfig, Item } from '../types';

export async function downloadOutfit(character: CharacterConfig, equippedItems: Item[]): Promise<void> {
  const canvas = document.createElement('canvas');
  canvas.width = character.canvasSize.width;   // 1400
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
  const clothesItems = equippedItems.filter(i => i.slot !== 'bg');
  
  const sortedItems = [...clothesItems].sort((a, b) => {
    const zA = a.zIndexOverride ?? a.defaultZIndex;
    const zB = b.zIndexOverride ?? b.defaultZIndex;
    return zA === zB ? clothesItems.indexOf(a) - clothesItems.indexOf(b) : zA - zB;
  });

  // Собираем массив путей: сначала тело, затем сортированная одежда
  const sourcesToDraw = [character.bodySrc];
  
  sortedItems.forEach(item => {
    let finalSrc = item.src;
    if (item.variants) {
      for (const [conflictId, variantSrc] of Object.entries(item.variants)) {
        if (equippedIds.has(conflictId)) {
          finalSrc = variantSrc;
          break;
        }
      }
    }
    sourcesToDraw.push(finalSrc);
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

  // 4. Генерация и скачивание файла
  const link = document.createElement('a');
  link.download = `${character.name}_outfit.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
}