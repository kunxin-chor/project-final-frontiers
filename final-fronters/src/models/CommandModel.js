class CommandModel {
    commands = [
        {
            'id':'navigate',
            'name': "Navigate",
            'desc': "Move your ship to the selected coordinate",
            
        },
        {
            'id':'firePrimary',
            'name':'Fire Primary Weapons',
            'desc':"Fire your primary weapons at a target"
        }
    ]
    constructor(game) {
        this.game = game;
        this.currentCommand = this.commands[0];
    }
    
    getCommands() {
        return this.commands;
    }

    executeCurrentCommand(x, y) {
       this[this.currentCommand.id](x,y);
    }

    isActiveCommand(commandId) {
        return this.currentCommand.id == commandId;
    }

    setActiveCommand(command) {
        this.currentCommand = command;
    }

    // used as part of a callback, so make sure we use arrow functions
    navigate = (x, y) => {
           if (this.game.canMoveThere(x, y)) {
                this.game.movePlayer(x, y);
            }
    }

    firePrimary = (x, y) => {
        console.log("Firing at",x,',',y);
    }
}   

export default CommandModel;