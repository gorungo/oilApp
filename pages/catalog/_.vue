<template>
  <div class="container catalog-page">
    <nuxt-link to="/catalog" class="mt-5 mb-3 btn btn-outline-primary">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.20711 9.20711L5.5 8.5L2 12L5.5 15.5L6.20711 14.7929L3.91416 12.5H22V11.5H3.91425L6.20711 9.20711Z" fill="currentcolor"/>
      </svg>
      Назад в каталог
    </nuxt-link>
    <h1 v-if="activeCategory" class="mb-4 catalog__title">{{activeCategory.name}}<span v-if="total" class="ml-4 catalog__product-count">({{total}})</span></h1>
    <brand-selector :brands="brands"/>
    <product-list
      v-if="activeCategory"
      :products="products"
      :total="total"
      :page="page"
    />
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import ProductList from "~/components/product/ProductList"
import BrandSelector from "~/components/category/BrandSelector";

export default {

  components: {
    BrandSelector,
    ProductList,
  },

  async fetch(){
    let newCategory = false;
    await this.$store.dispatch('category/getMainCategories')
    if(!this.activeCategory || (this.activeCategory && this.activeCategory.slug !== this.categorySlugFromUrl)){
      await this.setActiveCategoryBySlug(this.categorySlugFromUrl)
      newCategory = true
    }

    this.params.category_id = this.activeCategory.id
    this.params.page = this.page
    this.params.brand_id = this.brand

    if(this.brands.length === 0 || newCategory){
      await this.fetchBrands(this.params)
    }
    await this.fetchProducts(this.params)
  },

  head(){
    return {
      title: 'Список товаров',
    }
  },

  data: () => ({
    fetching: false,
    loading: false,
    params: {
      page: 1,
    },
  }),

  watch: {
    '$route.query': '$fetch'
  },

  computed: {
    ...mapState('category', ['activeCategory']),
    ...mapState('product', ['products', 'total', 'brands']),
    page(){
      return this.$route.query.page ?? 1
    },
    brand(){
      return this.$route.query.brand ?? null
    },
    categorySlugFromUrl(){
      return this.$route.params.pathMatch ? this.$route.params.pathMatch.split('/').reverse()[0] : null
    }
  },

  methods: {
    ...mapActions('category', ['setActiveCategoryBySlug']),
    ...mapActions('product', ['fetchProducts', 'fetchBrands']),

  },

}
</script>
