<template>
       <table>
            <tr v-for='(row, rindex) in map' v-bind:key='rindex'>
                <MapCell v-for='(col, cindex) in row' 
                    :key='cindex' 
                    :player='player'
                    :entities='entities'
                    :rindex ='rindex'
                    :cindex ='cindex'
                    :mapCell='col'
                    @mapCellClicked='mapCellClicked'
                />                             
            </tr>
        </table>
</template>

<script>
import MapCell from './MapCell';
export default {
    components:{
        MapCell
    },
    props:['map', 'player', 'entities'],
    methods:{     
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