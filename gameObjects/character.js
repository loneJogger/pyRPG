export default class Character {

    constructor(options) {
        this.name = options.name || 'DEFAULT_NAME'
        this.level = options.level || 1
        this.hp = options.hp || { total: 10, current: 10 }
        this.ap = options.ap || { total: 0, current: 0 }
        this.status = options.status || []
        this.attributes = options.attributes || {
            strength: 1,
            intelligence: 1,
            defense: 1,
            spirit: 1,
            dexterity: 1,
            luck: 1
        }
        this.resistences = options.resistences || {
            fire: 1,
            water: 1,
            earth: 1,
            air: 1,
            light: 1,
            dark: 1
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
    }
}