import Character from '../character.js'
import { Armor, Weapon, Shield } from '../../items/equipment.js'
import equipmentData from '../../../data/equipment.js'
import { UsableItem } from '../../items/item.js'

const defaults = {
    name: 'Bonnie',
    char_class: 'Knight',
    hp: { total: 28, current: 28 },
    ap: { total: 8, current: 8 },
    attributes: {
        strength: 12,
        intelligence: 6,
        defense: 10,
        spirit: 6,
        dexterity: 7,
        luck: 7
    },
    growth: {
        hp: { m: 7.5, b: 20 },  // lvl. 1: 28, lvl. 99: 763
        ap: { m: 1.5, b: 6 },   // lvl. 1:  8, lvl. 99: 155
        str: { m: 2.1, b: 9 },  // lvl. 1: 12, lvl. 99: 217
        int: { m: 0.34, b: 5 }, // lvl. 1:  6, lvl. 99:  39
        def: { m: 1.9, b: 8 },  // lvl. 1: 10, lvl. 99: 197
        spr: { m: 0.45, b: 5 }, // lvl. 1:  6, lvl. 99:  50
        dex: { m: 0.5, b: 6 },  // lvl. 1:  7, lvl. 99:  56 
        luk: { m: 0.5, b: 6 },  // lvl. 1:  7, lvl. 99:  56
    },
    resistences: {
        fire: 0.875,
        water: 1.0,
        earth: 1.125,
        air: 1.0,
        light: 1.25,
        dark: 0.875,
        slash: 1.125,
        blunt: 1.125,
        shoot: 1.0
    },
    bonuses: [
        {
            name: 'Parry',
            learn_level: 4,
            description: ''
        }
    ],
    actions: [
        {
            name: 'Attack',
            learn_level: 1
        },
        {
            name: 'Defend',
            learn_level: 1
        },
        {
            name: 'Item',
            learn_level: 1
        },
        {
            name: 'Chivalry',
            learn_level: 2
        }
    ],
    techniques: [
        {
            name: 'Bodyguard',
            learn_level: 2
        }
    ]  
}

export class Knight extends Character {

    constructor(props) {
        super({ ...defaults, ...props })     
    }

    setStartingGear() {
        let { items, equipment } = this.props
        items = [
            new UsableItem({ stackSize: 3 }), 
        ]
        equipment = {
            main_hand: new Weapon(equipmentData.weapons.swords[0]),
            off_hand: new Shield(equipmentData.shields[0]),
            head: null,
            body: new Armor(equipmentData.armors[0]),
            feet: null,
            accessory_1: null,
            accessory_2: null,
            accessory_3: null,
        }
    }

    getParry() {}

    execBodyguard() {}
}