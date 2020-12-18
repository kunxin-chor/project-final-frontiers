<template>
    <div id="game-container">
        <Map :map='game.getMap()' :player='game.getPlayer()' @mapCellClicked='playerClicksCell'/>
        <CommandPanel :commands='commands'/>
    </div>
</template>

<script>
import GameModel from '../models/GameModel';
import CommandModel from '../models/CommandModel'
import CommandPanel from '../components/CommandPanel'
import Map from './Map'
export default {
    components:{
        Map, CommandPanel
    },
    data:function(){
        return {
            game: null,
            commands: null
        }
    },
    created() {
        this.game = new GameModel();
        this.commands = new CommandModel(this.game);
    },
    methods:{
        playerClicksCell:function(rindex, cindex){
            this.commands.executeCurrentCommand(rindex, cindex)
        }
    }
}
</script>

<style scoped>
  
</style>