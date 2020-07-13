<template>
  <div class="cartview">
    <div class="cartview__container">
      <div class="cartview__title">
        <h3 class="cartview__title--text">Favourites</h3>
      </div>
      <div class="cartview__listview">
        <transition-group
          name="fade"
          enter-active-class="swipe-enter"
          leave-active-class="swipe-leave"
          mode="out-in"
        >
          <!-- Favourites Card -->
          <FavItem v-for="data in favList" :key="data.id" :fav="data" />
        </transition-group>
        <div v-if="favList.length == 0" class="cartview__empty">
          <img
            draggable="false"
            src="@/assets/Images/favIcon.png"
            alt="Empty Icon"
            class="cartview__empty--image"
          />
          <h3 class="cartview__empty--title">List is empty</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/** Event Bus */
import EventBus from "../../EventBus/EventBus";

/** Components */
import FavItem from "../Widgets/FavItem";

export default {
  name: "Favourites",
  components: {
    FavItem
  },
  mounted() {
    EventBus.$on("remove_fav", this.removeFav);
  },
  data() {
    return {
      favList: [
        { id: 1, title: "Chicked Burrito and Mayo", image: "prodburger.png" },
        { id: 2, title: "Caramel Macciato", image: "coffee.png" },
        { id: 3, title: "Cafe Mocha", image: "coffee.png" },
        { id: 4, title: "Cafe Cubano", image: "coffee.png" },
        { id: 5, title: "Taco Quesadila", image: "prodpizza.png" },
        { id: 6, title: "Grilled Zucchini", image: "prodpizza.png" },
        { id: 7, title: "BBQ beef brisket", image: "prodSandwich.png" }
      ]
    };
  },
  methods: {
    removeFav(id) {
      if (!id) return "";
      const index = this.favList.findIndex(item => item.id == id);
      this.favList.splice(index, 1);
    },
  }
};
</script>

<style lang="scss">
</style>