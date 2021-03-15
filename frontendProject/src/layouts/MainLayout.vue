<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated>
      <q-toolbar class="bg-grey-8">
        <q-btn
          flat
          @click="drawer = !drawer"
          round
          dense
          icon="menu"
          class="mobile-hide"
          style="z-index: 2"
        />
        <div class="q-px-lg q-pt-xl q-mb-xl" style="z-index: 2">
          <div
            class="text-overline mobile-hide desktop-show"
            style="font-size: 3em"
          >
            Inside Gaming
          </div>
          <div
            class="text-overline mobile-show desktop-hide"
            style="font-size: 1.5em"
          >
            Inside Gaming
          </div>
        </div>
        <q-space />
        <div class="q-gutter-y-md column" style="width: 300px; max-width: 100%">
          <q-input
            style="z-index: 2"
            standout="text-grey"
            v-model="text"
            label="Recherche"
            maxlength="25"
            :dense="dense"
            dark
            rounded
            input-class="text-right"
          >
            <template v-slot:append>
              <q-icon v-if="text === ''" name="search" />
              <q-icon
                v-else
                name="clear"
                class="cursor-pointer"
                @click="text = ''"
              />
            </template>
          </q-input>
        </div>
      </q-toolbar>
      <div>
        <q-tabs v-model="tab" shrink class="mobile-show desktop-hide bg-grey-8">
          <q-item to="/" clickable>
            <q-tab name="home" icon="home" label="Acceuil" style="z-index: 2" />
          </q-item>
          <q-item to="games" clickable>
            <q-tab
              name="myGames"
              icon="gamepad"
              label="Mes Jeux"
              style="z-index: 2"
            />
          </q-item>
          <q-item to="profil" clickable>
            <q-tab
              name="profil"
              icon="person_pin"
              label="Profile"
              style="z-index: 2"
            />
          </q-item>
        </q-tabs>
      </div>
      <q-img
        src="pictures/backgroundHeader.jpg"
        class="header-image absolute-top"
      />
    </q-header>

    <q-drawer
      v-model="drawer"
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      mini-to-overlay
      :width="200"
      :breakpoint="500"
      bordered
      content-class="degrade"
      class="mobile-hide"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item
            to="/"
            clickable
            v-ripple
            style="color: white"
            class="q-mb-md"
          >
            <q-item-section avatar>
              <q-icon name="home" color="white" />
            </q-item-section>
            <q-item-section> ACCUEIL </q-item-section>
          </q-item>

          <q-item
            to="games"
            active
            clickable
            v-ripple
            style="color: white"
            class="q-mb-md"
          >
            <q-item-section avatar>
              <q-icon name="gamepad" color="white" />
            </q-item-section>
            <q-item-section> MES JEUX </q-item-section>
          </q-item>

          <q-item
            to="profil"
            clickable
            v-ripple
            style="color: white"
            class="q-mb-md"
          >
            <q-item-section avatar>
              <q-icon name="person_pin" color="white" />
            </q-item-section>
            <q-item-section> PROFILE </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksData = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
];

export default {
  name: "MainLayout",
  components: { EssentialLink },
  data() {
    return {
      essentialLinks: linksData,
      tab: "",
      text: "",
      ph: "",
      dense: false,
      drawer: false,
      miniState: true,
    };
  },
};
</script>

<style lang="scss" >
.header-image {
  height: 100%;
  z-index: 1;
  opacity: 0.4;
}
.degrade {
  background: linear-gradient(rgb(55, 62, 66), grey);
}
</style>
