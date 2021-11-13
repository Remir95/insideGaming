<template>
  <q-page class="bg-grey-4">
   <favorite-games/>
  </q-page>
</template>

<script>
import FavoriteGames from '../components/myGames/favoriteGames.vue'
  export default {
    name: 'PageIndex', 
    components:{FavoriteGames},
    data() {
    return {
      name: "",
    }
    }
  }
</script>
