<template>
  <div>
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
    <div class="col-1 q-pt-sm gt-sm">
      <h4 class="text-bold q-mx-xl" style="padding-top: 50px">Mes Jeux :</h4>
      <div style="display: flex; justify-content: center">
        <q-card
          style="width: 800px; color: white"
          class="row justify-center bg-grey-7"
        >
          <div class="row items-center">
            <q-card-section>
              <q-img
                class="img"
                src="https://cdn.quasar.dev/img/boy-avatar.png"
              />
            </q-card-section>
            <q-card-section>
              <h5>Le titre du Jeu !</h5>
            </q-card-section>
            <q-card-section style="width: 0px">
              <q-toggle
                :label="greenModel"
                color="green"
                false-value="Je fais une pause"
                true-value="J'y joue"
                v-model="greenModel"
                val="xl"
                class="label"
              />
            </q-card-section>
          </div>
        </q-card>
      </div>
    </div>
    <div class="col-1 q-pt-sm lt-md">
      <h4 class="text-bold q-mx-xl" style="padding-top: 50px">Mes Jeux :</h4>
      <div style="display: flex; justify-content: center">
        <q-card style="width: 800px" class="justify-center">
          <div class="items-center">
            <q-card-section>
              <q-img
                class="img"
                src="https://cdn.quasar.dev/img/boy-avatar.png"
              />
            </q-card-section>
            <q-card-section>
              <h5>Le titre du Jeu !</h5>
            </q-card-section>
            <q-card-section style="width: 0px">
              <q-toggle
                :label="greenModel"
                color="green"
                false-value="Je fais une pause"
                true-value="J'y joue"
                v-model="greenModel"
                val="xl"
                class="label"
              />
            </q-card-section>
          </div>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "favoriteGames",
  data() {
    return {
      greenModel: "Je fais une pause",
    };
  },
};
</script>

<style lang="scss">
.img {
  width: 150px;
}

.q-toggle__label {
  width: 110px;
}
</style>