import Ship from "./Ship";

const MAP_WIDTH = 10;
const MAP_HEIGHT = 10;

class GameModel {
  constructor() {
    this.currentSectorMap = this.createSectorMap();
    this.galaxyMap = [];
    this.playerShip = Ship.initDefaultShip();
    this.entities = [];
    this.initGame();
  }

  initGame() {
    this.entities.push(new Ship.initEnemyShip());
  }

  getEntities() {
      return this.entities;
  }

  createSectorMap() {
    let numberOfBases = 0;
    let map = [];
    for (let i = 0; i < MAP_WIDTH; i++) {
      map.push([]);
      for (let j = 0; j < MAP_HEIGHT; j++) {
        let roll = Math.floor(Math.random() * 6) + 1;
        if (roll == 6) {
          map[i].push(this.createNewMapTile(i, j, ".*.", "star"));
        } else if (roll == 5 && numberOfBases == 0) {
          map[i].push(this.createNewMapTile(i, j, "<B>", "base"));
          numberOfBases++;
        } else {
          map[i].push(this.createNewMapTile(i, j, "...", "empty"));
        }
      }
    }
    return map;
  }
  createNewMapTile(row, col, symbol, name) {
    return {
      row,
      col,
      symbol,
      name
    };
  }
  getMap() {
    return this.currentSectorMap;
  }
  getPlayer() {
    return this.playerShip;
  }
  canMoveThere(x, y) {
    return this.currentSectorMap[x][y].name == "empty" ? true : false;
  }
  movePlayer(x, y) {
    this.getPlayer().setPosition(x, y);
  }
}

export default GameModel;
