<template>
  <div class="notecard">
    <div class="notecard__imageview">
      <img
        src="@/assets/Images/notification.png"
        alt="Notification"
        class="notecard__imageview--image"
      />
    </div>
    <div class="notecard__textview">
      <h3 class="notecard__textview--title">{{ notification.title }}</h3>
      <p class="notecard__textview--text">{{ notification.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotificationCard",
  props: {
    notification: {
      type: Object,
      required: false
    }
  }
};
</script>

<style lang="scss">
.notecard {
  border: 1px solid $color-grey-200;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: row;
  padding: 1rem 0.5rem;
  margin-bottom: 0.5rem;
  cursor: pointer;

  &__imageview {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    padding: 1rem 0.8rem;

    &--image {
      width: 4rem;
      object-fit: cover;
      margin: 0 auto;
    }
  }

  &__textview {
    &--title {
      font-size: 1.3rem;
      font-weight: 600;
      color: $color-grey-600;
      margin-bottom: 0.3rem;
    }

    &--text {
      font-size: 1.1rem;
      font-weight: 400;
      color: $color-grey-600;
    }
  }
}
</style>