<template>
  <div v-if="active" class="apploader">
    <div class="apploader__container">
      <div class="apploader__textview">
        <h3 class="apploader__textview--text">Koffee</h3>
      </div>
      <div class="apploader__imagebox">
        <img src="@/assets/Images/coffee.png" alt="boot" class="apploader__imagebox--image" />
      </div>
      <div class="apploader__loaderbox">
        <div class="progressbar">
          <div class="progressbar__innerbar"></div>
        </div>
      </div>
    </div>
    <div class="apploader__titlebox">
      <h3 class="apploader__titlebox--text">@Jaykob_w</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppLoader",
  data() {
    return {
        active: true,
    };
  },
  mounted() {
    this.start_loader();
  },
  methods: {
    start_loader() {
      var counter = 0;
      var progressloader = document.querySelector(".progressbar__innerbar");
      var self = this;

      /** Interval */
      var Loader = setInterval(loading, 50);

      /** Hide scroll bar when modal is open */
      document.body.style.overflowY = "hidden";

      function loading() {
        if (counter >= 100) {
          clearInterval(Loader);
          /** show scroll bar when loading is complete */
          document.body.style.overflowY = "auto";
          /** set loading state as false */
          self.active = false;
        } else {
          counter++;
          progressloader.style.width = counter + "%";
        }
      }
    }
  }
};
</script>

<style lang="scss">
.apploader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $theme-color;
  z-index: 9999;
  overflow: hidden;

  &__container {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40rem;

    @include respond(tab-port) {
      width: 100%;
    }
  }

  &__textview {
    text-align: center;
    padding-bottom: 1rem;

    &--text {
      font-family: inherit;
      font-size: 1.3rem;
      font-weight: 600;
      color: $color-grey-100;
      text-transform: uppercase;
      letter-spacing: 0.4993rem;
    }
  }

  &__imagebox {
    margin: 0 auto;
    background-color: $theme-color;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    padding: 0.7rem 0.3rem;

    &--image {
      object-fit: cover;
      width: 6rem;
      margin: 0 auto;
    }
  }

  &__loaderbox {
    padding: 1rem 13rem;
  }

  &__titlebox {
    position: absolute;
    bottom: 2rem;
    text-align: center;
    width: 100%;
    background-color: $theme-color;

    &--text {
      font-family: inherit;
      font-size: 1rem;
      font-weight: 600;
      color: $color-grey-100;
      text-transform: uppercase;
      letter-spacing: 0.4999rem;
    }
  }
}

.progressbar {
  background-color: $color-brown-700;
  padding: 0rem 0rem;

  &__innerbar {
    padding: 0.2rem;
    background-color: $color-white;
  }
}
</style>