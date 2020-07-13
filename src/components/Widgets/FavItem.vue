<template>
  <div @click.stop="go_to_item" class="favItem">
    <div class="favItem__imageview">
      <img
        :src="require(`@/assets/Images/${fav.image}`)"
        :alt="fav.title"
        class="favItem__imageview--image"
      />
    </div>
    <div class="favItem__widgets">
      <div class="favItem__widgets--flexview">
        <div class="favItem__textview">
          <h3 class="favItem__textview--title">{{ fav.title }}</h3>
          <p
            class="favItem__textview--smtext"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. In commodi molestias eos repellendus nostrum neque.</p>
        </div>
        <div @click.stop="remove_item(fav.id)" class="favItem__widgets--iconview">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px" height="20px">
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from "../../EventBus/EventBus";
export default {
  name: "FavItemCard",
  props: {
    fav: {
      type: Object,
      required: false
    }
  },
  methods: {
    remove_item(value) {
      if (!value) return "";
      EventBus.$emit("remove_fav", value);
    },
    go_to_item() {
      this.$router.push('/product');
    }
  }
};
</script>

<style lang="scss">
.favItem {
  display: flex;
  flex-direction: row;
  //box-shadow: 0px 1px 5px rgba($color-grey-500, 0.3);
  border: 1px solid $color-grey-300;
  background-color: $color-white;
  padding: 1.5rem 0.3rem;
  width: 100%;
  cursor: pointer;
  border-radius: 0.4rem;
  margin-bottom: 0.5rem;

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
      width: 5rem;
      height: 3.2rem;
      border-radius: 50%;
      text-align: center;
      fill: $color-red-500;
      padding: 0.6rem 0.3rem;
      background-color: $color-white;
      transition: all 0.3s;
      margin-left: 0.8rem;

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