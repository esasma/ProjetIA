<template>
  <div class="page">
    <div class="background"></div>
    <div class="container">
      <div class="form-section">
        <div class="form">
          <div class="hero">REGISTER</div>
          <form @submit.prevent="createAccount">
            <label for="name">USERNAME</label>
            <input v-model="name" type="text" id="name" required />
            <label for="password">PASSWORD</label>
            <input v-model="password" type="password" id="password" required />
            <button class="form__button" type="submit">REGISTER</button>
          </form>
        </div>
      </div>
      <div class="form-section">
        <div class="form">
          <div class="hero">LOGIN</div>
          <form @submit.prevent="loginAccount">
            <label for="loginName">USERNAME</label>
            <input v-model="loginName" type="text" id="loginName" required />
            <label for="loginPassword">PASSWORD</label>
            <input v-model="loginPassword" type="password" id="loginPassword" required />
            <button class="form__button" type="submit">LOGIN</button>
          </form>
        </div>
      </div>
    </div>
    <div class="result">
      <div class="result__title">CONSOLE</div>
      <div class="result__content">{{ message }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();

const name = ref("");
const password = ref("");

const loginName = ref("");
const loginPassword = ref("");

const user = ref();
const message = ref();

const createAccount = async () => {
  try {
    const response = await axios.post("http://localhost:3000/register", {
      name: name.value,
      password: password.value,
    });

    console.log(response.data); // Affiche la réponse de l'API
    message.value = "ACCOUNT CREATED";
  } catch (error) {
    console.error("Error creating account:", error);
    message.value = "CREATION FAILED";
  }
};

const loginAccount = async () => {
  try {
    const response = await axios.post("http://localhost:3000/login", {
      name: loginName.value,
      password: loginPassword.value,
    });

    console.log(response.data); // Affiche la réponse de l'API
    message.value = "SUCCESSFUL CONNECTION";
    localStorage.setItem('token', response.data.token);
    setTimeout(() => {
      router.push({
        name: "about",
      });
    }, 1500);
  } catch (error) {
    console.error("Error logging in:", error);
    message.value = "CONNECTION FAILED";
  }
};

onMounted(async () => {
});
</script>

<style lang="scss" scoped>
.page {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/public/images/hyperspace_-_23154 (Original).mp4'); /* Remplacer par le chemin de votre GIF */
  background-size: cover;
  z-index: -1;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: -60px
}

.form-section {
  margin: 0 10px;
  background-color: black; /* Couleur de fond de la "carte" */
  border-radius: 10px; /* Bordures arrondies pour simuler une carte */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* Ombre pour simuler une carte */
  padding: 20px; /* Ajout de marge à l'intérieur de la "carte" */
  border: 2px solid white; /* Bordure blanche */
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center; /* Pour centrer les boutons */
  font-size: rem(40);
  margin-bottom: rem(20);
}

.hero {
  font-size: rem(60);
  padding: rem(10);
  color: $secondary-color;
}

.form label {
  padding: rem(10);
  color: $secondary-color;
}

.form input {
  width: 20vw;
  height: rem(63);
  font-size: rem(40);
  padding: rem(10);
  margin-bottom: 10px; /* Ajouter une marge inférieure pour espacer les champs */
}

.form__button {
  width: 20vw;
  height: rem(68);
  font-size: rem(40);
  color: #ffffff;
  background-color: #000000;
  margin-top: rem(20);
  border: 2px solid white;
}

.result {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 96%;
  border-top: 1px solid $secondary-color;
  font-size: rem(40);
  color: $secondary-color;
  margin: 30px 10px;
  background-color: black; /* Couleur de fond de la "carte" */
  border-radius: 10px; /* Bordures arrondies pour simuler une carte */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* Ombre pour simuler une carte */
  padding: 20px; /* Ajout de marge à l'intérieur de la "carte" */
  border: 2px solid white; /* Bordure blanche */
}

.result__title {
  padding: rem(10);
  color: $secondary-color;
}

.result__content {
  padding: rem(10);
  text-transform: uppercase;
}
</style>
