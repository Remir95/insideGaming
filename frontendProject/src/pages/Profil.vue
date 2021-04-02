<template>
  <q-page class="bg-grey-4">
    <block-avatar-name/>
    <block-my-games/>
  </q-page>
</template>

<script>
import BlockAvatarName from '../components/profil/blockAvatarName.vue'
import BlockMyGames from '../components/profil/blockMyGames.vue'
  export default {
    name: 'PageIndex', 
    components:{BlockAvatarName, BlockMyGames},
    data() {
    return {
      name: "",
    }
    }
  }
</script>
