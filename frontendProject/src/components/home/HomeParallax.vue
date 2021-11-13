<template>
  <div>
    <q-parallax>
      <template v-slot:media>
        <img
          style="background-attachment: fixed; background-size: 100% auto"
          src="/pictures/backgroundCard.jpeg"
        />
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
          <div class="text-h3 text-white text-center">Quel sera ton jeu du moment ? </div>
        </div>
      </template>
    </q-parallax>
  </div>
</template>

<script>
export default {
  name: "HomeParallax",
};
</script>