<template>
  <div class="notifications">
    <div class="notifications__container">
      <div class="notifications__title">
        <h3 class="notifications__title--text">Notifications</h3>
      </div>
      <div class="notifications__listview">
        <NotificationCard v-for="data in getNotification" :key="data.id" :notification="data" />
      </div>
    </div>
  </div>
</template>

<script>
import NotificationCard from '../Widgets/NotificationCard';

export default {
  name: "Notifications",
  components: {
    NotificationCard,
  },
  computed: {
    getNotification() {
      return this.$store.state.notificationData;
    }
  }
};
</script>

<style lang="scss">
.notifications {
  top: 0;
  height: 100%;
  padding-bottom: 6rem;

  &__container {
    overflow-y: auto;
  }

  &__listview {
    padding: 0rem 0.5rem;
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
}
</style>