<template>
  <div class="mt-3">
    <div v-if="products.length" class="list">
      <ProductItem
        v-for="product in products"
        :product="product"
        :key="product.article"
        :loading="loading"
      />
      <ProductPagination
        :current-page="page"
        :total="total"
        :limit="30"
      />
    </div>
    <div v-if="loading" class="list">
      <div v-for="i in 6" class="is-loading list-item" :key="i">
        <div class="list-item__image-wrap">
        </div>
        <div class="list-item__title">

        </div>
        <div class="list-item__price">
          <span>&nbsp;</span>
        </div>
      </div>
    </div>
    <div v-if="!loading && !products.length">
      Нет доступных товаров
    </div>
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue"
import ProductPagination from "./ProductPagination.vue"

export default {
  components: {
    ProductPagination,
    ProductItem
  },
  props: {
    loading: Boolean,
    page: Number,
    total: Number,
    products: Array,
  },

  data: () => ({
    //
  }),
}

</script>
<style>
  .list{
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }
</style>
