<template>
  <div class="container">
    <h1>Asma Es-sabbar</h1>
    <div class="buttons">
      <a href="mailto:essabbarasma17@gmail.com" class="button">Mail</a>
      <a href="https://github.com/votre_github" class="button">GitHub</a>
      <a href="https://www.instagram.com/votre_instagram/" class="button">Instagram</a>
    </div>
    <div class="copyright">
      <p>Asma Es-sabbar, 2024 | Projet universitaire MMI Montbéliard © | Mentions légales</p>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: black;
  font-weight: bold;
}

h1 {
  font-size: 80px;
  margin-bottom: 30px;
  color: white;
  text-transform: uppercase;
}

.buttons {
  display: flex;
}

.button {
  background-color: black;
  color: white;
  border: 2px solid white;
  padding: 10px 70px;
  font-size: 16px;
  font-weight: bold;
  margin: 0 15px;
  cursor: pointer;
  text-decoration: none;
}

.button:hover {
  background-color: white;
  color: black;
}

.copyright {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  font-size: 14px;
}
</style>
