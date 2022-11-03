<template>
  <div class="row categories-list">
    <div v-for="(cat, i) in categories" :key="i" class="col-4 category">
      <div class="card card-body">
        <div class="category__name">{{cat.name}}</div>
        <template v-if="cat.children">
          <div v-for="(subcat, k) in cat.children" :key="k" class="subcategory">
            <nuxt-link :to="`/catalog/${cat.slug}/${subcat.slug}`">
              <span>{{subcat.name}}</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.2929 14.2929L16 15L19 12L16 9L15.2929 9.70711L17.0858 11.5L5 11.5V12.5L17.0857 12.5L15.2929 14.2929Z" fill="currentcolor"/>
              </svg>
            </nuxt-link>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "CategoryListMain",
  data: () => ({

  }),
  async fetch(){
    await this.$store.dispatch('category/getMainCategories')
  },
  computed: {
    ...mapState('category', ['categories', 'activeCategory'])
  }
}
</script>

<style scoped>
  .category__name{
    margin-bottom: 1rem;
    font-weight: bold;
  }

  .subcategory a{
    line-height: 32px;
    display: flex;
    justify-content: space-between;
  }

</style>
