<template>
  <div class="navbar">
    <div class="navbar__container">
      <div class="navbar__title">
        <h3 class="navbar__title--text">Koffee</h3>
      </div>
      <div class="navbar__container--flexview">
        <div title="Full Screen Mode" @click="activate_fullscreen" class="navbar__iconview">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"
            />
          </svg>
        </div>
        <div title="Search Products" class="navbar__iconview">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  mounted() {
    this.add_shadow();
    this.fullScreenMount();
  },
  methods: {
    add_shadow() {
      var nav_bar = document.querySelector(".navbar");
      window.addEventListener("scroll", () => {
        if (window.scrollY > 15) {
          nav_bar.classList.add("navbar_shadow");
        } else if (window.scrollY < 15) {
          nav_bar.classList.remove("navbar_shadow");
        }
      });
    },
    fullScreenMount() {
      var ScreenIcon = document.querySelector(".navbar__iconview");
      var isInFullScreen =
        (document.fullscreenElement && document.fullscreenElement !== null) ||
        (document.webkitFullscreenElement &&
          document.webkitFullscreenElement !== null) ||
        (document.mozFullScreenElement &&
          document.mozFullScreenElement !== null) ||
        (document.msFullscreenElement && document.msFullscreenElement !== null);

      if (isInFullScreen) {
        ScreenIcon.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/>
            </svg>`;
      }

      if (document.fullscreenEnabled) {
        document.addEventListener("fullscreenchange", function() {
          if (document.fullscreenElement) {
            ScreenIcon.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/>
            </svg>`;
          } else {
            ScreenIcon.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"
              />
            </svg>
            `;
          }
        });
        /** error detector */
        document.addEventListener("fullscreenerror", function() {
          console.log("FullScreen Error: @event.log(Any)");
        });
      }
    },
    activate_fullscreen() {
      var isInFullScreen =
        (document.fullscreenElement && document.fullscreenElement !== null) ||
        (document.webkitFullscreenElement &&
          document.webkitFullscreenElement !== null) ||
        (document.mozFullScreenElement &&
          document.mozFullScreenElement !== null) ||
        (document.msFullscreenElement && document.msFullscreenElement !== null);

      var docElm = document.documentElement;
      if (!isInFullScreen) {
        if (docElm.requestFullscreen) {
          docElm.requestFullscreen();
        } else if (docElm.mozRequestFullScreen) {
          docElm.mozRequestFullScreen();
        } else if (docElm.webkitRequestFullScreen) {
          docElm.webkitRequestFullScreen();
        } else if (docElm.msRequestFullscreen) {
          docElm.msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
    }
  }
};
</script>

<style lang="scss">
.navbar {
  position: fixed;
  width: 100%;
  top: 0;
  background-color: $theme-color;
  z-index: 999;

  &__container {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 1rem 0.7rem;

    &--flexview {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }

  &__title {
    &--text {
      font-size: 1.3rem;
      letter-spacing: 0.48999rem;
      font-weight: 600;
      color: $color-grey-100;
      font-family: inherit;
      text-transform: uppercase;
    }
  }

  &__iconview {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    text-align: center;
    padding: 0.8rem 0.3rem;
    fill: $color-grey-100;
    background-color: inherit;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      background-color: #86482d;
    }
  }
}

.navbar_shadow {
  box-shadow: 0px 1px 10px 1px rgba($color-dark-300, 0.4);
}
</style>