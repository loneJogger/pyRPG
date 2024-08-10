export class Player {
    constructor(options) {
        this.party = options.party || { 
            first: null,
            second: null,
            thrid: null,
            forth: null
        }
    }
}