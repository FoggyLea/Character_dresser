import type { CharacterConfig } from '../../types';

export const BillWeasley: CharacterConfig = {
    id: 'billweasley',
    name: 'Bill Weasley',
    author: 'leafoggy',
    canvasSize: { width: 1450, height: 1950 },
    bodySrc: 'assets/characters/bill/base/body.PNG',
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
            id: 'jeans2',
            name: 'Skinny jeans',
            tab: 'clothes',
            subcategory: 'bottom',
            slot: 'bottom',
            src: 'assets/characters/bill/clothes/bottoms/skinny_jeans.PNG',
            icon: 'assets/characters/bill/icons/skinny_jeans.png',
            defaultZIndex: 45,
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
            isRemovable: true
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
            id: 'boots',
            name: 'Boots',
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
            id: 'red_top',
            name: 'Red top',
            tab: 'clothes',
            subcategory: 'top',
            slot: 'top_mid',
            src: 'assets/characters/bill/clothes/tops/red_top.PNG',
            icon: 'assets/characters/bill/icons/red_top.png',
            defaultZIndex: 65,
            isRemovable: true,
            isDefault: true
        },
        { id: 't_shirt',
            name: 'T-shirt',
            tab: 'clothes',
            subcategory: 'top',
            slot: 'top_mid',
            src: 'assets/characters/bill/clothes/tops/tshirt.PNG',
            icon: 'assets/characters/bill/icons/tshirt.png',
            defaultZIndex: 65,
            isRemovable: true,
            variants: {
                jacket: 'assets/characters/bill/clothes/tops/tshirt_jacket.PNG'
            }
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
            defaultZIndex: 15,
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
        }
    ]
};
