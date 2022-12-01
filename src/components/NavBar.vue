<template>
  <div>
    <header id="header" class="header fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center me-auto me-lg-0">
        <!-- Uncomment the line below if you also wish to use an image logo -->
        <!-- <img src="assets/img/logo.png" alt=""> -->
        <h1>COCO - KIKI</h1>
      </a>

      <nav id="navbar" class="navbar">
        <ul>
          <li><RouterLink to="/">Inicio</RouterLink></li>
          <li> <RouterLink to="/about">Acerca de nosotros</RouterLink></li>
          
          <li><RouterLink to="/galeria">Galeria</RouterLink></li>
          <li><RouterLink to="/chef">Chef</RouterLink></li>
          <li><RouterLink to="/menu">Menú</RouterLink></li>
        
          <li><RouterLink to="/contacto">Contacto</RouterLink></li>
          <li><RouterLink to="/login">Login/Register</RouterLink></li>
        </ul>
      </nav><!-- .navbar -->

     
      <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

    </div>
  </header>

  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>