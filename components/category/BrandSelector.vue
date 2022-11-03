<template>
<div class="brand-list">
  <nuxt-link
    :to="brandLink(null)"
    class="brand-list__item"
    :class="{active: !$route.query.brand}">Все</nuxt-link>
  <nuxt-link
    v-for="brand in brands"
    :key="brand.id"
    :to="brandLink(brand)"
    class="brand-list__item"
    :class="{active:brand.id == $route.query.brand}"
  >{{brand.name}}</nuxt-link>
</div>
</template>

<script>
export default {
  name: "BrandSelector",
  props: {
    brands: {
      type: Array,
      default: () => []
    },
  },
  methods: {
    brandLink(brand){
      if(!brand) return this.$route.path
      return this.$route.path + '?brand=' + parseInt(brand.id)
    }
  }

}
</script>

<style scoped>
.brand-list{
  display: flex;
  gap: 0.5rem;
}
.brand-list a{
  text-decoration: none;
}
.brand-list__item{
  padding: 0.25rem 0.5rem;
  background: #f8f8f8;
  border-radius: 0.5rem;
  color: var(--dark);
}
.brand-list__item.active{
  background: var(--primary);
  color: white;
}

</style>
