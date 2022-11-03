<template>
  <div class="categories-list categories-list--layout--columns-5-sidebar">
    <ul class="categories-list__body">
        <li v-for="(cat) in categories" :key="cat.id" class="categories-list__item">
          <NuxtLink class="categories-list__link" :to="categoryLink(cat)">
            <div class="image image--type--category">
              <div class="image__body">
                <img v-if="cat.image" class="image__tag" height="150px" :src="`/storage/categories/${cat.image}`" alt="">
                <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5C3.897 3 3 3.897 3 5V19C3 20.103 3.897 21 5 21H19C20.103 21 21 20.103 21 19V5C21 3.897 20.103 3 19 3ZM5 19V5H19L19.002 19H5Z" fill="#2E3A59"/>
                  <path d="M10 14L9 13L6 17H18L13 10L10 14Z" fill="#2E3A59"/>
                  <path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#2E3A59"/>
                </svg>
              </div>
            </div>
            <div class="categories-list__item-name py-3">{{ cat.name }}</div>
          </NuxtLink>
          <div class="categories-list__item-products">{{ cat.products }}</div>
        </li>
        <li class="categories-list__divider"></li>
    </ul>
  </div>
</template>

<script>
import {categoryLinkUrl} from "@/js/category"
export default {
  name: "CategoryList",
  props: {
    category: {
      type: Object,
      default: null,
    },
    categories: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    categoryLink(){
      return this.category ? categoryLinkUrl(this.category, ...arguments) : categoryLinkUrl(...arguments)
    }
  }
}
</script>

<style scoped>

</style>
