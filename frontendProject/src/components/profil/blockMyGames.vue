<template>
  <div>
    <div>
      <div class="q-pa-md" style="display: flex; justify-content: center">
        <div class="q-gutter-y-md" style="max-width: 600px">
          <q-tabs v-model="tab" class="text-teal">
            <q-tab name="myInfo" icon=" person" label="Mes Informations" />
            <q-tab name="myFriends" icon="people" label="Mes amis" />
          </q-tabs>
          <template>
            <q-tab-panels
              v-model="tab"
              animated
              swipeable
              vertical
              transition-prev="jump-up"
              transition-next="jump-up"
              class="bg-grey-4"
            >
              <q-tab-panel name="myInfo">
                <div class="text-h5 text-bold q-mb-md">
                  Mes informations personnelles :
                </div>
                <h6>Pseudo :</h6>
                <h6>Nom :</h6>
                <h6>Prénom :</h6>
                <h6>Adresse :</h6>
                <h6>Téléphone :</h6>
              </q-tab-panel>

              <q-tab-panel name="myFriends">
                <div class="text-h5 q-mb-md">Ma liste d'amis :</div>
                <div class="">
                  <q-table :data="data" :columns="columns" row-key="name" />
                </div>
              </q-tab-panel>
            </q-tab-panels>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "blockMyGames",
  data() {
    return {
      tab: "myInfo",
      splitterModel: 20,
      columns: [
        {
          name: "name",
          required: true,
          label: "Pseudo",
          align: "left",
          field: (row) => row.name,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "connection",
          align: "center",
          label: "Connection",
          field: "connection",
          sortable: true,
        },
      ],
      data: [
        {
          name: "Damien Bodilis",
          connection: true,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>