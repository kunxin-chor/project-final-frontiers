<template>
  <div>
    <button class="command-btn" v-for="(c, i) in commands.getCommands()" 
            :key="i"
            :class='{ active : commands.isActiveCommand(c.id)}'
            @click='setActiveCommand(c)'
            >
      {{ c.name }}
    </button>
  </div>
</template>

<script>
export default {
  props: ["commands"],
  methods:{
      setActiveCommand(c) {
          this.commands.setActiveCommand(c);
      }
  }
};
</script>

<style scoped>
.command-btn {
  margin: 10px;
}

.active {
    background-color: green;
}
</style>
