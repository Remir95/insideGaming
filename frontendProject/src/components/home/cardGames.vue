<template>
  <div class="">
    <masonry
      :cols="{ default: 4, 1000: 3, 700: 2, 400: 1 }"
      :gutter="{ default: '1%', 700: '2%' }"
    >
      <div
        v-for="(game, index) in games"
        :key="index"
        class="q-ma-sm shadow-3"
      >
        <div class="">
          <div class="text-h4 ">{{ game.name }}</div>
          <img :src="game.background_image" class="q-mt-xl pictureCard" />
        </div>
        <div class="">
          <div class="">
            {{ game.metacritic_platforms }}
          </div>
          <div>
            {{ game.released }}
          </div>
          <div>
            {{ game.website }}
          </div>
          <div>
            {{ game.playtime }}
          </div>
        </div>
        <div class="">
          <div class="">
            {{ game.description }}
          </div>
        </div>
      </div>
    </masonry>
  </div>
</template>

<script>
import { APIGames } from "../../services/games";
import Vue from "vue";
import VueMasonry from "vue-masonry-css";

Vue.use(VueMasonry);
export default {
  name: "CardGames",
  data() {
    return {
      games: [],
    };
  },
  created() {
    APIGames.get("/")
      .then((response) => {
        this.games = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>

<style lang="scss">
.cardBackground {
  overflow: auto;
  background-color: transparent;
  border-radius: 10px;
}

.blockCard {
  border-radius: 10px;
  background-color: grey;
  width: 312px;
}

.titleCard {
  background-color: grey;
  border-radius: 10px 10px 0px 0px;
  height: 100px;
}

.pictureCard {
  height: 260px;
  border-radius: 10px 10px 0px 0px;
  width: 300px;
  height: 250px;
}

.descriptionCard {
  height: 200px;
  background-color: grey;
  border-radius: 0px 0px 10px 10px;
}
</style>