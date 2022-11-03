<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">OilApp</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="navbarSupportedContent" class="collapse navbar-collapse" >
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <NuxtLink class="nav-link" to="/catalog">Каталог</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/about">О компании</NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader"
}
</script>

<style scoped>
.navbar{
  padding: 0 1rem;
}
.nav-link{
  padding: 1rem 0.25rem;
}
.nav-item .nuxt-link-active {
  border-bottom: 2px solid var(--primary);}
</style>
