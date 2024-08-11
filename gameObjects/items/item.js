const defaults = {
    name: '!NO_ITEM_NAME!',
    description: '!NO_ITEM_DESC!',
    value: 1,
    sellable: true,
    stackSize: 1
}

const defaultUsableItem = {
    name: 'Green Herb',
    description: 'A pale, green and leafy herb. Restores a small amount of HP.',
    value: 10,
    whenUsed: [
        {
            effect: 'restore',
            propertry: 'hp',
            amount: 15
        }
    ]
}

export class Item {

    constructor(props) {
        this.props = { ...defaults, ...props }
    }
}

export class UsableItem extends Item {

    constructor(props) {
        super({ ...defaultUsableItem, props })
    }

    getRestore (target, effect) {
        const { total, current } = target.props[effect.propertry]
        let newValue = current + effect.amount
        if (newValue <= total) {
            return newValue
        }
        return total 
    }
}