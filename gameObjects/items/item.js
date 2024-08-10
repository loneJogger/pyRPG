export class Item {

    constructor(options) {
        this.name = options.name || 'DEFAULT_NAME'
        this.description = options.description || 'DEFAULT_DESCRIPTION'
        this.value = options.value || 1
        this.sellable = options.sellable || true
        this.stackSize = options.stackSize || 1
    }
}

export class UsableItem extends Item {

    constructor(options) {
        super(options)
        this.name = options.name || 'Green Herb'
        this.description = options.description || 'A pale, green and leafy herb. Restores a small amount of HP.',
        this.value = options.value || 10
        this.whenUsed = options.whenUsed || [
            {
                effect: 'restore',
                propertry: 'hp',
                amount: 15
            }
        ]
    }

    restore (target, effect) {
        const { total, current } = target[effect.propertry]
        let newValue = current + effect.amount
        if (newValue <= total) {
            return newValue
        }
        return total 
    }
}