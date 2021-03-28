<template>
  <div class="q-ma-md">
    <div class="fit row wrap justify-start items-start content-start">
      <q-card
        v-for="game in games"
        :key="game"
        class="col-12 col-sm-6 shadow-0 cardBackground q-pa-sm"
      >
        <q-card-section class="q-pa-none">
          <q-img
            :src="game.background_image"
            style="width: 150px; height: 150px"
          />
        </q-card-section>
        <q-card-section class="q-pa-none">
          {{ game.description }}
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { APIGames } from '../../services/games';

export default {
  name: "BlockGames",
  data() {
    return {
      games:[],
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
  created() {
    APIGames.get("/")
    .then(response => {
      this.games = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
};
</script>

<style lang="scss">
.cardBackground {
  overflow: auto;
  background-color: transparent;
  border-radius: 10px;
}
</style>