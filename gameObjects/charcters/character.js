const DICE = 10
const HARD_CAP = 255
const SOFT_CAP = 50

export default class Character {

    constructor(options) {
        this.name = options.name || 'DEFAULT_NAME'
        this.level = options.level || 1
        this.charClass = options.charClass || 'NO CLASS'
        this.hp = options.hp || { total: 10, current: 10 }
        this.ap = options.ap || { total: 0, current: 0 }
        this.status = options.status || []
        this.modifiers = []
        this.attributes = options.attributes || {
            strength: 1,
            intelligence: 1,
            defense: 1,
            spirit: 1,
            dexterity: 1,
            luck: 1
        }
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
        this.resistences = options.resistences || {
            fire: 1.0,
            water: 1.0,
            earth: 1.0,
            air: 1.0,
            light: 1.0,
            dark: 1.0,
            slash: 1.0,
            blunt: 1.0,
            shoot: 1.0
        }
        this.items = options.items || []
        this.equipment = options.equipment || {
            main_hand: null,
            off_hand: null,
            head: null,
            body: null,
            feet: null,
            accessory_1: null,
            accessory_2: null,
            accessory_3: null,
        }
        this.bonuses = options.bonuses || []
        this.actions = options.actions || []
        this.actions.push({
            name: 'Attack',
            learn_level: 1
        })
        this.actions.push({
            name: 'Defend',
            learn_level: 1
        })
        this.actions.push({
            name: 'Item',
            learn_level: 1
        })
        this.techniques = options.techniques || []
    }

    setlevel (level) {
        const { hp, ap, str, int, def, spr, dex, luk } = this.growth
        this.level = level
        this.hp = Math.ceil(hp.m * level) + hp.b
        this.ap = Math.ceil(ap.m * level) + ap.b
        this.attributes.strength = Math.ceil(str.m * level) + str.b
        this.attributes.intelligence = Math.ceil(int.m * level) + int.b
        this.attributes.defense = Math.ceil(def.m * level) + def.b
        this.attributes.spirit = Math.ceil(spr.m * level) + spr.b
        this.attributes.dexterity = Math.ceil(dex.m * level) + dex.b
        this.attributes.luck = Math.ceil(luk.m * level) + luk.b
        this.bonuses = []
        for (const bonus of this.charClass.bonuses) {
            if (level >= bonus.learn_level) {
                this.bonuses.push(bonus)
            }
        }
        this.actions = []
        for (const action of this.charClass.actions) {
            if (level >= action.learn_level) {
                this.actions.push(action)
            }
        }
        this.techniques = []
        for (const technique of this.charClass.techniques) {
            if (level >= technique.learn_level) {
                this.techniques.push(technique)
            }
        }
    }

    calcAttack () {
        const roll = randomInt(DICE)
        const critMultiplier = this.randomInt(HARD_CAP) > HARD_CAP - this.attributes.luck ? 2 : 1
        const weaponBonus = this.equipment.main_hand ? Math.ceil(this.equipment.main_hand.damage) : 0
        if (this.equipment.main_hand) {
            return { 
                damage: (roll + Math.ciel(this.attributes.strength / 2) + weaponBonus) * critMultiplier, 
                element:  this.equipment.main_hand.element
            }
        }
        return { 
            damage: (roll + Math.ciel(this.attributes.strength / 2) + weaponBonus) * critMultiplier,
            element: 'none'
        }
    }

    calcAtkReduce (element) {
        const offHandDef = this.equipment.off_hand.defense || 0
        const headDef = this.equipment.head.defense || 0
        const bodyDef = this.equipment.body.defense || 0
        const feetDef = this.equipment.feet.defense || 0
        if (element) {
            return offHandDef + headDef + bodyDef + feetDef + Math.ceil(this.attributes.defense / 2) * this.resistences[element]
        }
        return offHandDef + headDef + bodyDef + feetDef + Math.ceil(this.attributes.defense / 2)
    }

    calcMagReduce (element) {
        const offHandSpt = this.equipment.off_hand.spirit || 0
        const headSpt = this.equipment.head.spirit || 0
        const bodySpt = this.equipment.body.spirit || 0
        const feetSpt = this.equipment.feet.spirit || 0
        if (element) {
            return offHandSpt + headSpt + bodySpt + feetSpt + Math.ceil(this.attributes.spirit / 2) * this.resistences[element]
        }
        return offHandSpt + headSpt + bodySpt + feetSpt + Math.ceil(this.attributes.spirit / 2)
    }

    checkDodge () {
        return this.randomInt(HARD_CAP) > HARD_CAP - this.attributes.dexterity ? true : false
    }

    randomInt(max_number) {
        Math.floor(Math.random() * max_number)
    }

}