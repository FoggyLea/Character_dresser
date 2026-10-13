import type { TabCategory, Subcategory, CharacterConfig, LayerSlot, SubCategoryConfig } from './types';
import { SUB_CATEGORIES_MAP } from './types';
import { CHARACTERS } from './config/characters';
import { OutfitManager } from './engine/state';
import { renderStage } from './engine/renderer';
import { downloadOutfit } from './engine/exporter';
import vkBridge from '@vkontakte/vk-bridge';

/*if (vkBridge.isWebView()) {
  vkBridge.send('VKWebAppInit').catch((err) => {
    console.warn('VK Bridge init failed:', err);
  });
}*/

vkBridge.send('VKWebAppInit').catch((err) => {
    console.warn('VK Bridge init failed:', err);
});

// Инициализация менеджера состояния
const outfit = new OutfitManager();

// Состояние UI — стартуем с Hair
let currentCharacter: CharacterConfig = CHARACTERS[0];
let currentTab: TabCategory = 'hair';
let currentSubcategory: Subcategory = 'hair';
let currentNestedFilter: LayerSlot | null = null;

// Элементы DOM
const tabButtons = document.querySelectorAll<HTMLButtonElement>('.tabs-main .tab-btn');
const subtabsContainer = document.getElementById('subtabs')!;
const grid = document.getElementById('item-grid')!;
const charBtn = document.getElementById('char-btn')!;
const charModal = document.getElementById('char-modal-overlay')!;
const charList = document.getElementById('char-list')!;
const saveBtn = document.getElementById('save-btn')!;
const nestedSubtabsContainer = document.getElementById('nested-subtabs')!;
const presetBtn = document.getElementById('preset-btn') as HTMLButtonElement;
const presetMenu = document.getElementById('preset-menu') as HTMLDivElement;

// Функция синхронизации активности главных вкладок
function updateMainTabsUI() {
  tabButtons.forEach(btn => {
    if (btn.dataset.tab === currentTab) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// 1. Переключение главных вкладок
tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    if (!btn.dataset.tab) return;
    currentTab = btn.dataset.tab as TabCategory;
    updateMainTabsUI();
    renderSubtabs(currentTab);
    renderGrid();
  });
});

