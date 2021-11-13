<template>
  <div>
    <div>
      <q-card class="col-1 shadow-0 cardBackground" style="padding-top:70px">
        <q-card-section>
          <h3>Votre Site InsideGaming se présente :</h3>
          <p>
            InsideGaming est un site qui vous présente les dernières nouveautés
            en matière de jeux vidéo, il vous suffit de rechercher ou de
            sélectionner votre jeu vidéo préférer !
          </p>
          <p>
            Dans la catégorie "mes jeux" vous pouvez prévenir les autres joueurs
            que vous voulez jouer à ce jeu, et ils peuvent venir tchater avec
            vous pour créer un groupe et créer vos plus beaux souvenirs de
            gamer.<br />
            Ne vous sentez plus jamais seul et tenez-vous au courant des
            dernières sorties avec InsideGaming !
          </p>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlockGames",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.cardBackground {
  overflow: auto;
  background-color: transparent;
  border-radius: 0px;
}
p {
  font-size: 18px;
}
</style>