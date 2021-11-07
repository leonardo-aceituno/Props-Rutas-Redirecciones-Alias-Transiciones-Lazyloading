<template>
  <div>
    <header
      class="masthead"
      style="background-image:url('assets/img/home-bg.jpg');"
    >
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-lg-8 mx-auto">
            <div class="site-heading">
              <h1>Administrador</h1>              
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
