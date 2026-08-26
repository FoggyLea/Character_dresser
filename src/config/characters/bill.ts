import type { CharacterConfig } from '../../types';

export const BillWeasley: CharacterConfig = {
    id: 'billweasley',
    name: 'Bill Weasley',
    author: 'leafoggy',
    canvasSize: { width: 1400, height: 1950 },
    bodySrc: 'assets/characters/bill/base/body.PNG',
    items: [
        {
            id: 'ponytail',
            name: 'Ponytail',
            tab: 'hair',
            subcategory: 'hair',
            slot: 'hair',
            src: '/assets/characters/bill/hair/ponytail.PNG',
            defaultZIndex: 15,
            isRemovable: false
        },
        {
            id: 'jeans1',
            name: 'Baggy jeans',
            tab: 'clothes',
            subcategory: 'bottom',
            slot: 'bottom',
            src: '/assets/characters/bill/clothes/bottoms/baggy_jeans.PNG',
            defaultZIndex: 50,
            isRemovable: true
        },
        {
            id: 'vest',
            name: 'Denim vest',
            tab: 'clothes',
            subcategory: 'outerwear',
            slot: 'outerwear',
            src: '/assets/characters/bill/clothes/outerwear/denim_vest.PNG',
            defaultZIndex: 70,
            isRemovable: true
        },
        {
            id: 'boots',
            name: 'Boots',
            tab: 'clothes',
            subcategory: 'shoes',
            slot: 'shoes',
            src: '/assets/characters/bill/clothes/shoes/boots.PNG',
            defaultZIndex: 40,
            isRemovable: true
        },
        {
            id: 'mesh',
            name: 'Mesh sweater',
            tab: 'clothes',
            subcategory: 'top',
            slot: 'top_inner',
            src: '/assets/characters/bill/clothes/tops/mesh_sweater.PNG',
            defaultZIndex: 20,
            isRemovable: true
        },
        {
            id: 'top1',
            name: 'Red top',
            tab: 'clothes',
            subcategory: 'top',
            slot: 'top_mid',
            src: '/assets/characters/bill/clothes/tops/red_top.PNG',
            defaultZIndex: 60,
            isRemovable: true
        },
        {
            id: 'scars',
            name: 'Scars',
            tab: 'details',
            subcategory: 'skin',
            slot: 'skin',
            src: '/assets/characters/bill/details/skin/scars.PNG',
            defaultZIndex: 10,
            isRemovable: true
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
