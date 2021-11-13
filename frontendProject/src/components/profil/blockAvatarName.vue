<template>
  <div>
    <div class="center gt-sm">
      <q-card class="my-card card shadow-10 q-mt-xl" basic>
        <div
          class="absolute-bottom text-subtitle2 text-center divText"
          style="border-radius: 4px 4px 4px 10px; padding:89px"
        >
          Bonjour master {{ name }}
        </div>
        <div class="text-center">
          <q-avatar style="width: 200px; height: 200px">
            <img
              class="position"
              src="https://cdn.quasar.dev/img/boy-avatar.png"
            />
          </q-avatar>
        </div>
      </q-card>
    </div>
    <div class="center lt-md" style="padding-top:90px">
      <q-card class="my-card card shadow-10" style="margin-left:0px" basic>
        <div
          class="absolute-bottom text-subtitle2 text-center divText"
          style="border-radius: 4px 4px 4px 10px; padding:40px"
        >
          Bonjour master {{ name }}
        </div>
        <div class="text-center">
          <q-avatar style="width: 130px; height: 130px">
            <img
              class="positionSmall"
              src="https://cdn.quasar.dev/img/boy-avatar.png"
            />
          </q-avatar>
        </div>
      </q-card>
    </div>
  </div>
</template>
<script>
export default {
  name: "blockAvatarName",
};
</script>

<style lang="scss" scoped>
.card {
  width: 500px;
  margin-left: 80px;
  background: linear-gradient(to bottom right, grey, white);
}
.center {
  display: flex;
  justify-content: center;
}
.divText {
  background-color: rgba(0, 0, 0, 0.401);
  padding: 30px;
  font-size: 1.5em;
  color: white;
}
.position {
  position: absolute;
  left: -10em;
  border: 5px grey solid;
  box-shadow: 0px 0px black, -5px 0 1em grey;
  background-color: grey;
}
.positionSmall {
  position: absolute;
  left: 0px;
  top: -3em;
  border: 5px grey solid;
  box-shadow: 0px 0px black, -5px 0 1em grey;
  background-color: grey;
}
</style>