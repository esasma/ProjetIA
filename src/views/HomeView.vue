<template>
  <div class="page">
    <video autoplay loop muted class="video-bg" preload="auto">
      <source src="/public/images/bust_-_42670 (1080p).mp4" type="video/mp4">
    </video>
    <div class="background"></div>
    <div class="content-container">
      <div class="greeting-container">
        <p class="greeting">{{ greeting }}</p>
        <div class="buttons">
          <RouterLink to="/login" class="login-button">START</RouterLink>
          <RouterLink to="/contact" class="contact-button">CONTACT</RouterLink>
        </div>
      </div>
      <p class="copyright">Asma Es-sabbar, 2024 | Projet universitaire MMI Montbéliard © | Mentions légales</p>
    </div>
    <div class="brand">IA4TAYZ - 011101</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const greetings = [
  { lang: 'English', text: 'Hello!' }, // Anglais
  { lang: 'Mandarin', text: '你好！' }, // Mandarin (Chinois)
  { lang: 'Spanish', text: '¡Hola!' }, // Espagnol
  { lang: 'Hindi', text: 'नमस्ते!' }, // Hindi
  { lang: 'French', text: 'Bonjour !' }, // Français
  { lang: 'Standard Arabic', text: 'مرحباً!' }, // Arabe standard
  { lang: 'Bengali', text: 'হ্যালো!' } // Bengali
];
const greetingIndex = ref(0);
const greeting = ref(greetings[0].text);

const changeGreeting = () => {
  greetingIndex.value = (greetingIndex.value + 1) % greetings.length;
  greeting.value = greetings[greetingIndex.value].text;
};

onMounted(() => {
  setInterval(changeGreeting, 3000); // Change every 3 seconds
});
</script>

<style lang="scss" scoped>
.page {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center; /* Centrer verticalement */
}

.video-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: fill; /* Utilisation de fill pour éviter le zoom */
  z-index: -1;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.38); /* Filtre semi-transparent noir avec 80% d'opacité */
}

.content-container {
  z-index: 1; /* Assure que le contenu est devant la vidéo */
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
  text-align: center;
}

.greeting-container {
  position: relative;
}

.greeting {
  font-size: 8rem; /* Augmenter la taille du texte */
  margin-bottom: 20px; /* Ajouter de l'espace en bas */
  transition: opacity 0.5s ease-in-out; /* Transition en fondu */
  color: white;
}

.buttons {
  display: flex;
  justify-content: center;
  margin-bottom: 20rem;
}

.login-button, .contact-button {
  display: inline-block;
  padding: 10px 70px;
  font-size: 24px;
  color: white;
  background-color: transparent;
  border-radius: 4px;
  margin: 0 10px;
  border: 3.5px solid white;
  font-weight: 600;
}

.copyright {
  color: white;
  font-size: 14px;
  margin-top: 20px;
  font-size: 0.93rem;
}

.brand {
  position: absolute;
  top: 20px;
  left: 20px;
  color: white;
  font-size: 1rem;
  font-weight: bold;
}
</style>
