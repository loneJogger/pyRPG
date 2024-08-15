import { Item } from './item.js'

const defaults = {
    gear_type: '!NO_GEAR_TYPE!',
    element: '!NO_ELEMENT!',
    bonuses: [],
    char_classes: ['Knight']
}

const defaultWeapon = {
    gear_type: 'main_hand',
    damage: 0
}

const defaultShield = {
    gear_type: 'off_hand',
    defense: 0,
    dexterity: 0
}

const defaultArmor = {
    gear_type: 'body',
    defense: 0,
    spirit: 0
}

const defaultHat = {
    gear_type: 'head',
    defense: 0,
    spirit: 0
}

export class Equipment extends Item{

    constructor(props) {
        super({ ...defaults, props }) 
    }
}

export class Weapon extends Equipment {

    constructor(props) {
        super({ ...defaultWeapon, props })
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

export class Hat extends Equipment {

    constructor(props) {
        super({ ...defaultHat, props })
    }
}