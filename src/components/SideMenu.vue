<template>
  <div class="side-menu" ref="sideMenu" :class="{ show: showMenu }">
    <div class="items-wrapper" ref="itemsWrapper">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, enim
        aliquid, minus a corrupti dolore tempore reprehenderit eum, maiores
        ratione eius eveniet perspiciatis distinctio nostrum ullam debitis harum
        labore mollitia.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideMenu",
  props: {
    show: Boolean,
    width: String,
  },
  computed: {
    showMenu() {
      const show = this.$store.state.showMenu
      this.slide(show)
      return show
    },
  },
  methods: {
    slide(show) {
      this.$nextTick(() => {
        const view = document.querySelector("#page-view")
        if (show) {
          view.style.transform = `translate3d(${this.width}px, 0px, 0px)`
        } else {
          view.style.transform = `translate3d(0px, 0px, 0px)`
        }
      })
    },
  },
  mounted() {
    document.querySelector("#page-view").style.transition = "ease-in-out 0.3s"
    this.$refs.itemsWrapper.style.width = this.width + "px"
  },
}
</script>

<style coped lang="scss">
.side-menu {
  width: 0;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: skyblue;
  transition: ease-in-out 0.3s;
  overflow: hidden;
}

.show {
  width: 300px;
  box-shadow: 0px -3px 15px 5px gray;
  transition: ease-in-out 0.3s;
}

.items-wrapper {
  overflow: hidden;
  padding: 30px;
  box-sizing: border-box;
}
</style>
