class Ship {
    constructor(startPos, sector, symbol, affliation) {
        this.pos = startPos;
        this.sector = sector;
        this.symbol = symbol;
        this.affliation = affliation;

    }

    static initDefaultShip() {
        return new Ship({x:0, y:0}, 0, '<S>', {
            id:'player',
            relationship:'self'
        })
    }

    static initEnemyShip() {
        return new Ship({x:1, y:1}, 0, '<E>', {
            id:'ulxgash',
            relationship:'hostile'
        })
    }

    getSymbol() {
        return this.symbol;
    }

    setPosition(x,y) {
        this.pos.x = x;
        this.pos.y = y;
    }

    getAffliation() {
        return this.affliation.id;
    }

}

export default Ship;