<template>
      <td @click='mapCellClicked'>
           {{symbol}}
       </td>
</template>

<script>
export default {
    props:['player', 'entities', 'mapCell', 'rindex', 'cindex'],
    methods: {
        mapCellClicked:function() {
            this.$emit('mapCellClicked', this.rindex, this.cindex)
        }
    },
    computed:{
        symbol:function(){

          if (!this.player || !this.entities || !this.mapCell) {
              return '';
          }

          if (this.player.pos.x == this.rindex && this.player.pos.y == this.cindex) {
              return this.player.getSymbol();
          } 

          let entity = this.entities.find(eachEntity=> 
                eachEntity.pos.x == this.rindex &&
                 eachEntity.pos.y == this.cindex);

          if(entity) {
              return entity.getSymbol();
          }

          return this.mapCell.symbol;
        }
    }
}
</script>

<style scoped>

</style>