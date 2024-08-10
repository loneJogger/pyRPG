import { Item } from './item.js'

export class Equipment extends Item{

    constructor(options) {
        super(options)
        this.gear_type = options.gear_type || 'main_hand'
        this.element = options.element || ''
        this.bonuses = options.bonuses || []
        this.charClasses = options.charClasses || []
    }
}

export class Sword extends Equipment {
    constructor(options) {
        super(options)
        this.name = options.name || 'Iron Short Sword' 
        this.description = options.description || 'ATK + 2\nA simple iron sword. Standard issue for initiate level Knights of the Faith.'
        this.value = options.value || 50
        this.element = options.element || 'slash'
        this.charClasses = options.charClasses || ['Knight'],
        this.damage = options.damage || 2
    }
}

export class Shield extends Equipment {
    constructor(options) {
        super(options)
        this.name = options.name || 'Wooden Round Shield'
        this.description = options.description || 'DEF + 2 DEX + 1\nA light weight wooden shield bearing the crest of a nobel family.'
        this.gear_type = 'off_hand'
        this.value = options.value = 25
        this.charClasses = options.charClasses || ['Knight']
        this.defense = options.defense || 2
        this.dexterity = options.dexterity || 1
    }
}

export class Armor extends Equipment {
    constructor(options) {
        super(options)
        this.name = options.name || 'Chain Mail'
        this.description = options.description || 'DEF + 3\nAn old chain mail coat.'
        this.gear_type = 'body'
        this.value = options.value || 25
        this.charClasses = options.charClasses || ['Knight']
        this.defense = options.defense || 3
    }
}