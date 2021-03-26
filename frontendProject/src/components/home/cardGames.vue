<template>
<div>
  <q-card
    v-for="item in 8"
    :key="item"
    class="col-12 col-sm-6 shadow-0 cardBackground q-pa-sm"
  >
    <q-card-section class="q-pa-none">
      <q-img
        src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg"
        style="width: 150px; height: 150px"
      />
    </q-card-section>
    <q-card-section class="q-pa-none">
      {{ lorem }}
      {{ lorem }}
    </q-card-section>
  </q-card>
</div>
</template>

<script>
export default {
    name: "CardGames",
}
</script>