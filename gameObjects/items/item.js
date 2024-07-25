export class Item {

    constructor(options) {
        this.name = options.name || 'DEFAULT_NAME'
        this.description = options.description || 'DEFAULT_DESCRIPTION'
        this.value = options.value || 1
        this.sellable = options.sellable || true
    }
}

export class Equipment extends Item{

    constructor(options) {
        this.gear_type = options.gear_type || 'main_hand'
        this.element = options.element || ''
        this.bonuses = options.bonuses || []
    }
}