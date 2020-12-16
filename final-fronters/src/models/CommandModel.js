class CommandModel {
    commands = [
        {
            'id':'navigate',
            'name': "Navigate",
            'desc': "Move your ship to the selected coordinate"
        },
        {
            'id':'fire-primary',
            'name':'Fire Primary Weapons',
            'desc':"Fire your primary weapons at a target"
        }
    ]
    constructor(game) {
        this.game = game;
        this.currentCommand = this.commands[0];
    }
    
    // executeCurrentCommand(x, y) {
        
    // }
}

export default CommandModel;