<template>
  <div class="about">
    <video ref="videoPlayer" autoplay muted class="fullscreen-video" @ended="redirectToCodePage">
      <source src="/public/images/testia.mp4" type="video/mp4">
    </video>
    <div class="button-container">
      <button class="sound-button" @click="toggleSound" style="margin-left: 20px;">{{ videoMuted ? 'Activate the sound' : 'Detivate the sound' }}</button>
      <button class="skip-button" @click="skipVideo">Skip the video</button>
      <button class="logout-button" @click="logout">Logout</button>
      <div class="username">{{ userName }}</div> <!-- Affiche le nom d'utilisateur -->
    </div>
  </div>
</template>

<script>
import { client } from '@/utils/axios.js'
import { useRouter } from 'vue-router'

export default {
  data() {
    return {
      videoMuted: true,
      userName: ''
    };
  },
  methods: {
    redirectToCodePage() {
      this.$router.push('/code');
    },
    toggleSound() {
      const video = this.$refs.videoPlayer;
      this.videoMuted = !this.videoMuted;
      video.muted = this.videoMuted;
    },
    skipVideo() {
      this.redirectToCodePage();
    },
    async logout() {
      // Supprimer le jeton d'authentification du stockage local
      localStorage.removeItem('token');
      // Rediriger vers la page de connexion
      this.$router.push('/login');
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
    }
  },
  mounted() {
    this.fetchUserName();
  }
}
</script>

<style scoped>
.about {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.fullscreen-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
  z-index: -1;
}

.button-container {
  position: absolute;
  bottom: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
}

.sound-button, .skip-button, .logout-button {
  background-color: transparent;
  color: white;
  border: 2px solid white;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-right: 20px; /* Espace de 10px entre les boutons */
}
.logout-button{
  margin-left: 50rem ;
}
.username {
  color: white;
  border: 2px solid white;
  background-color: transparent;
  padding: 10px 20px;
  margin-left: 0.1rem; /* Place le bouton username à droite */
  margin-right: 10px;
}
</style>
