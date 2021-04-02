<template>
  <div class="fit row wrap justify-start items-start content-start">
    <q-card
      v-for="(game, index) in games"
      :key="index"
      class="col-6 col-sm-3 shadow-0 cardBackground q-mb-lg q-pa-sm"
    >
      <q-parallax>
        <template v-slot:media>
          <div></div>
        </template>
        <template v-slot:content="scope">
          <div
            class="absolute column items-center"
            :style="{
              opacity: 0.45 + (1 - scope.percentScrolled) * 1,
              top: scope.percentScrolled * 60 + '%',
              left: 0,
              right: 0,
            }"
          >
            <div class="text-center blockCard">
              <div class="fit">
                <div class="text-h4 titleCard">{{ game.name }}</div>
              </div>
              <img :src="game.background_image" class="q-mt-xl pictureCard" />
            </div>
          </div>
        </template>
      </q-parallax>
      <q-card-section class="q-pa-none q-pt-md q-px-md ellipsis-3-lines descriptionCard">
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
      </q-card-section>
      <q-card-section class="q-pa-none">
        <div class="q-pt-md q-px-md ellipsis-3-lines descriptionCard">
          {{ game.description }}
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { APIGames } from "../../services/games";

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