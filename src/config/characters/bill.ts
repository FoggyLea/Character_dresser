import type { CharacterConfig } from '../../types';

export const BillWeasley: CharacterConfig = {
    id: 'billweasley',
    name: 'Bill Weasley',
    author: 'leafoggy',
    canvasSize: { width: 1450, height: 1950 },
    bodySrc: 'assets/characters/bill/base/body.PNG',
    defaultPresetId: 'default',
    items: [
        {
            id: 'ponytail',
            name: 'Ponytail',
            tab: 'hair',
            subcategory: 'hair',
            slot: 'hair',
            src: 'assets/characters/bill/hair/ponytail.PNG',
            icon: 'assets/characters/bill/icons/ponytail.png',
            defaultZIndex: 17,
            isRemovable: false,
            isDefault: true
        },
        {
            id: 'bun',
            name: 'Bun',
            tab: 'hair',
            subcategory: 'hair',
            slot: 'hair',
            src: 'assets/characters/bill/hair/bun.PNG',
            icon: 'assets/characters/bill/icons/bun.png',
            defaultZIndex: 17,
            isRemovable: false
        },
        {
            id: 'mullet',
            name: 'Mullet',
            tab: 'hair',
            subcategory: 'hair',
            slot: 'hair',
            src: 'assets/characters/bill/hair/mullet.PNG',
            icon: 'assets/characters/bill/icons/mullet.png',
            defaultZIndex: 15,
            isRemovable: false
        },
        {
            id: 'jeans1',
            name: 'Baggy jeans',
            tab: 'clothes',
            subcategory: 'bottom',
            slot: 'bottom',
            src: 'assets/characters/bill/clothes/bottoms/baggy_jeans.PNG',
            icon: 'assets/characters/bill/icons/baggy_jeans.png',
            defaultZIndex: 55,
            isRemovable: true,
            isDefault: true
        },
        {
            id: 'trousers',
            name: 'Trousers',
            tab: 'clothes',
            subcategory: 'bottom',
            slot: 'bottom',
            src: 'assets/characters/bill/clothes/bottoms/trousers.PNG',
            icon: 'assets/characters/bill/icons/trousers.png',
            defaultZIndex: 55,
            isRemovable: true
        },
        {
            id: 'jeans2',
            name: 'Skinny jeans',
            tab: 'clothes',
            subcategory: 'bottom',
            slot: 'bottom',
            src: 'assets/characters/bill/clothes/bottoms/skinny_jeans.PNG',
            icon: 'assets/characters/bill/icons/skinny_jeans.png',
            defaultZIndex: 40,
            isRemovable: true
        },
        {
            id: 'vest',
            name: 'Denim vest',
            tab: 'clothes',
            subcategory: 'outerwear',
            slot: 'outerwear',
            src: 'assets/characters/bill/clothes/outerwear/denim_vest.PNG',
            icon: 'assets/characters/bill/icons/denim_vest.png',
            defaultZIndex: 75,
            isRemovable: true,
            isDefault: true
        },
        {
            id: 'jacket',
            name: 'Leather jacket',
            tab: 'clothes',
            subcategory: 'outerwear',
            slot: 'outerwear',
            src: 'assets/characters/bill/clothes/outerwear/leather_jacket.PNG',
            icon: 'assets/characters/bill/icons/leather_jacket.png',
            defaultZIndex: 75,
            isRemovable: true
        },
        {
            id: 'robe',
            name: 'School robe',
            tab: 'clothes',
            subcategory: 'outerwear',
            slot: 'outerwear',
            src: 'assets/characters/bill/clothes/outerwear/robe.PNG',
            icon: 'assets/characters/bill/icons/robe.png',
            variants: {
                jeans2: {src:'assets/characters/bill/clothes/outerwear/robe_skinny.PNG'},
                jeans1: {src:'assets/characters/bill/clothes/outerwear/robe_baggy.PNG'},
                trousers: {src:'assets/characters/bill/clothes/outerwear/robe_trousers.PNG'}
            },
            defaultZIndex: 80,
            isRemovable: true
        },
        {
            id: 'boots',
            name: 'Dragonhide boots',
            tab: 'clothes',
            subcategory: 'shoes',
            slot: 'shoes',
            src: 'assets/characters/bill/clothes/shoes/boots.PNG',
            icon: 'assets/characters/bill/icons/boots.png',
            defaultZIndex: 50,
            isRemovable: true,
            isDefault: true
        },
        {
            id: 'sneakers',
            name: 'Sneakers',
            tab: 'clothes',
            subcategory: 'shoes',
            slot: 'shoes',
            src: 'assets/characters/bill/clothes/shoes/sneakers.PNG',
            icon: 'assets/characters/bill/icons/sneakers.png',
            defaultZIndex: 50,
            isRemovable: true
        },
        {
            id: 'formal_shoes',
            name: 'Formal shoes',
            tab: 'clothes',
            subcategory: 'shoes',
            slot: 'shoes',
            src: 'assets/characters/bill/clothes/shoes/formal_shoes.PNG',
            icon: 'assets/characters/bill/icons/formal_shoes.png',
            defaultZIndex: 35,
            isRemovable: true
        },
        {
            id: 'mesh',
            name: 'Mesh sweater',
            tab: 'clothes',
            subcategory: 'top',
            slot: 'top_inner',
            src: 'assets/characters/bill/clothes/tops/mesh_sweater.PNG',
            icon: 'assets/characters/bill/icons/mesh.png',
            defaultZIndex: 25,
            isRemovable: true
        },
        {
            id: 'crop',
            name: 'Crop top',
            tab: 'clothes',
            subcategory: 'top',
            slot: 'top_inner',
            src: 'assets/characters/bill/clothes/tops/crop_top.PNG',
            icon: 'assets/characters/bill/icons/crop_top.png',
            defaultZIndex: 25,
            isRemovable: true
        },
        {
            id: 'rollneck',
            name: 'Roll-neck',
            tab: 'clothes',
            subcategory: 'top',
            slot: 'top_inner',
            src: 'assets/characters/bill/clothes/tops/rollneck.PNG',
            icon: 'assets/characters/bill/icons/rollneck.png',
            defaultZIndex: 25
        },
        {
            id: 'red_top',
            name: 'Red top',
            tab: 'clothes',
            subcategory: 'top',
            slot: 'top_mid',
            src: 'assets/characters/bill/clothes/tops/red_top.PNG',
            icon: 'assets/characters/bill/icons/red_top.png',
            variants: {
                school_vest: {src:'assets/characters/bill/clothes/tops/red_top_sweater.PNG'},
                sweater: {src:'assets/characters/bill/clothes/tops/red_top_sweater.PNG'},
                leather_vest: {src:'assets/characters/bill/clothes/tops/red_top_sweater.PNG'}
            },
            defaultZIndex: 65,
            isRemovable: true,
            isDefault: true
        },
        {
            id: 'white_shirt',
            name: 'White shirt',
            tab: 'clothes',
            subcategory: 'top',
            slot: 'top_mid',
            src: 'assets/characters/bill/clothes/tops/shirt.PNG',
            icon: 'assets/characters/bill/icons/shirt.png',
            defaultZIndex: 45,
            isRemovable: true,
            variants: {
                jacket: {src:'assets/characters/bill/clothes/tops/shirt_jacket.PNG'},
                robe: {src:'assets/characters/bill/clothes/tops/shirt_jacket.PNG'},
                sweater: {src:'assets/characters/bill/clothes/tops/shirt_jacket.PNG'},
                leather_vest: {src:'assets/characters/bill/clothes/tops/shirt_dvest.PNG'}
            }
        },
        {
            id: 'black_shirt',
            name: 'Black shirt',
            tab: 'clothes',
            subcategory: 'top',
            slot: 'top_mid',
            src: 'assets/characters/bill/clothes/tops/black_shirt.PNG',
            icon: 'assets/characters/bill/icons/black_shirt.png',
            defaultZIndex: 45,
            isRemovable: true,
            variants: {
                jacket: {src:'assets/characters/bill/clothes/tops/black_shirt_jacket.PNG'},
                sweater: {src:'assets/characters/bill/clothes/tops/black_shirt_jacket.PNG'}
            }
        },
        { 
            id: 't_shirt',
            name: 'T-shirt',
            tab: 'clothes',
            subcategory: 'top',
            slot: 'top_mid',
            src: 'assets/characters/bill/clothes/tops/tshirt.PNG',
            icon: 'assets/characters/bill/icons/tshirt.png',
            defaultZIndex: 65,
            isRemovable: true,
            variants: {
                jacket: {src:'assets/characters/bill/clothes/tops/tshirt_jacket.PNG'},
                school_vest: {src:'assets/characters/bill/clothes/tops/tshirt_jacket.PNG'},
                leather_vest: {src:'assets/characters/bill/clothes/tops/tshirt_jacket.PNG'},
                sweater: {src: null}
            }
        },
        {
            id: 'ripped_tee',
            name: 'Ripped tee',
            tab: 'clothes',
            subcategory: 'top',
            slot: 'top_mid',
            src: 'assets/characters/bill/clothes/tops/ripped_tee.PNG',
            icon: 'assets/characters/bill/icons/ripped_tee.png',
            defaultZIndex: 65,
            variants: {
                sweater: {src: null}
            }
        },
        {
            id: 'sweater',
            name: 'Molly`s sweater',
            tab: 'clothes',
            subcategory: 'top',
            slot: 'top_outer',
            src: 'assets/characters/bill/clothes/tops/sweater.PNG',
            icon: 'assets/characters/bill/icons/sweater.png',
            variants: {
                white_shirt: {src:'assets/characters/bill/clothes/tops/sweater_shirt.PNG'},
                black_shirt: {src:'assets/characters/bill/clothes/tops/sweater_black_shirt.PNG'}
            },
            defaultZIndex: 70,
            isRemovable: true
        },
        {
            id: 'school_vest',
            name: 'School vest',
            tab: 'clothes',
            subcategory: 'top',
            slot: 'top_outer',
            src: 'assets/characters/bill/clothes/tops/school_vest.PNG',
            icon: 'assets/characters/bill/icons/school_vest.png',
            defaultZIndex: 70,
            isRemovable: true
        },
        {
            id: 'leather_vest',
            name: 'Leather vest',
            tab: 'clothes',
            subcategory: 'top',
            slot: 'top_outer',
            src: 'assets/characters/bill/clothes/tops/dagonhide_vest.PNG',
            icon: 'assets/characters/bill/icons/dragonhide_vest.png',
            defaultZIndex: 70
        },
        {
            id: 'earring1',
            name: 'Fang earring',
            tab: 'details',
            subcategory: 'acc',
            slot: 'acc',
            src: 'assets/characters/bill/details/acc/fang.PNG',
            icon: 'assets/characters/bill/icons/ear_fang.png',
            defaultZIndex: 20,
            isRemovable: true
        },
        {
            id: 'earring2',
            name: 'Chain earring',
            tab: 'details',
            subcategory: 'acc',
            slot: 'acc',
            src: 'assets/characters/bill/details/acc/chain.PNG',
            icon: 'assets/characters/bill/icons/ear_chain.png',
            defaultZIndex: 16,
            isRemovable: true
        },
        {
            id: 'earring3',
            name: 'Pair earrings',
            tab: 'details',
            subcategory: 'acc',
            slot: 'acc',
            src: 'assets/characters/bill/details/acc/ear_rings.PNG',
            icon: 'assets/characters/bill/icons/ear_pair.png',
            defaultZIndex: 20,
            isRemovable: true
        },
        {
            id: 'tie',
            name: 'Tie',
            tab: 'details',
            subcategory: 'acc',
            slot: 'acc',
            src: 'assets/characters/bill/details/acc/tie.PNG',
            icon: 'assets/characters/bill/icons/tie.png',
            defaultZIndex: 67,
            isRemovable: true,
            variants: {
                white_shirt: {src:'assets/characters/bill/details/acc/tie_shirt.PNG'},
                black_shirt: {src:'assets/characters/bill/details/acc/tie_black_shirt.PNG'}
            }
        },
        {
            id: 'scarf',
            name: 'Scarf',
            tab: 'details',
            subcategory: 'acc',
            slot: 'acc',
            src: 'assets/characters/bill/details/acc/scarf.PNG',
            icon: 'assets/characters/bill/icons/scarf.png',
            defaultZIndex: 85,
            isRemovable: true
        },
        {
            id: 'belt',
            name: 'Belt',
            tab: 'details',
            subcategory: 'acc',
            slot: 'acc',
            src: 'assets/characters/bill/details/acc/belt.PNG',
            icon: 'assets/characters/bill/icons/belt.png',
            variants: {
                jeans1: {src: 'assets/characters/bill/details/acc/belt_baggy.PNG'},
                jeans2: {src: 'assets/characters/bill/details/acc/belt_skinny.PNG', zIndex: 43},
                trousers: {src: 'assets/characters/bill/details/acc/belt_trousers.PNG'}
            },
            defaultZIndex: 60,
            isRemovable: true
        },
        {
            id: 'wristband',
            name: 'Wristband',
            tab: 'details',
            subcategory: 'acc',
            slot: 'acc',
            src: 'assets/characters/bill/details/acc/wristband.PNG',
            icon: 'assets/characters/bill/icons/wristband.png',
            defaultZIndex: 40,
            isRemovable: true
        },
        {
            id: 'bracelets',
            name: 'Bracelets',
            tab: 'details',
            subcategory: 'acc',
            slot: 'acc',
            src: 'assets/characters/bill/details/acc/bracelets.PNG',
            icon: 'assets/characters/bill/icons/bracelets.png',
            defaultZIndex: 40
        },
        {
            id: 'nails1',
            name: 'Black nails',
            tab: 'details',
            subcategory: 'skin',
            slot: 'skin',
            src: 'assets/characters/bill/details/acc/nails.PNG',
            icon: 'assets/characters/bill/icons/nails.png',
            defaultZIndex: 15,
            isRemovable: true
        },
        {
            id: 'scars',
            name: 'Scars',
            tab: 'details',
            subcategory: 'skin',
            slot: 'skin',
            src: 'assets/characters/bill/details/skin/scars.PNG',
            icon: 'assets/characters/bill/icons/scars.png',
            defaultZIndex: 13,
            isRemovable: true,
            isDefault: true
        },
        {
            id: 'bags',
            name: 'Some sleep',
            tab: 'details',
            subcategory: 'skin',
            slot: 'skin',
            src: 'assets/characters/bill/details/skin/sleep.PNG',
            icon: 'assets/characters/bill/icons/sleep.png',
            defaultZIndex: 11,
            isRemovable: true,
            isDefault: true
        },
        {
            id: 'bg_default',
            name: 'Non-transparent',
            tab: 'background',
            subcategory: 'bg_colour',
            slot: 'bg',
            src: '#3a3a40',
            defaultZIndex: 1
        },
        {
            id: 'bg_sage',
            name: 'Sage Green',
            tab: 'background',
            subcategory: 'bg_colour',
            slot: 'bg',
            src: '#74aa97',
            defaultZIndex: 1
        },
        {
            id: 'bg_lavender',
            name: 'Lavender',
            tab: 'background',
            subcategory: 'bg_colour',
            slot: 'bg',
            src: '#ac9ed4',
            defaultZIndex: 1
        },
        {
            id: 'bg_peach',
            name: 'Peachy Cream',
            tab: 'background',
            subcategory: 'bg_colour',
            slot: 'bg',
            src: '#ebc2b0',
            defaultZIndex: 1
        },
        {
            id: 'bg_blue',
            name: 'Stormy Blue',
            tab: 'background',
            subcategory: 'bg_colour',
            slot: 'bg',
            src: '#507B9C',
            defaultZIndex: 1
        },
        {
            id: 'bg_yellow',
            name: 'Creamy Yellow',
            tab: 'background',
            subcategory: 'bg_colour',
            slot: 'bg',
            src: '#ebcc8b',
            defaultZIndex: 1
        },
        {
            id: 'bg_rose',
            name: 'Dusty Rose',
            tab: 'background',
            subcategory: 'bg_colour',
            slot: 'bg',
            src: '#DCA1A1',
            defaultZIndex: 1
        },
        {
            id: 'bg_custom',
            name: 'Custom',
            tab: 'background',
            subcategory: 'bg_colour',
            slot: 'bg',
            src: '#ffffff', // Начальный цвет по умолчанию
            defaultZIndex: 1,
            isCustomColor: true // Флаг для определения в UI
        },
        {
            id: 'hogwarts',
            name: 'Hogwarts',
            tab: 'background',
            subcategory: 'bg_image',
            slot: 'bg',
            src: 'assets/characters/bill/bg/hogwarts.png',
            icon: 'assets/characters/bill/icons/hogwarts.png',
            defaultZIndex: 1
        },
        {
            id: 'tomb',
            name: 'Tomb',
            tab: 'background',
            subcategory: 'bg_image',
            slot: 'bg',
            src: 'assets/characters/bill/bg/tomb.png',
            icon: 'assets/characters/bill/icons/tomb.png',
            defaultZIndex: 1
        },
        {
            id: 'cornwall',
            name: 'Cornwall',
            tab: 'background',
            subcategory: 'bg_image',
            slot: 'bg',
            src: 'assets/characters/bill/bg/cornwall.png',
            icon: 'assets/characters/bill/icons/cornwall.png',
            defaultZIndex: 1
        }
    ],
    // PRESETS
    presets: [
        {
            id: 'default',
            name: 'Casual look',
            itemIds: ['ponytail', 'jeans1', 'belt', 'wristband', 'red_top', 'vest', 'boots', 'scars', 'bags', 'earring1', 'earring3']
        },
        {
            id: 'school',
            name: 'Hogwarts uniform',
            itemIds: ['mullet', 'bags', 'formal_shoes', 'robe', 'trousers', 'tie', 'white_shirt', 'school_vest']
        },
        {
            id: 'nothing',
            name: 'Remove all',
            itemIds: []
        }
    ]
};


