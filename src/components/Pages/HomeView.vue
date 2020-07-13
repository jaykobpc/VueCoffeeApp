<template>
  <div class="homeview">
    <div class="homeview__container">
      <div class="homeview__titlebox">
        <h3 class="homeview__titlebox--text">Browse by category</h3>
        <div title="Show more" class="homeview__titlebox--iconview">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
          </svg>
        </div>
      </div>
      <!--swiper layout-->
      <swiper v-if="layoutData.length > 0" :options="swiperOptions" class="homeview__listview">
        <swiper-slide
          v-for="data in layoutData"
          :key="data.id"
          @click.native="change_tab(data.title)"
          @click.stop.native="filterItems(data.filter)"
          :class="{ 'selected_cat': selected_list == data.title }"
          class="homecard"
        >
          <div class="homecard__imageview">
            <img
              :src="require(`@/assets/Images/${data.image}`)"
              alt="Icon"
              class="homecard__imageview--image"
            />
          </div>
          <div class="homecard__textview">
            <h3 class="homecard__textview--title">{{ data.title }}</h3>
            <p class="homecard__textview--smtext">{{ data.items }} in menu</p>
          </div>
        </swiper-slide>
      </swiper>
      <!--end swiper layout -->

      <!-- Order grid -->
      <div class="homeview__gridlist">
        <h3 class="homeview__gridlist--title">Choose Order</h3>
        <div class="homeview__gridlist--container">
          <ProductCard v-for="data in filteredData" :key="data.id" :product="data" />
        </div>
      </div>
      <!-- end order grid -->
    </div>
  </div>
</template>

<script>
/** Vue swiper */
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

/** Event Bus */
import EventBus from "../../EventBus/EventBus";

/** components */
import ProductCard from "../Widgets/ProductCard";

export default {
  name: "HomeView",
  components: {
    Swiper,
    SwiperSlide,
    ProductCard
  },
  mounted() {
    this.$store.dispatch("filterProducts", this.selected_tab);
  },
  computed: {
    layoutData() {
      return this.$store.state.categories;
    },
    filteredData() {
      return this.$store.state.filteredProducts;
    }
  },
  data() {
    return {
      selected_list: "Coffee brew",
      selected_tab: "Coffee",
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
        },
        navigation: {
          nextEl: ".homeview__titlebox--iconview"
        }
      }
    };
  },
  methods: {
    change_tab(value) {
      if (!value) return "";
      this.selected_list = value;
      EventBus.$emit("selected_list", value);
    },
    filterItems(value) {
      this.$store.dispatch("filterProducts", value);
    }
  }
};
</script>

<style lang="scss">
.homeview {
  padding-bottom: 6rem;

  &__container {
    padding: 0.5rem;
  }

  &__gridlist {
    margin-top: 2rem;

    &--container {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      column-gap: 1rem;
      row-gap: 1rem;

      @include respond(tab-port) {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    &--title {
      font-family: inherit;
      font-size: 1.5rem;
      font-weight: 600;
      color: $color-dark-300;
      margin: 1.8rem 0rem;
    }
  }

  &__titlebox {
    padding-top: 1rem;
    padding-bottom: 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    &--text {
      font-family: inherit;
      font-size: 1.5rem;
      font-weight: 600;
      color: $color-dark-300;
    }

    &--iconview {
      width: 3.5rem;
      height: 3.5rem;
      text-align: center;
      border-radius: 50%;
      padding: 0.5rem 0.3rem;
      fill: $color-grey-600;
      background-color: $color-white;
      transition: all 0.3s;
      cursor: pointer;

      &:hover {
        box-shadow: 0px 1px 5px rgba($color-grey-400, 0.4);
      }
    }
  }

  &__listview {
    padding: 1rem 0rem !important;
  }
}

.homecard {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  border-radius: 0.4rem;
  padding: 1.3rem 0.3rem;
  box-shadow: 0px 1px 4px rgba($color-grey-500, 0.4);
  background-color: $color-white;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s;

  &__imageview {
    &--image {
      object-fit: cover;
      width: 6rem;
    }
  }

  &__textview {
    padding: 0.5rem;
    margin-left: 0.5rem;
    width: 100%;

    &--title {
      font-family: inherit;
      font-size: 1.3rem;
      font-weight: 600;
      color: $color-dark-300;
      margin-bottom: 0.3rem;
    }

    &--smtext {
      font-family: inherit;
      font-size: 1.1rem;
      font-weight: 400;
      color: $color-grey-600;
    }
  }
}

.selected_cat {
  transition: all 0.3s;
  border-bottom: 3px solid $color-brown-400;
}
</style>