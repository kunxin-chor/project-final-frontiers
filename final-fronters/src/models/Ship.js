import WeaponSystem from "./WeaponSystem";

class Ship {
  constructor(startPos, sector, symbol, affliation) {
    this.pos = startPos;
    this.sector = sector;
    this.symbol = symbol;
    this.affliation = affliation;
  }

  static initDefaultShip() {
    return new Ship({ x: 0, y: 0 }, 0, "<S>", {
      id: "player",
      relationship: "self",
      weapons: [
        new WeaponSystem({
          name: "Particle Cannon",
          min_damage: 5,
          max_damage: 15,
          accuracy: 95,
          energy_cost_per_shot: 10,
          heat_per_shot: 10,
          max_heat: 100
        }),
        new WeaponSystem({
          name: "Plasma Cannon",
          min_damage: 15,
          max_damage: 30,
          accuracy: 95,
          energy_cost_per_shot: 5,
          heat_per_shot: 20,
          max_heat: 100    
        })
      ]
    });
  }

  static initEnemyShip() {
    return new Ship({ x: 1, y: 1 }, 0, "<E>", {
      id: "ulxgash",
      relationship: "hostile"
    });
  }

  getSymbol() {
    return this.symbol;
  }

  setPosition(x, y) {
    this.pos.x = x;
    this.pos.y = y;
  }

  getAffliation() {
    return this.affliation.id;
  }
}

export default Ship;
