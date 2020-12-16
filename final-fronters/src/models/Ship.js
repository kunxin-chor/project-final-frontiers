class Ship {
    constructor() {
        this.pos = {x:0, y:0};
        this.sector = 0;
        this.symbol = "<S>"
    }

    getSymbol() {
        return this.symbol;
    }

    setPosition(x,y) {
        this.pos.x = x;
        this.pos.y = y;
    }

}

export default Ship;