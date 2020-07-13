<template>
  <div class="profileview">
    <div class="profileview__container">
      <div class="profileview__widgetview">
        <div class="profileview__imageview">
          <img
            draggable="false"
            src="@/assets/Images/profile.jpeg"
            alt="User Profile"
            class="profileview__imageview--image"
          />
        </div>
        <h3 class="profileview__widgetview--title">Tamara Webber</h3>
        <p class="profileview__widgetview--smtext">hello@jaykobpc-mail.localhost</p>
      </div>
      <div class="profileview__listview">
        <div title="Help" class="profileview__card">
          <div class="profileview__iconview">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"
              />
            </svg>
          </div>
          <div class="profileview__textview">
            <h3 class="profileview__textview--title">Support</h3>
            <p class="profileview__textview--smtext">Questions & technical support</p>
          </div>
        </div>

        <div title="Settings" class="profileview__card">
          <div class="profileview__iconview">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <g>
                <path d="M0,0h24v24H0V0z" fill="none" />
                <path
                  d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"
                />
              </g>
            </svg>
          </div>
          <div class="profileview__textview">
            <h3 class="profileview__textview--title">Settings</h3>
            <p class="profileview__textview--smtext">Preferences & Configuration</p>
          </div>
        </div>

        <div title="Notifications" class="profileview__card">
          <div class="profileview__iconview">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path
                d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
              />
            </svg>
          </div>
          <div class="profileview__textview">
            <h3 class="profileview__textview--title">Notifications</h3>
            <p class="profileview__textview--smtext">System Alerts & App Notifications</p>
          </div>
        </div>

        <div title="Profile" class="profileview__card">
          <div class="profileview__iconview">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
              />
            </svg>
          </div>
          <div class="profileview__textview">
            <h3 class="profileview__textview--title">Account</h3>
            <p class="profileview__textview--smtext">My Account & Payments</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profileview"
};
</script>

<style lang="scss">
.profileview {
  top: 0;
  height: 100%;

  &__container {
    padding-bottom: 6rem;
  }

  &__widgetview {
    background-color: $color-white;
    text-align: center;
    padding: 1.3rem 0rem;

    &--title {
      font-size: 1.3rem;
      font-weight: 600;
      color: $color-grey-600;
      margin-top: 1rem;
      margin-bottom: 0.3rem;
      letter-spacing: 0.0995rem;
    }

    &--smtext {
      font-size: 1.3rem;
      font-weight: 400;
      color: $color-grey-600;
    }
  }

  &__imageview {
    width: 16rem;
    height: 16rem;
    margin: 0 auto;
    border-radius: 50%;
    padding: 0.4rem 0.3rem;
    background-color: $color-grey-300;

    &--image {
      object-fit: cover;
      width: 15.2rem;
      height: 15.2rem;
      border-radius: 50%;
      margin: 0 auto;
    }
  }

  &__listview {
    margin-top: 3rem;
  }

  &__card {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2.5rem 0.5rem;

    &:not(:last-child) {
      border-bottom: 1px solid $color-grey-200;
    }
  }

  &__iconview {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    text-align: center;
    fill: $color-grey-600;
    padding: 0.7rem 0.3rem;
    background-color: $color-grey-300;
  }

  &__textview {
    padding: 0rem 1.5rem;

    &--title {
      font-size: 1.3rem;
      font-weight: 600;
      color: $color-grey-600;
      margin-bottom: 0.5rem;
    }

    &--smtext {
      font-size: 1.1rem;
      font-weight: 400;
      color: $color-grey-600;
    }
  }
}
</style>