<template>
    <div>
        <section id="menu" class="menu">
  <div class="container" data-aos="fade-up">

    <div class="section-header">
      <h2>Nuestro Menu</h2>
      <p>Seleccioná <span>Tu Menú</span></p>
    </div>

    <ul class="nav nav-tabs d-flex justify-content-center" data-aos="fade-up" data-aos-delay="200">

      <li class="nav-item">
        <a class="nav-link active show" >
          
          <li><RouterLink to="/entrada"><h4>Pasteleria</h4></RouterLink></li>
        </a>
      </li>

      <li class="nav-item">
        <a class="nav-link active show" >
          
          <li><RouterLink to="/desayuno"><h4>Desayuno</h4></RouterLink></li>
        </a>
    </li>
        

      <li class="nav-item">
        <a class="nav-link active show" >
          
          <li><RouterLink to="/almuerzo"><h4>Almuerzo</h4></RouterLink></li>
        </a>
      </li>

      <li class="nav-item">
        <a class="nav-link active show" >
          
          <li><RouterLink to="/cena"><h4>Cena</h4></RouterLink></li>
        </a>
      </li><!-- End tab nav item -->

    </ul>

    

  </div>
</section>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>