<template>
  <div class="enter-code">
    <div class="hack-text" v-if="!showModal">{{ animatedText }}</div>
    <form v-if="showModal" @submit.prevent="checkCode">
      <div class="input-wrapper">
        <input v-model="code" type="text" placeholder="Enter secret code" class="input-field">
        <button type="submit" class="submit-button">Submit</button>
      </div>
      <p v-if="error" class="error-message">{{ errorMessage }}</p>
      <p v-if="success" class="success-message">
        {{ successMessage }}
        <a :href="mapLink" target="_blank">Click here to view location</a>
      </p>
    </form>
    <div class="user-controls">
      <div class="username">{{ userName }}</div> <!-- Affiche le nom d'utilisateur -->
      <button class="logout-button" @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
import { client } from '@/utils/axios.js'
import { useRouter } from 'vue-router'

export default {
  data() {
    return {
      code: '',
      errorMessage: 'Error: Incorrect code entered.',
      successMessage: 'Location found',
      error: false,
      success: false,
      showModal: false,
      animatedText: '',
      userName: '',
      mapLink: 'https://www.google.com/maps/dir//Pentagon+Building,+The+Pentagon,+Washington,+VA,+USA/@34.9002923,-77.0760845,3z/data=!3m1!5s0x89b7b7a32f363b2d:0x1c5f7b0ee3bc814d!4m8!4m7!1m0!1m5!1m1!1s0x89b7b6df29ed2c27:0xaf83d0f8c013532f!2m2!1d-77.0562669!2d38.8718568?entry=ttu',
      audio: new Audio('/public/images/75829__analog-bleep-ten__typing.wav') // Initialisation de l'objet audio
    };
  },
  mounted() {
    // Démarrer l'animation de texte
    this.animateText(`Help us, you need to find the 6-digit code which will help us to find the location. 
    Your mission is clear: locate the original AI before it's too late.
    "She's the key to the code". Act quickly, time is running out.
    ....
    .....
    ......
    .......
    ........
`);
    // Démarrer la bande audio
    this.audio.play();
    this.fetchUserName(); // Appel pour récupérer le nom d'utilisateur lors du montage du composant
  },
  methods: {
    animateText(text) {
      let index = 0;
      const interval = setInterval(() => {
        this.animatedText += text[index];
        index++;
        if (index === text.length) {
          clearInterval(interval);
          // Une fois que le texte est entièrement affiché, afficher la fenêtre modale
          this.showModal = true;
        }
      }, 70); // Vitesse de dactylographie, ajustez-la selon vos préférences
    },
    checkCode() {
      const correctCode = '011101';
      if (this.code === correctCode) {
        this.success = true;
        this.error = false;
      } else {
        this.error = true;
        this.success = false;
      }
    },
    async fetchUserName() {
      try {
        const token = localStorage.getItem('token');
        const headers = { Authorization: `Bearer ${token}` };
        const response = await client.get('/username', { headers });
        this.userName = response.data.rows[0].name;
      } catch (error) {
        console.error('Error fetching user name:', error);
      }
    },
    async logout() {
      // Supprimer le jeton d'authentification du stockage local
      localStorage.removeItem('token');
      // Rediriger vers la page de connexion
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.enter-code {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: black;
  color: white;
  font-family: monospace;
  position: relative; /* Ajout */
}

.hack-text {
  white-space: pre-line;
  position: absolute; /* Ajout */
  top: 40%; /* Ajout */
  left: 40%; /* Ajout */
  transform: translate(-50%, -50%); /* Ajout */
}

.input-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-field {
  margin-bottom: 10px;
  width: 200px;
  height: 40px;
  border: 2px solid white;
  background-color: black;
  color: white;
  padding: 5px;
  font-size: 24px;
}

.submit-button {
  width: 200px;
  height: 40px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  background-color: transparent;
  border: 2px solid white;
  cursor: pointer;
}

.submit-button:hover {
  background-color: white;
  color: black;
}

.error-message, .success-message {
  margin-top: 10px;
  color: white;
  font-weight: bold;
  font-size: 18px;
}

.user-controls {
  position: fixed; /* Modification */
  bottom: 20px; /* Modification */
  right: 20px; /* Modification */
  display: flex;
  width: auto;
}

.username, .logout-button {
  color: white;
  border: 2px solid white;
  background-color: transparent;
  padding: 10px 30px;
  font-size: 16px;
  margin-right: 20px;
}

</style>
