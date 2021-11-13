<template>
  <div class="bg-black">
    <!-- =============================== BARRE DE RECHERCHE DESKTOP ========================== -->
    <div
      class="fixed-top mobile-hide shadow-5"
      style="
        max-width: 100%;
        z-index: 2;
        background-color: #0000007a;
        margin-top: 125px;
        display: flex;
        justify-content: center;
      "
    >
      <q-input
        color="white"
        dark
        style="
          width: 300px;
          background-color: transparent;
          padding: 10px;
          color: white;
        "
        outlined
        v-model="search"
        label="Recherche"
      />
    </div>
    <!-- =============================== BARRE DE RECHERCHE MOBILE ========================== -->
    <div
      class="fixed-top mobile-show desktop-hide"
      style="
        max-width: 100%;
        z-index: 2;
        background-color: #0000007a;
        display: flex;
        justify-content: center;
        margin-top: 215px;
      "
    >
      <q-input
        color="white"
        dark
        style="
          width: 300px;
          background-color: transparent;
          padding: 10px;
          color: white;
        "
        outlined
        v-model="search"
        label="Recherche"
      />
    </div>
    <!-- =============================== CARD MASONRY ========================== -->
    <div style="margin-left:7px">
      <masonry
        :cols="{ default: 4, 1000: 3, 700: 2, 400: 1 }"
        :gutter="{ default: '1%', 700: '2%' }"
      >
        <div
          v-for="(game, index) in filteredGames"
          :key="index"
          class="justify-center q-ml-md q-ma-sm bg-grey-4 rounded-borders"
        >
          <div>
            <div class="text-center">
              <img :src="game.background_image" class="pictureCard" />
              <div class="text-h4 q-pa-md">{{ game.name }}</div>
            </div>
            <div class="q-pa-sm">
              <div class="">
                <p>Plateformes : {{ game.metacritic_platforms }}</p>
              </div>
              <div>
                <p>Date de sortie : {{ game.released }}</p>
              </div>
              <div style="word-wrap: break-word">
                <p>
                  Site du jeu :
                  <a tag="a" target="blanck_" :href="game.website">
                    {{ game.website }}
                  </a>
                </p>
              </div>
              <div>
                <p>Temps de jeu : {{ game.playtime }} heures</p>
              </div>
            </div>
            <div class="text-center q-pb-md">
              <q-btn
                size="lg"
                round
                icon="favorite"
                color="black"
                class="hoverHeart"
              />
            </div>
          </div>
        </div>
      </masonry>
    </div>
    <q-page-scroller
      position="bottom-right"
      :scroll-offset="1000"
      :offset="[18, 18]"
    >
      <q-btn fab icon="keyboard_arrow_up" color="accent" />
    </q-page-scroller>
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
      search: "",
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
  computed: {
    filteredGames: function () {
      return this.games.filter((game) => {
        return game.name.match(this.search);
      });
    },
  },
  methods: {},
};
</script>

<style lang="scss">
a {
  color: black;
  text-decoration: none;
}
a:hover {
  color: purple;
  text-decoration: none;
}
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
  border-radius: 4px 4px 0px 0px;
  max-width: 100%;
  max-height: 100%;
}

.descriptionCard {
  height: 200px;
  background-color: grey;
  border-radius: 0px 0px 10px 10px;
}
.hoverHeart:hover {
  color: red !important;
  background-color: rgb(89, 89, 89) !important;
}
</style>