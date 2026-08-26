import type { CharacterConfig, Item } from '../types';

export function renderStage(character: CharacterConfig, equippedItems: Item[]): void {
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
      }
    } else {
      // Сброс: при снятии предмета возвращаем прозрачность (будет виден базовый серый цвет сцены)
      bgLayer.style.backgroundColor = 'transparent';
      bgLayer.style.backgroundImage = 'none';
    }
  }

  const equippedIds = new Set(equippedItems.map(item => item.id));

  // 1. Сортируем предметы по zIndex (от заднего плана к переднему)
const sortedItems = [...equippedItems].sort((a, b) => {
  const zA = a.zIndexOverride ?? a.defaultZIndex;
  const zB = b.zIndexOverride ?? b.defaultZIndex;
  if (zA === zB) {
    return equippedItems.indexOf(a) - equippedItems.indexOf(b);
  }
  return zA - zB;
});

  // 2. Генерируем слои PNG
  sortedItems.forEach(item => {
    let finalSrc = item.src;

    // Проверяем: есть ли спец-версия (вариант) этой вещи под другой надетый предмет?
    if (item.variants) {
      for (const [conflictId, variantSrc] of Object.entries(item.variants)) {
        if (equippedIds.has(conflictId)) {
          finalSrc = variantSrc; // Заменяем картинку на заправленную/уженную
          break;
        }
      }
    }

    // Создаем слой
    const img = document.createElement('img');
    img.src = finalSrc;
    img.alt = item.name;
    img.className = 'layer';
    img.style.zIndex = (item.zIndexOverride ?? item.defaultZIndex).toString();

    container.appendChild(img);
  });
}