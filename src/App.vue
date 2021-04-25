<template>
  <div id="app">
    <div class="page-wrapper">
      <NavBar />

      <div class="main-area">
        <SideMenu width="300" />
        <router-view id="page-view" class="pages"/>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue"
import SideMenu from "@/components/SideMenu.vue"

export default {
  components: { NavBar, SideMenu },
  computed:{
    showMenu() {
      return this.$store.state.showMenu
    },
  }
}
</script>

<style lang="scss">
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

.page-wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 7% 93%;
}

.main-area {
  position: relative;
  width: 100%;
  height: 100%;
  background: white;
  grid-row: 2;
  overflow: hidden;
  transition: ease-in-out 0.3s;
}

.pages {
  width: 100%;
  height: 100%;
  flex-grow: 1;
  // border: grey solid 1px;
  box-sizing: border-box;
  display: grid;
  place-items: center;
}

</style>
