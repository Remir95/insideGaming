<template>
  <q-page
    class="bg-light-green window-height window-width row justify-center items-center"
  >
    <div class="column">
      <div class="row">
        <h5 class="text-h5 text-white q-my-md">Inside Gaming</h5>
      </div>
      <div class="row">
        <q-card square bordered class="q-pa-lg shadow-1">
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input
                square
                filled
                clearable
                v-model="email"
                type="email"
                label="email"
              />
              <q-input
                square
                filled
                clearable
                v-model="password"
                type="password"
                label="password"
              />
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn
              unelevated
              color="light-green-7"
              size="lg"
              class="full-width"
              label="Login"
              @click="signIn()"
            />
          </q-card-actions>
          <q-card-section class="text-center q-pa-none">
            <q-btn flat to="/signup" clickable class="text-grey-6"
              >Not reigistered? Created an Account</q-btn
            >
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { userSignIn } from "../services/user";
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signIn() {
      axios
        .post(
          `http://localhost:3000/sign-in`,
          JSON.stringify({ email: this.email, password: this.password }),
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer {token}",
            },
          }
        )
        .then((response) => {
          console.log("RESPONSE", response);
          {
            localStorage.token = response.data.token;
            localStorage.email = this.email;
          }
          if (localStorage.token) {
            this.email = localStorage.email;
            this.token = localStorage.token;
            console.log('TEST SAVE', this.token)
          }
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
};
</script>

<style>
.q-card {
  width: 360px;
}
</style>