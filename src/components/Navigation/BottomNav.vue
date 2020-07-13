<template>
  <div class="bottomnav">
    <div class="bottomnav__container">
      <div
        title="Home"
        @click="change_nav('HomeView')"
        :class="{ 'selected_nav':selected_tab == 'HomeView' }"
        class="bottomnav__tabview"
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
      </div>
      <div
        title="Cart"
        @click="change_nav('CartView')"
        :class="{ 'selected_nav':selected_tab == 'CartView' }"
        class="bottomnav__tabview"
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
          />
        </svg>
      </div>
      <div
        title="Favourites"
        @click="change_nav('Favourites')"
        :class="{ 'selected_nav':selected_tab == 'Favourites' }"
        class="bottomnav__tabview"
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          />
        </svg>
      </div>
      <div
        title="Notifications"
        @click="change_nav('Notifications')"
        :class="{ 'selected_nav':selected_tab == 'Notifications' }"
        class="bottomnav__tabview"
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path
            d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
          />
        </svg>
      </div>
      <div title="Profile" @click="change_nav('Profile')" class="bottomnav__tabview">
        <img src="@/assets/Images/profile.jpeg" alt="Profile" class="bottomnav__tabview--image" />
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from "../../EventBus/EventBus";

export default {
  name: "BottomNavigation",
  data() {
    return {
      selected_tab: "HomeView"
    };
  },
  methods: {
    change_nav(value) {
      if (!value) return "";
      EventBus.$emit("selected_view", value);
      this.selected_tab = value;
    }
  }
};
</script>

<style lang="scss">
.bottomnav {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: $color-white;
    z-index: 999;
    box-shadow: 0px 1px 5px rgba($color-grey-600, 0.3);

  &__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1.3rem 0rem;
  }

  &__tabview {
    margin: 0 auto;
    text-align: center;
    fill: $color-grey-600;
    transition: all 0.4s;
    cursor: pointer;

    &--image {
      width: 2.7rem;
      height: 2.7rem;
      border-radius: 50%;
      object-fit: cover;
    }
  }
}

.selected_nav {
  fill: $theme-color;
  pointer-events: none;
}
</style>