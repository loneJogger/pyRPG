import Character from './../character'

export class Knight extends Character {
    constructor(options) {
        this.name = 'Bonnie'
        this.level = options.level || 1
        this.charClass = 'Knight'
        this.hp = { total: 28, current: 28 }
        this.ap = { total: 8, current: 8 }
        this.attributes = {
            strength: 12,
            intelligence: 6,
            defense: 10,
            spirit: 6,
            dexterity: 7,
            luck: 7
        }
        this.growth = {
            hp: { m: 7.5, b: 20 },  // lvl. 1: 28, lvl. 99: 763
            ap: { m: 1.5, b: 6 },   // lvl. 1:  8, lvl. 99: 155
            str: { m: 2.1, b: 9 },  // lvl. 1: 12, lvl. 99: 217
            int: { m: 0.34, b: 5 }, // lvl. 1:  6, lvl. 99:  39
            def: { m: 1.9, b: 8 },  // lvl. 1: 10, lvl. 99: 197
            spr: { m: 0.45, b: 5 }, // lvl. 1:  6, lvl. 99:  50
            dex: { m: 0.5, b: 6 },  // lvl. 1:  7, lvl. 99:  56 
            luk: { m: 0.5, b: 6 },  // lvl. 1:  7, lvl. 99:  56
        }
        this.resistences = {
            fire: 0.875,
            water: 1.0,
            earth: 1.125,
            air: 1.0,
            light: 1.25,
            dark: 0.875,
            slash: 1.125,
            blunt: 1.125,
            shoot: 1.0
        }
        // todo: design some gear
        this.items = []
        this.equipment = {
            main_hand: null,
            off_hand: null,
            head: null,
            body: null,
            feet: null,
            accessory_1: null,
            accessory_2: null,
            accessory_3: null,
        }
        this.bonuses = [
            {
                name: 'Parry',
                learn_level: 5,
                description: ''
            }
        ]
        this.actions = [
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
        ]
        this.techniques = [
            {
                name: 'Bodyguard',
                learn_level: 2
            }
        ]  
    }

    parry() {}

    bodyguard() {}
}