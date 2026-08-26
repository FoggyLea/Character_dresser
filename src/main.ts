import type { TabCategory, Subcategory, CharacterConfig, Item } from './types';
import { SUB_CATEGORIES_MAP } from './types';
import { CHARACTERS } from './config/characters';
import { OutfitManager } from './engine/state';
import { renderStage } from './engine/renderer';
import { downloadOutfit } from './engine/exporter';

// Инициализация менеджера состояния
const outfit = new OutfitManager();

// Состояние UI — стартуем с Hair
let currentCharacter: CharacterConfig = CHARACTERS[0];
let currentTab: TabCategory = 'hair';
let currentSubcategory: Subcategory = 'hair';

// Элементы DOM
const tabButtons = document.querySelectorAll<HTMLButtonElement>('.tabs-main .tab-btn');
const subtabsContainer = document.getElementById('subtabs')!;
const grid = document.getElementById('item-grid')!;
const charBtn = document.getElementById('char-btn')!;
const charModal = document.getElementById('char-modal-overlay')!;
const charList = document.getElementById('char-list')!;
const saveBtn = document.getElementById('save-btn')!;

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
      renderGrid();
    });

    subtabsContainer.appendChild(btn);
  });
}

// 3. Отрисовка сетки предметов под выбранный фильтр
function renderGrid() {
  grid.innerHTML = '';

  const filteredItems = currentCharacter.items.filter(
    item => item.tab === currentTab && item.subcategory === currentSubcategory
  );

  filteredItems.forEach(item => {
    const card = document.createElement('div');
    const isEquipped = outfit.isEquipped(item.id);

    card.className = `item-card ${isEquipped ? 'active' : ''}`;
    card.innerText = item.name;

    card.addEventListener('click', () => {
      outfit.toggleItem(item);
      renderStage(currentCharacter, outfit.getEquippedItems());
      renderGrid();
    });

    grid.appendChild(card);
  });
}

// 4. Загрузка персонажа
function loadCharacter(char: CharacterConfig) {
  currentCharacter = char;
  outfit.clear();

  const defaultHair = char.items.find(i => i.slot === 'hair');
  if (defaultHair) outfit.toggleItem(defaultHair);

  const bodyImg = document.getElementById('body-layer') as HTMLImageElement;
  if (bodyImg) bodyImg.src = char.bodySrc;

  // Обновляем визуальное состояние кнопок и сцены
  updateMainTabsUI();
  renderStage(currentCharacter, outfit.getEquippedItems());
  renderSubtabs(currentTab);
  renderGrid();
  renderCharacterSelection();
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

charBtn.addEventListener('click', () => charModal.classList.remove('hidden'));
charModal.addEventListener('click', e => {
  if (e.target === charModal) charModal.classList.add('hidden');
});
saveBtn.addEventListener('click', () => {
  downloadOutfit(currentCharacter, outfit.getEquippedItems());
});

// Первый запуск
loadCharacter(currentCharacter);