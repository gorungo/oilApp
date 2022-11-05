<template>
  <div class="container center-block text-center h-100vh-80 flex-column">
    <h1 class="main-title">Автомобильные масла<br/> по выгодным ценам</h1>
    <div class="row mt-4 product-presentation">
      <div class="col-6 col-md-3 mb-2">
        <div class="card card-body">
          <img src="https://mcmauto.ru/storage/img/thumb/626100c01ac2208eb81d3bfc43227a54.jpg">
        </div>
      </div>
      <div class="col-6 col-md-3 mb-2">
        <div class="card card-body">
          <img src="https://mcmauto.ru/storage/img/thumb/a7959350fd51cf1ed17e3c356094d1e3.jpg">
        </div>
      </div>
      <div class="col-6 col-md-3 mb-2">
        <div class="card card-body">
          <img src="https://mcmauto.ru/storage/img/thumb/c1d3fcf5e3bd56e09a85d44c1348c6e6.jpg">
        </div>
      </div>
      <div class="col-6 col-md-3 mb-2">
        <div class="card card-body">
          <img src="https://mcmauto.ru/storage/img/thumb/ab6d2f6cf3d4c40438d5c63d3b1fb320.jpg">
        </div>
      </div>
    </div>
    <div class="mt-4">
      <nuxt-link to="/catalog" class="btn btn-outline-primary">
        Перейти в каталог
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.2929 14.2929L16 15L19 12L16 9L15.2929 9.70711L17.0858 11.5L5 11.5V12.5L17.0857 12.5L15.2929 14.2929Z" fill="currentcolor"/>
        </svg>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
