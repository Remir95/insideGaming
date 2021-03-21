<template>
  <div>
    <div>
      <q-card class="col-1 shadow-0 cardBackground">
        <q-card-section>
          {{ lorem }}
          {{ lorem }}
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