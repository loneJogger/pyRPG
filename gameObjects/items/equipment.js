import { Item } from './item.js'

const defaults = {
    gear_type: '!NO_GEAR_TYPE!',
    element: '!NO_ELEMENT!',
    bonuses: [],
    char_classes: ['Knight']
}

const defaultSword = {
    name: 'Iron Short Sword',
    description: 'ATK + 2\nA simple iron sword. Standard issue for initiate level Knights of the Faith.',
    gear_type: 'main_hand',
    element: 'slash',
    value: 50,
    damage: 2
}

const defaultShield = {
    name: 'Wooden Round Shield',
    description: 'DEF + 2 DEX + 1\nA light weight wooden shield bearing the crest of a nobel family.',
    gear_type: 'off_hand',
    value: 25,
    defense: 2,
    dexterity: 1
}

const defaultArmor = {
    name: 'Old Mail',
    description: 'DEF + 3\nAn old chain mail coat.',
    gear_type: 'body',
    value: 25,
    defense: 3
}

export class Equipment extends Item{

    constructor(props) {
        super({ ...defaults, props }) 
    }
}

export class Sword extends Equipment {

    constructor(props) {
        super({ ...defaultSword, props })
    }
}

export class Shield extends Equipment {

    constructor(props) {
        super({ ...defaultShield, props })
    }
}

export class Armor extends Equipment {

    constructor(props) {
        super({ ...defaultArmor, props })
    }
}