// 2. Отрисовка подкатегорий (скрываем панель, если подкатегория одна или их нет)
function renderSubtabs(tab: TabCategory) {
  subtabsContainer.innerHTML = '';
  nestedSubtabsContainer.innerHTML = '';
  const subcats = SUB_CATEGORIES_MAP[tab] || [];

  // Если у категории 0 или 1 подкатегория (как у Hair или Background), прячем полосу
  if (subcats.length <= 1) {
    subtabsContainer.style.display = 'none';
    if (subcats.length === 1) {
      currentSubcategory = subcats[0].id;
    }
    return;
  }
  // Показываем подвкладки, если их больше одной (как у Clothes)
  subtabsContainer.style.display = 'flex';
  currentSubcategory = subcats[0].id;

  subcats.forEach((sub, index) => {
    const btn = document.createElement('button');
    btn.className = `tab-btn ${index === 0 ? 'active' : ''}`;
    btn.innerText = sub.label;

    btn.addEventListener('click', () => {
      document.querySelectorAll('#subtabs .tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentSubcategory = sub.id;
      renderNestedSubtabs(sub);
      renderGrid();
    });

    subtabsContainer.appendChild(btn);
  });
  renderNestedSubtabs(subcats[0]);
}

// Отрисовка вложенных подвкладок (Clothes -> Top -> Undertop/Top)
function renderNestedSubtabs(subcat: SubCategoryConfig) {
  nestedSubtabsContainer.innerHTML = '';
  currentNestedFilter = null;

  if (!subcat.subTabs || subcat.subTabs.length === 0) {
    nestedSubtabsContainer.style.display = 'none';
    return;
  }

  nestedSubtabsContainer.style.display = 'flex';

  subcat.subTabs.forEach((nested, index) => {
    const btn = document.createElement('button');
    btn.className = `tab-btn nested-btn ${index === 0 ? 'active' : ''}`;
    btn.dataset.id = nested.id;
    btn.innerText = nested.label;

    btn.addEventListener('click', () => {
      document.querySelectorAll('#nested-subtabs .tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentNestedFilter = nested.slotFilter || null;
      renderGrid();
    });

    nestedSubtabsContainer.appendChild(btn);
  });
}

// 3. Отрисовка сетки предметов под выбранный фильтр
function renderGrid() {
  grid.innerHTML = '';

  const filteredItems = currentCharacter.items.filter(item => {
    const matchCategory = item.tab === currentTab && item.subcategory === currentSubcategory;
    if (!matchCategory) return false;

    // Если активен фильтр 2-го уровня — дополнительно проверяем slot предмета
    if (currentNestedFilter) {
      return item.slot === currentNestedFilter;
    }
    return true;
  });

  filteredItems.forEach(item => {
    const card = document.createElement('div');
    const isEquipped = outfit.isEquipped(item.id);

    card.className = `item-card ${isEquipped ? 'active' : ''}`;

    // 1. ПРЕВЬЮ (Кастомный инпут цвета / Иконка / Цветная плашка)
    if (item.isCustomColor) {
      // Обёртка-плашка под кастомный цвет
      const pickerWrapper = document.createElement('div');
      pickerWrapper.className = 'color-preview custom-picker-wrapper';
      pickerWrapper.style.backgroundColor = item.src;

      // Скрытый нативный инпут выбора цвета
      const colorInput = document.createElement('input');
      colorInput.type = 'color';
      colorInput.value = item.src.startsWith('#') ? item.src : '#ffffff';
      colorInput.className = 'custom-color-input';

      // Реакция на выбор цвета в палитре
      colorInput.addEventListener('input', (e) => {
        const newColor = (e.target as HTMLInputElement).value;
        item.src = newColor;
        pickerWrapper.style.backgroundColor = newColor;

        // Если цвет ещё не надета/не выбран, надеваем его
        if (!outfit.isEquipped(item.id)) {
          outfit.toggleItem(item);
        }

        renderStage(currentCharacter, outfit.getEquippedItems());
      });

      pickerWrapper.appendChild(colorInput);
      card.appendChild(pickerWrapper);

    } else if (item.icon) {
      // Обычная иконка предмета
      const img = document.createElement('img');
      img.src = item.icon;
      img.alt = item.name;
      card.appendChild(img);

    } else if (item.src.startsWith('#')) {
      // Готовые фикс-цвета фона (твоя текущая логика)
      const colorBox = document.createElement('div');
      colorBox.className = 'color-preview';
      colorBox.style.backgroundColor = item.src;
      card.appendChild(colorBox);
    }

    // 2. Подпись
    const label = document.createElement('span');
    label.className = 'item-label';
    label.innerText = item.name;
    card.appendChild(label);

    // 3. Клики по карточке
    card.addEventListener('click', (e) => {
      // Если кликнули по инпуту цвета, игнорируем toggle, так как 'input' событие всё сделает само
      if ((e.target as HTMLElement).tagName === 'INPUT') return;

      outfit.toggleItem(item);
      renderStage(currentCharacter, outfit.getEquippedItems());
      renderGrid();
    });

    grid.appendChild(card);
  });
}

function preloadCharacterAssets(char: CharacterConfig): Promise<void[]> {
  const sources: string[] = [char.bodySrc];

  char.items.forEach(item => {
    if (item.src && !item.src.startsWith('#')) {
      sources.push(item.src);
    }
    if (item.variants) {
      Object.values(item.variants).forEach(v => {
        if (v.src && !v.src.startsWith('#')) sources.push(v.src);
      });
    }
  });

  const promises = sources.map(src => {
    return new Promise<void>((resolve) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => resolve(); // Игнорируем ошибки, чтобы загрузка не зависала намертво
      img.src = src;
    });
  });

  return Promise.all(promises);
}

// 4. Загрузка персонажа
async function loadCharacter(char: CharacterConfig) {
  const loader = document.getElementById('loading-overlay');
  if (loader) loader.classList.remove('hidden');

  currentCharacter = char;
  
  // Ждем, пока ВСЕ ассеты загрузятся в кэш браузера
  await preloadCharacterAssets(char);

  outfit.clear();

  const defaultPreset = char.presets?.find(p => p.id === char.defaultPresetId) || char.presets?.[0];
  if (defaultPreset) {
    outfit.applyPreset(defaultPreset, char.items);
  }

  const bodyImg = document.getElementById('body-layer') as HTMLImageElement;
  if (bodyImg) bodyImg.src = char.bodySrc;

  renderPresetsUI(char);
  updateMainTabsUI();
  renderStage(currentCharacter, outfit.getEquippedItems());
  renderSubtabs(currentTab);
  renderGrid();
  renderCharacterSelection();

  // Прячем лоадер, когда всё нарисовано
  if (loader) loader.classList.add('hidden');
}

// 5. Модалка выбора персонажей
function renderCharacterSelection() {
  charList.innerHTML = '';
  CHARACTERS.forEach(char => {
    const btn = document.createElement('button');
    btn.className = `char-option-btn ${char.id === currentCharacter.id ? 'active' : ''}`;
    btn.innerText = `${char.name} (${char.author})`;

    btn.addEventListener('click', () => {
      loadCharacter(char);
      charModal.classList.add('hidden');
    });

    charList.appendChild(btn);
  });
}

// Пресеты-пресеты
function renderPresetsUI(char: CharacterConfig) {
  if (!presetMenu || !presetBtn) return;
  presetMenu.innerHTML = '';

  if (!char.presets || char.presets.length === 0) {
    presetBtn.style.display = 'none';
    return;
  }

  presetBtn.style.display = 'block';

  char.presets.forEach(preset => {
    const itemBtn = document.createElement('button');
    itemBtn.className = 'preset-menu-item';
    itemBtn.innerText = preset.name;

    itemBtn.addEventListener('click', () => {
      outfit.applyPreset(preset, currentCharacter.items);
      renderStage(currentCharacter, outfit.getEquippedItems());
      renderGrid();
      presetMenu.classList.add('hidden'); // Закрываем меню после выбора
    });

    presetMenu.appendChild(itemBtn);
  });
}

// Открытие / закрытие выпадающего меню по клику на кнопку
presetBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  presetMenu.classList.toggle('hidden');
});

// Закрываем выпадашку при клике в любое другое место экрана
document.addEventListener('click', (e) => {
  if (!presetMenu.contains(e.target as Node) && e.target !== presetBtn) {
    presetMenu.classList.add('hidden');
  }
});

charBtn.addEventListener('click', () => charModal.classList.remove('hidden'));
charModal.addEventListener('click', e => {
  if (e.target === charModal) charModal.classList.add('hidden');
});
saveBtn.addEventListener('click', () => {
  downloadOutfit(currentCharacter, outfit.getEquippedItems());
});

// Первый запуск
loadCharacter(currentCharacter);