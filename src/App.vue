<template>
  <div id="app">
    <div class="page-wrapper">
      <NavBar />

      <div class="main-area">
        <SideMenu />
        <router-view class="pages"/>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
import SideMenu from '@/components/SideMenu.vue'

export default{
  components: {NavBar, SideMenu}, 

}
</script>

<style lang="scss">
html, body, #app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

.page-wrapper{
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 7% 93%;
}

.main-area{
  width: 100%;
  height: 100%;
  display: flex;
  background: white;
  grid-row: 2;
  overflow: hidden;
}

.pages{
  width: 100%;
  height: 100%;
  flex-grow: 1;
  // border: grey solid 1px;
  box-sizing: border-box;
  display: grid;
  place-items: center;
}
</style>
