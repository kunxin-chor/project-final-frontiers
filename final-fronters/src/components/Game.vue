<template>
    <div>
        <Map :map='game.getMap()' :player='game.getPlayer()' @mapCellClicked='playerClicksCell'/>
    </div>
</template>

<script>
import GameModel from '../models/GameModel';
import CommandModel from '../models/CommandModel'
import Map from './Map'
export default {
    components:{
        Map
    },
    data:function(){
        return {
            game: new GameModel(),
            commands: new CommandModel()
        }
    },
    methods:{
        playerClicksCell:function(rindex, cindex){
            if (this.game.canMoveThere(rindex, cindex)) {
                this.game.movePlayer(rindex, cindex);
            }
        }
    }
}
</script>

<style scoped>
  
</style>