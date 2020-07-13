<template>
  <div id="app">
    <router-view></router-view>
    <AppLoader />
  </div>
</template>

<script>
import AppLoader from './components/Widgets/AppLoader';

export default {
  name: "App",
  components: {
    AppLoader,
  },
  mounted() {
    this.ImageProperty();
  },
  methods: {
    ImageProperty() {
      var ImgTag = document.querySelectorAll("img");
      ImgTag.forEach(tag => {
        tag.setAttribute("draggable", false);
        tag.addEventListener("contextmenu", e => {
          e.preventDefault();
        });
      });
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}

html {
  scroll-behavior: smooth;
  font-size: 62.5%;
}

img {
  display: block;
  width: 100%;
}

body {
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-family: "Open Sans", sans-serif, Arial, Helvetica;
  -webkit-tap-highlight-color: transparent;
}

h1, h2, h3, h4, h5, h6, p, span {
  font-family: inherit;
}
</style>
