<template>
    <div class="container">
      <h1>Mentions légales</h1>
      <p class="legal-text">
        Ce site web a été créé dans le cadre d'un projet universitaire pour le département MMI de Montbéliard en 2024.<br>
        Les vidéos utilisés sur ce site sont libres de droits et proviennent du site Pixabay.
        Les audios utilisés sur ce site sont libres de droits et proviennent du site Freesound.org.
      </p>
      <p class="copyright">
        Asma Es-sabbar, 2024 | Projet universitaire MMI Montbéliard © | 
        <a href="/mention" class="legal-link">Mentions légales</a>
      </p>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: black;
    padding: 0 20px;
  }
  
  h1 {
    font-size: 48px;
    color: white;
    margin-top: 12rem;
    margin-bottom: 3rem;
    text-transform: uppercase;
    font-weight: bold;
  }
  
  .legal-text {
    color: white;
    font-size: 18px;
    text-align: left;
    margin-bottom: 30px;
  }
  
  .copyright {
    color: white;
    font-size: 14px;
    text-align: center;
    margin-top: auto;
  }
  
  .legal-link {
    color: white;
    text-decoration: underline;
  }
  </style>
  