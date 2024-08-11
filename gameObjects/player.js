const defaults = {
    party: { 
        first: null,
        second: null,
        thrid: null,
        forth: null
    }
}

export class Player {
    
    constructor(props) {
        this.props = { ...defaults, ...props }
    }
}