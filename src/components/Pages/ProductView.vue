<template>
  <div class="productview">
    <nav
      class="productview__navwidget"
      :style="{ 'background-image': `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${img_loc}')` }"
    >
      <div class="productview__navbar">
        <div class="productview__flexview">
          <div @click="route_home" class="productview__navbar--iconview">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
            </svg>
          </div>
          <h3 class="productview__navbar--title">Koffee</h3>
          <div class="productview__navbar--iconview no-pointer">&nbsp;</div>
        </div>
      </div>
    </nav>
    <!-- section two textview-->
    <div class="productview__textview">
      <div class="productview__titleview">
        <h3 class="productview__titleview--text">Verde Chicken Enchilada</h3>
        <p class="productview__titleview--smtext">Ksh 300/=</p>
      </div>
      <div class="productview__descview">
        <h3 class="productview__descview--title">Overview</h3>
        <p
          class="productview__descview--text"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate maiores aspernatur animi optio cumque tempora odio, asperiores omnis facere est, qui sed eius necessitatibus ab earum quam reiciendis nemo voluptatem.</p>
      </div>
    </div>
    <!-- Section three Swiper -->
    <div class="productview__listview">
      <h3 class="productview__listview--title">Recommended</h3>
      <swiper v-if="layoutData.length > 0" :options="swiperOptions" class="productview__listgroup">
        <swiper-slide v-for="data in layoutData" :key="data.id" class="productview__listcard">
          <ProductCard :product="data" />
        </swiper-slide>
      </swiper>
    </div>

    <!-- section footer -->
    <div class="productview__footerview">
      <div class="productview__footerview--flexview">
        <div class="productview__counter">
          <button @click="decrement_cart" class="productview__counter--btn">-</button>
          <p class="productview__counter--text">{{ cart.quantity }}</p>
          <button @click="increment_cart" class="productview__counter--btn">+</button>
        </div>
        <div class="productview__textitem">
          <h3 class="productview__textitem--text">Ksh {{ cart.total }}/=</h3>
        </div>
      </div>
      <button @click="add_to_cart" class="productview__footerview--btn">Add to cart</button>
    </div>
  </div>
</template>

<script>
/** Vue swiper */
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

/** Widget */
import ProductCard from "../Widgets/ProductCard";

export default {
  name: "ProductView",
  components: {
    Swiper,
    SwiperSlide,
    ProductCard
  },
  mounted() {
    this.scroll_view_shadow();
    this.layoutData;
  },
  computed: {
    layoutData() {
      return this.$store.state.recommededData;
    }
  },
  data() {
    return {
      img_loc:
        "https://images.pexels.com/photos/2230540/pexels-photo-2230540.jpeg?cs=srgb&dl=cooked-foods-2230540.jpg&fm=jpg",
      swiperOptions: {
        slidesPerView: 4,
        spaceBetween: 30,
        freeMode: true,
        loop: false,
        breakpoints: {
          1024: {
            slidesPerView: 7,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 10
          }
        }
      },
      cart: {
        id: 1,
        quantity: 1,
        price: 300,
        title: 'Caramel Macciato',
        image: "prodburger.png",
        size: "Medium",
        total: 300
      }
    };
  },
  methods: {
    scroll_view_shadow() {
      var navbar = document.querySelector(".productview__navbar");
      window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
          navbar.classList.add("navbar_view_shadow");
        } else if (window.scrollY < 50) {
          navbar.classList.remove("navbar_view_shadow");
        }
      });
    },
    route_home() {
      this.$router.push("/");
    },
    increment_cart() {
      if (this.cart.quantity >= 20) return "";
      this.cart.quantity++;
      this.cart.total = this.cart.price * this.cart.quantity;
    },
    decrement_cart() {
      if (this.cart.quantity <= 1) return "";
      this.cart.quantity--;
      this.cart.total = this.cart.total - this.cart.price;
    },
    add_to_cart() {
      // var store = [];
      // store.push(this.cart);
      this.$store.dispatch("add_to_cart", this.cart);
    }
  }
};
</script>

<style lang="scss">
.productview {
  top: 0;
  height: 100%;
  padding-bottom: 12rem;

  &__navwidget {
    //background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/Images/productItem.jpeg');
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    height: 50vh;
    box-shadow: 0rem 0.1rem 1.3rem rgba($color-grey-600, 0.4);

    @include respond(tab-port) {
      height: 45vh;
    }
  }

  &__flexview {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  &__navbar {
    background-color: transparent;
    width: 100%;
    position: fixed;
    top: 0;
    padding: 0.5rem 0.3rem;
    z-index: 999;

    &--title {
      font-size: 1.3rem;
      font-weight: 600;
      color: $color-grey-200;
      text-transform: uppercase;
      letter-spacing: 0.4999rem;
    }

    &--iconview {
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 50%;
      text-align: center;
      fill: $color-grey-200;
      background-color: inherit;
      padding: 0.5rem 0.3rem;
      transition: all 0.3s;
      cursor: pointer;
    }
  }

  &__textview {
    padding: 1rem 0.7rem;
  }

  &__titleview {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    padding-bottom: 1.1rem;

    &--text {
      font-size: 1.7rem;
      font-weight: 600;
      color: $color-dark-300;
    }

    &--smtext {
      font-size: 1.3rem;
      font-weight: 400;
      color: $color-grey-600;
    }
  }

  &__descview {
    margin-top: 0rem;

    &--title {
      font-size: 1.3rem;
      font-weight: 600;
      color: $color-dark-300;
      margin-bottom: 0.3rem;
    }

    &--text {
      font-size: 1.1rem;
      font-weight: 400;
      color: $color-grey-600;
      text-align: justify;
    }
  }

  &__listview {
    padding-top: 1rem;
    padding-left: 0.5rem;

    &--title {
      font-weight: 600;
      font-size: 1.3rem;
      color: $color-dark-300;
      margin-bottom: 0.7rem;
    }
  }

  &__footerview {
    position: fixed;
    bottom: 0;
    background-color: $color-white;
    box-shadow: 0px 1px 6px rgba($color-grey-600, 0.4);
    width: 100%;
    z-index: 999;
    padding: 1.5rem 1rem 1.5rem 1rem;

    &--flexview {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    &--btn {
      font-family: inherit;
      font-size: 1.3rem;
      font-weight: 600;
      width: 100%;
      border: none;
      outline: none;
      border-radius: 0.3rem;
      padding: 1.3rem;
      background-color: $theme-color;
      color: $color-white;
      cursor: pointer;
    }
  }

  &__counter {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 2rem;

    &--btn {
      border: none;
      outline: none;
      background-color: $theme-color;
      font-size: 1.3rem;
      font-weight: 600;
      color: $color-white;
      padding: 0.1rem 0.7rem;
      border-radius: 0.2rem;
    }

    &--text {
      font-weight: 600;
      font-size: 1.3rem;
      color: $color-grey-600;
      padding: 0rem 0.5rem;
    }
  }

  &__textitem {
    &--text {
      font-size: 2rem;
      font-weight: 400;
      color: $color-grey-600;
      margin-top: -1rem;
    }
  }
}

.navbar_view_shadow {
  transition: all 0.3s;
  background-color: $theme-color;
  box-shadow: 0px 2px 4px rgba($color-grey-600, 0.4);
}

.no-pointer {
  pointer-events: none;
}
</style>