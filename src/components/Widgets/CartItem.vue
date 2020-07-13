<template>
  <div class="cartItem">
    <div class="cartItem__imageview">
      <img src="@/assets/Images/prodburger.png" alt="Product" class="cartItem__imageview--image" />
    </div>
    <div class="cartItem__widgets">
      <div class="cartItem__widgets--flexview">
        <div class="cartItem__textview">
          <h3 class="cartItem__textview--title">{{ cart.title }}</h3>
          <p class="cartItem__textview--smtext">{{ cart.size }}</p>
        </div>
        <div @click="removeCartItem(cart.id)" class="cartItem__widgets--iconview">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20px"
            height="20px"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
            />
          </svg>
        </div>
      </div>
      <div class="cartItem__fxwidget">
        <div class="cartItem__fxwidget--left">
          <button @click="removeQuantity" class="cartItem__fxwidget--btn">-</button>
          <p class="cartItem__fxwidget--fxtext">{{ cart.quantity }}</p>
          <button @click="addQuantity" class="cartItem__fxwidget--btn">+</button>
        </div>
        <p class="cartItem__fxwidget--smtext">Ksh {{ cart.total }}/=</p>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from '../../EventBus/EventBus';

export default {
  name: "CartItem",
  props: {
    cart: {
      type: Object,
      required: false
    }
  },
  methods: {
    addQuantity() {
      if (this.cart.quantity >= 15) return "";
      this.cart.quantity++;
      this.cart.total = this.cart.price * this.cart.quantity;
    },
    removeQuantity() {
      if (this.cart.quantity <= 1) return "";
      this.cart.quantity--;
      this.cart.total = this.cart.total - this.cart.price;
    },
    removeCartItem(value) {
        EventBus.$emit('removeItem', value);
    }
  }
};
</script>

<style lang="scss">
.cartItem {
  display: flex;
  flex-direction: row;
  box-shadow: 0px 1px 5px rgba($color-grey-500, 0.3);
  background-color: $color-white;
  padding: 1.5rem 0.3rem;
  width: 100%;
  cursor: pointer;
  border-radius: 0.4rem;
  margin-bottom: 1rem;

  &__imageview {
    padding: 0.5rem 0rem;
    border-radius: 0.4rem;

    &--image {
      object-fit: cover;
      width: auto;
      margin: 0 auto;
      max-width: 5rem;
    }
  }

  &__widgets {
    overflow: hidden;
    width: 100%;
    padding: 0rem 0.8rem;

    &--flexview {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    &--iconview {
        width: 3.2rem;
        height: 3.2rem;
        border-radius: 50%;
        text-align: center;
        fill: $color-red-500;
        padding: 0.6rem 0.3rem;
        background-color: $color-white;
        transition: all 0.3s;

        &:hover {
            background-color: $color-red-100;
        }
    }
  }

  &__textview {
    overflow: hidden;

    &--title {
      font-family: inherit;
      font-size: 1.3rem;
      font-weight: 600;
      color: $color-dark-300;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 0.2rem;
      width: 100%;
    }

    &--smtext {
      font-family: inherit;
      font-size: 1.1rem;
      font-weight: 400;
      color: $color-grey-600;
    }
  }

  &__fxwidget {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 1rem;

    &--left {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    &--btn {
      border: none;
      outline: none;
      background-color: $theme-color;
      color: $color-white;
      padding: 0.1rem 0.8rem;
      border-radius: 0.2rem;
      font-family: inherit;
      font-size: 1.3rem;
      font-weight: 600;
    }

    &--fxtext {
      padding: 0rem 0.8rem;
      font-family: inherit;
      font-size: 1.1rem;
      color: $color-dark-300;
    }

    &--smtext {
      font-family: inherit;
      font-size: 1.3rem;
      font-weight: 400;
      color: $color-grey-600;
    }
  }
}
</style>