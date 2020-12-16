<template>
       <table>
            <tr v-for='(row, rindex) in map' v-bind:key='rindex'>
                <td v-for='(col, cindex) in row' v-bind:key='cindex' @click='mapCellClicked(rindex, cindex)'>
                    <span v-if='isPlayerHere(rindex, cindex)'>
                        {{player.getSymbol()}}
                    </span>
                    <span v-else>
                        {{col.symbol}}
                    </span>
                </td>
            </tr>
        </table>
</template>

<script>
export default {
    props:['map', 'player'],
    methods:{
      isPlayerHere:function(rindex, cindex) {
          if (this.player.pos.x == rindex && this.player.pos.y == cindex) {
              return true;
          } else {
              return false;
          }
      },
      mapCellClicked:function(rindex, cindex){
          this.$emit('mapCellClicked', rindex, cindex);
      }
    }
}
</script>


<style scoped>
  table {
        border-collapse: collapse;
    }
    td {
        font-family: monospace;
        width: 25px;
        height: 25px;
        margin: 0;
        padding: 0;
        text-align:center;
        font-size: 24px;
        border: 1px dashed rgba(0, 0, 0, 0.068);
    }
</style>