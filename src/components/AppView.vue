<template>
  <div class="appview">
    <Navbar />
    <keep-alive>
      <component :is="selected_tab" class="mainview"></component>
    </keep-alive>
    <Bottomnav />
  </div>
</template>

<script>
/** Event Bus */
import EventBus from '../EventBus/EventBus';

/** Pages */
import HomeView from '../components/Pages/HomeView';
import CartView from '../components/Pages/CartView';
import Favourites from '../components/Pages/Favourites';
import Notifications from '../components/Pages/Notifications';
import Profile from '../components/Pages/ProfileView';

/** Navigation */
import Navbar from '../components/Navigation/Navbar';
import Bottomnav from '../components/Navigation/BottomNav';

export default {
  name: 'AppView',
  components: {
    HomeView,
    CartView,
    Favourites,
    Notifications,
    Profile,
    Navbar,
    Bottomnav,
  },
  mounted() {
    EventBus.$on('selected_view', this.change_view);
  },
  beforeDestroy() {
    EventBus.$off('selected_view', this.change_view);
  },
  data() {
    return {
      selected_tab: 'HomeView',
    }
  },
  methods: {
    change_view(value) {
      if(!value) return '';
      this.selected_tab = value;
    }
  }
}
</script>

<style lang="scss">
.mainview {
  margin-top: 6rem;
}
</style>