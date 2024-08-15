import { randomInt } from "../../lib/lib.js"
import { Equipment } from "../items/equipment.js"

const DICE = 10
const HARD_CAP = 255

const defaults = {
    name: '!UNNAMED_CHAR!',
    level: 1,
    experience: 0,
    char_class: '!NO_CLASS!',
    hp: { total: 10, current: 10 },
    ap: { total: 0, current: 0 },
    states: [],
    modifiers: [],
    attributes: {
        strength: 1,
        intelligence: 1,
        defense: 1,
        spirit: 1,
        dexterity: 1,
        luck: 1
    },
    growth: {
        hpg: { m: 0.5, b: 1 },
        apg: { m: 0.5, b: 1 },
        str: { m: 0.5, b: 1 },
        int: { m: 0.5, b: 1 },
        def: { m: 0.5, b: 1 },
        spr: { m: 0.5, b: 1 },
        dex: { m: 0.5, b: 1 },
        luk: { m: 0.5, b: 1 },
    },
    resistences: {
        fire: 1.0,
        water: 1.0,
        earth: 1.0,
        air: 1.0,
        light: 1.0,
        dark: 1.0,
        slash: 1.0,
        blunt: 1.0,
        shoot: 1.0
    },
    items: [],
    equipment: {
        main_hand: null,
        off_hand: null,
        head: null,
        body: null,
        feet: null,
        accessory_1: null,
        accessory_2: null,
        accessory_3: null,
    },
    bounses: [],
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
        }
    ],
    techniques: []
}

export default class Character {

    constructor(props) {
        this.props = { ...defaults, ...props }
    }

    // todo: write quadradic for character level
    getCurrentLevel() {
        const { experience } = this.props
        return Math.floor(1)
    }

    setlevel (newLevel) {
        const { hp, ap } = this.props
        let { level } = this.props
        const { hpg, apg, str, int, def, spr, dex, luk } = this.props.growth
        let { strength, intelligence, defense, spirit, dexterity, luck } = this.props.attributes
        level = newLevel
        hp.total = Math.ceil(hpg.m * level) + hpg.b
        ap.total = Math.ceil(apg.m * level) + apg.b
        strength = Math.ceil(str.m * level) + str.b
        intelligence = Math.ceil(int.m * level) + int.b
        defense = Math.ceil(def.m * level) + def.b
        spirit = Math.ceil(spr.m * level) + spr.b
        dexterity = Math.ceil(dex.m * level) + dex.b
        luck = Math.ceil(luk.m * level) + luk.b
    }

    getAttack () {
        const { attributes, equipment } = this.props
        const roll = randomInt(DICE)
        if (equipment.main_hand) {
            const weaponBonus = Math.ceil(equipment.main_hand.damage)
            return { 
                damage: (roll + Math.ciel(attributes.strength / 2) + weaponBonus) * this.getCritMultiplier(), 
                element:  equipment.main_hand.element
            }
        } else {
            return { 
                damage: (roll + Math.ciel(attributes.strength / 2)) * this.getCritMultiplier(),
                element: '!NO_ELEMENT!'
            }
        }
    }

    getAtkReduce (element) {
        const { attributes, resistences, equipment } = this.props
        const offHandDef = equipment.off_hand.defense || 0
        const headDef = equipment.head.defense || 0
        const bodyDef = equipment.body.defense || 0
        const feetDef = equipment.feet.defense || 0
        if (element) {
            return offHandDef + headDef + bodyDef + feetDef + Math.ceil(attributes.defense / 2) * resistences[element]
        }
        return offHandDef + headDef + bodyDef + feetDef + Math.ceil(attributes.defense / 2)
    }

    getMagReduce (element) {
        const { attributes, resistences, equipment } = this.props
        const offHandSpt = equipment.off_hand.spirit || 0
        const headSpt = equipment.head.spirit || 0
        const bodySpt = equipment.body.spirit || 0
        const feetSpt = equipment.feet.spirit || 0
        if (element) {
            return offHandSpt + headSpt + bodySpt + feetSpt + Math.ceil(attributes.spirit / 2) * resistences[element]
        }
        return offHandSpt + headSpt + bodySpt + feetSpt + Math.ceil(attributes.spirit / 2)
    }

    isDodged () {
        const { attributes, equipment } = this.props
        const offHandDex = equipment.off_hand.dexterity || 0
        return randomInt(HARD_CAP) > HARD_CAP - attributes.dexterity + offHandDex ? true : false
    }

    getCritMultiplier () {
        const { attributes } = this.props
        return randomInt(HARD_CAP) > HARD_CAP - attributes.luck ? 2 : 1
    }

    execAttack () {}

    execDefend () {}

    execUseItem () {}

    getEquipable () {
        const { items } = this.props
        return items.filter(e => e instanceof Equipment && e.charlasses.includes(this.charClass))
    }

    setEquip (item, gearType) {
        const { equipment } = this.props
        let { items } = this.props
        if (equipment[gearType]) {
            items.push(equipment[gearType])
        }
        equipment[gearType] = item
        if (item.stackSize > 1) {
            item.stackSize -= 1
        } else {
            const i = items.findIndex(e => e.name === item.name)
            items = [ ...items.slice(0, i), ...items.slice(i) ]
        }
    }

    SetUnequipped (item, gearType) {
        const { items, equipment } = this.props
        if (item.stackSize = 1) {
            items.push(item)
        } else {
            item.stackSize += 1
        }
        equipment[gearType] = null
    }
}