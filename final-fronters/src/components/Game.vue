<template>
    <div id="game-container">
        <Map :map='game.getMap()' 
            :player='game.getPlayer()' 
            :entities='game.getEntities()'
            @mapCellClicked='playerClicksCell'/>
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
            if (this.gameState == 'awaiting-commands') {
                this.commands.executeCurrentCommand(rindex, cindex)
            }
            if (this.gameState == 'awaiting-weapon-target') {
                console.log("acquired target at", rindex, cindex);
            }
            
        }
    },
    computed:{
        gameState:function(){
            if (this.game) {
                return this.game.getState();
            } else {
                return "";
            }
            
        }
    },
    watch:{
        gameState:function(){
            if (this.gameState == 'confirm-attack-target') {
                console.log("Setup for weapon target")
            }
        }
    }
}
</script>

<style scoped>
  
</style>