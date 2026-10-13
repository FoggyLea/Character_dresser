import type { CharacterConfig, Item } from '../types';

export function renderStage(_character: CharacterConfig, equippedItems: Item[]): void {
const container = document.getElementById('clothes-container');
  const bgLayer = document.getElementById('bg-layer');

  if (!container) return;
  container.innerHTML = '';

  // 1. ОБРАБОТКА ФОНА (Цвет или Картинка)
  if (bgLayer) {
    const bgItem = equippedItems.find(item => item.slot === 'bg');

    if (bgItem) {
      if (bgItem.src.startsWith('#')) {
        bgLayer.style.backgroundColor = bgItem.src;
        bgLayer.style.backgroundImage = 'none';
      } else {
        bgLayer.style.backgroundImage = `url(${bgItem.src})`;
        bgLayer.style.backgroundColor = 'transparent';
        bgLayer.style.backgroundSize = 'cover';
        bgLayer.style.backgroundPosition = 'center';
        bgLayer.style.backgroundRepeat = 'no-repeat';
      }
    } else {
      // Сброс: при снятии предмета возвращаем прозрачность (будет виден базовый серый цвет сцены)
      bgLayer.style.backgroundColor = 'transparent';
      bgLayer.style.backgroundImage = 'none';
    }
  }

  const equippedIds = new Set(equippedItems.map(item => item.id));

  // ИСКЛЮЧАЕМ фоновые предметы и цветные плашки из создания PNG-слоев
  const clothesItems = equippedItems.filter(item => item.slot !== 'bg' && !item.src.startsWith('#'));
 
// 1. Подготавливаем элементы с учетом возможных вариантов и переопределений zIndex
  const preparedItems = clothesItems.map(item => {
    // По умолчанию всегда берем БАЗОВЫЕ значения предмета
    let finalSrc: string | null = item.src;
    let effectiveZIndex = item.zIndexOverride ?? item.defaultZIndex;

    if (item.variants) {
      for (const [conflictId, variant] of Object.entries(item.variants)) {
        // Проверяем, надета ли вещь-конфликт СЕЙЧАС
        if (equippedIds.has(conflictId)) {
          if (variant.src !== undefined) {
            finalSrc = variant.src;
          }
          if (variant.zIndex !== undefined) {
            effectiveZIndex = variant.zIndex;
          }
          break; // Нашли совпадение — выходим из цикла
        }
      }
    }

    return { item, finalSrc, effectiveZIndex };
  });

  // 2. Сортируем предметы по пересчитанному effectiveZIndex
  preparedItems.sort((a, b) => {
    if (a.effectiveZIndex === b.effectiveZIndex) {
      return clothesItems.indexOf(a.item) - clothesItems.indexOf(b.item);
    }
    return a.effectiveZIndex - b.effectiveZIndex;
  });

  // 3. Генерируем слои PNG
  preparedItems.forEach(({ item, finalSrc, effectiveZIndex }) => {
    if (!finalSrc) return;

    const img = document.createElement('img');
    img.src = finalSrc;
    img.alt = item.name;
    img.className = 'layer';
    img.style.zIndex = effectiveZIndex.toString();

    container.appendChild(img);
  });
}