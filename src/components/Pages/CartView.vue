<template>
  <div class="cartview">
    <div class="cartview__container">
      <div class="cartview__title">
        <h3 class="cartview__title--text">Order Menu</h3>
      </div>
      <div class="cartview__listview">
        <transition-group name="fade" enter-active-class="swipe-enter" leave-active-class="swipe-leave" mode="out-in">
          <CartItem v-for="data in cartList" :key="data.id" :cart="data" />
        </transition-group>
        <div v-if="cartList.length == 0" class="cartview__empty">
          <img draggable="false" src="@/assets/Images/emptyCart.png" alt="Empty Icon" class="cartview__empty--image">
          <h3 class="cartview__empty--title">Cart is empty</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from "../Widgets/CartItem";
import EventBus from "../../EventBus/EventBus";

export default {
  name: "Cartview",
  components: {
    CartItem
  },
  mounted() {
    EventBus.$on("removeItem", this.removeFromList);
  },
  data() {
    return {
      cartList: [
        {
          id: 1,
          title: "Chicked Burrito and Mayo",
          size: "Medium",
          quantity: 1,
          price: 300,
          total: 300
        },
        {
          id: 2,
          title: "Chicken Cheese",
          size: "Large",
          quantity: 1,
          price: 400,
          total: 400
        },
        {
          id: 3,
          title: "Beef Steak Burger",
          size: "Medium",
          quantity: 1,
          price: 250,
          total: 250
        },
        {
          id: 4,
          title: "Vietnamese turkey",
          size: "Large",
          quantity: 1,
          price: 250,
          total: 250
        },
        {
          id: 5,
          title: "Macaroni and cheese",
          size: "Medium",
          quantity: 1,
          price: 250,
          total: 250
        }
      ]
    };
  },
  methods: {
    removeFromList(id) {
      if (!id) return "";
      const index = this.cartList.findIndex(item => item.id == id);
      this.cartList.splice(index, 1);
    }
  }
};
</script>

<style lang="scss">
.cartview {
  &__container {
    padding-bottom: 6rem;
  }

  &__title {
    padding: 1.5rem 0.5rem;
    box-shadow: 0px 1px 2px rgba($color-grey-500, 0.3);
    margin-bottom: 1.5rem;

    &--text {
      font-family: inherit;
      font-size: 1.5rem;
      font-weight: 600;
      color: $color-dark-300;
    }
  }

  &__listview {
    padding: 0rem 0.5rem;
    transition: all 0.4s;
  }

  &__empty {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;

    &--image {
      width: 9rem;
      margin: 0 auto;
    }

    &--title {
      font-family: inherit;
      font-size: 1.1rem;
      font-weight: 600;
      color: $color-grey-600;
      margin-top: 1.5rem;
      text-transform: uppercase;
      letter-spacing: 0.0960rem;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
.fade-enter,
.fade-leave-to {
  transition: all 0.3s;
  transform: translateY(0);
}

.swipe-leave {
  transition: all 0.5s;
  transform: translateX(-1500px);
}

.swipe-enter {
  transform: all 0.6s;
  transform: translateX(0);
}
</style>