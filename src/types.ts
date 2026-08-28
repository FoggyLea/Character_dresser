export type TabCategory = 'hair' | 'clothes' | 'details' | 'background';

export type Subcategory =
| 'top' |'outerwear'
| 'bottom' | 'shoes'
| 'hair' | 'acc' | 'skin'
| 'bg_colour' | 'bg_image';

export type LayerSlot = 
  | 'top_inner'  // Сетка, майки под низ
  | 'top_mid'    // Футболки, топы
  | 'outerwear'  // Жилеты, куртки
  | 'bottom'     // Штаны
  | 'shoes'      // Обувь
  | 'hair'       // Прическа
  | 'skin'     // Макияж/шрамы
  | 'acc'        // Аксессуары
  | 'bg';        // Фон

  export interface SubSubCategory {
  id: string; // Например: 'all', 'top_mid', 'top_inner'
  label: string;
  slotFilter?: LayerSlot;
}

export interface SubCategoryConfig {
  id: Subcategory;
  label: string;
  subTabs?: SubSubCategory[];
}

export interface Item {
    id: string;
    name: string;
    tab: TabCategory;
    subcategory: Subcategory;
    slot: LayerSlot;
    src: string;
    icon?: string;
    defaultZIndex: number;
    zIndexOverride?: number;
    isRemovable?: boolean;
    isDefault?: boolean;
    variants?: Record<string, string>;
}

export interface CharacterConfig {
    id: string;
    name: string;
    author: string;
    canvasSize: { width: number; height: number };
    bodySrc: string;
    items: Item[];
}

export const SUB_CATEGORIES_MAP: Record<TabCategory, SubCategoryConfig[]> = {
    clothes: [
        {
            id: 'top',
            label: 'Top',
            subTabs: [
                { id: 'all', label: 'All' },
                { id: 'top_mid', label: 'Tops', slotFilter: 'top_mid' },
                { id: 'top_inner', label: 'Undertops', slotFilter: 'top_inner' }
            ]
        },
        { id: 'bottom', label: 'Bottom' },
        { id: 'shoes', label: 'Shoes' },
        { id: 'outerwear', label: 'Outerwear' }
    ],
    hair: [{ id: 'hair', label: 'Hair' }],
    details: [
        { id: 'acc', label: 'Accessoires' },
        { id: 'skin', label: 'Skin' }
    ],
    background: [
        { id: 'bg_colour', label: 'Colour' },
        { id: 'bg_image', label: 'Image' }
    ]
};