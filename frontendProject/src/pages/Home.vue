<template>
  <q-page class="bg-grey-4">
    <template>
      <first-text-top />
      <home-parallax />
      <block-games />
    </template>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import BlockGames from "../components/home/BlockGames.vue";
import FirstTextTop from '../components/home/FirstTextTop.vue';
import HomeParallax from "../components/home/HomeParallax.vue";

export default {
  name: "Home",
  components: { HomeParallax, BlockGames, FirstTextTop },
  data() {
    return {
      name: "",
    };
  },
  methods: {
    ...mapActions("user", ["userInfo"]),
  },
};
</script>
