export class CharClass {

    constructor (options) {
        this.name = options.name || 'DEFAULT_CLASS'
        this.growth = options.growth || {
            hp: { m: 0.5, b: 1 },
            ap: { m: 0.5, b: 1 },
            str: { m: 0.5, b: 1 },
            int: { m: 0.5, b: 1 },
            def: { m: 0.5, b: 1 },
            spr: { m: 0.5, b: 1 },
            dex: { m: 0.5, b: 1 },
            luk: { m: 0.5, b: 1 },
        }
        this.bonuses = options.bonuses || []
        this.actions = options.actions || []
        this.techniques = options.techniques || []
    }
}

export const knight = new CharClass({
    name: 'knight',
    growth: {
        hp: { m: 9, b: 18 },
        ap: { m: 3, b: 7 },
        str: { m: 4, b: 10 },
        int: { m: 0, b: 1 },
        def: { m: 4, b: 12 },
        spr: { m: 3, b: 5 },
        dex: { m: 0.1, b: 1 },
        luk: { m: 0.3, b: 5 }
    },
    bonuses: [],
    actions: [],
    techniques: [] 
})