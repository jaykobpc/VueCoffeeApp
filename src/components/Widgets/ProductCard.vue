<template>
  <div @click="open_product" class="productcard">
    <div class="gridlistcard">
      <div class="gridlistcard__imageview">
        <img
          :src="require(`@/assets/Images/${product.image}`)"
          alt="Coffee"
          class="gridlistcard__imageview--image"
        />
      </div>
      <h3 class="gridlistcard__titletext">{{ product.name }}</h3>
      <p class="gridlistcard__smtext">Ksh {{ product.price }}/=</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Productcard",
  props: {
    product: {
      type: Object,
      required: false
    }
  },
  methods: {
    open_product() {
      if (this.$route.name == "Product") return "";
      this.$router.push("/product");
    }
  }
};
</script>

<style lang="scss">
.gridlistcard {
  width: 100%;
  text-align: center;
  border: 1px solid $color-grey-300;
  border-radius: 0.4rem;
  padding: 1rem 1rem;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;

  &:hover {
    box-shadow: 0px 1px 5px rgba($color-grey-600, 0.5);
  }

  &__imageview {
    background-color: $color-grey-100;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin: 0 auto;
    padding: 0.8rem 0.5rem;

    &--image {
      object-fit: cover;
      width: 7.5rem;
      margin: 0 auto;
    }
  }

  &__titletext {
    font-family: inherit;
    font-size: 1.3rem;
    font-weight: 600;
    letter-spacing: 0.053rem;
    color: $color-dark-300;
    margin-bottom: 0.3rem;
    margin-top: 1rem;
  }

  &__smtext {
    font-family: inherit;
    font-size: 1.1rem;
    font-weight: 400;
    color: $color-grey-600;
  }
}
</style>