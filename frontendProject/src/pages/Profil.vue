<template>
  <q-page class="flex flex-center bg-grey-4">
    <q-input
      v-model="name"
      label="PROFILE"
      outlined
      standout="bg-blue-8 text-white"
      class="q-ma-md"
    >
      <template v-slot:append>
        <q-icon name="person"></q-icon>
      </template>
    </q-input>
    <q-btn color="red" round icon="flag" size="lg" :loading="false"> </q-btn>
  </q-page>
</template>

<script>
  export default {
    name: 'PageIndex', 
    components:{},
    data() {
    return {
      name: "",
    }
    }
  }
</script>
