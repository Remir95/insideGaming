<template>
  <div class="q-ma-md">
    <div class="fit row wrap justify-start items-start content-start">
      <q-card
        v-for="item in 8"
        :key="item"
        class="col-12 col-sm-6 shadow-0 cardBackground q-pa-sm"
      >
        <q-card-section class="q-pa-none">
          <q-img
            src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg"
            style="width: 150px; height: 150px"
          />
        </q-card-section>
        <q-card-section class="q-pa-none">
          {{ lorem }}
          {{ lorem }}
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlockGames",
  data() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script>

<style lang="scss">
.cardBackground {
  overflow: auto;
  background-color: transparent;
  border-radius: 0px;
}
</style>