<template>
  <div class="nav-bar">
    <div class="menu-btn" @click="controlMenu">■</div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  computed:{
    showMenu(){return this.$store.state.showMenu}
  },
  methods:{
    controlMenu(){
      this.$store.commit('SHOW_MENU', !this.showMenu)
    }
  }
}
</script>

<style coped lang="scss">
.nav-bar {
  position: relative;
  width: 100%;
  height: 100%;
  background: white;
  grid-row: 1;
  box-shadow: 0px -3px 15px 5px gray;
  z-index: 2;
}

.menu-btn{
  position: absolute;
  width: 50px;
  height: 50px;
  top: auto;
  left: 10px;
  bottom: auto;
  font-size: 50px;
  cursor: pointer;
}
</style>
