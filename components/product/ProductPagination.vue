<template>
  <div v-if="total > 0" class="pagination p-3">
    <div class="pagination__left">
      <div class="pagination__page pagination__prev-all">
        <nuxt-link :to="{ query: { ... $route.query, page: 1 }}" aria-label="Первая" class="page-link--with-arrow" @click="changePage(1)">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.57544 12L11.5858 5.98956L13.0001 7.40378L8.40387 12L13.0001 16.5962L11.5858 18.0104L5.57544 12Z" fill="#2E3A59"/>
            <path d="M11.0001 12L17.0105 5.98956L18.4247 7.40378L13.8285 12L18.4247 16.5962L17.0105 18.0104L11.0001 12Z" fill="#2E3A59"/>
          </svg>
        </nuxt-link>
      </div>
      <div class="pagination__page pagination__prev">
        <nuxt-link
            :disabled="currentPage===1"
            :to="{ query: { ... $route.query, page: currentPage > 1 ? currentPage - 1 : 1 }}"
            aria-label="Назад"
            class="page-link--with-arrow"
            @click="changePage(currentPage-1)"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.298 5.98962L8.2876 12L14.298 18.0104L15.7122 16.5962L11.116 12L15.7122 7.40384L14.298 5.98962Z" fill="currentcolor"/>
          </svg>
        </nuxt-link>
      </div>
    </div>
    <nav aria-label="Постраничная навигация">
      <span class="pagination pagination__pages">
        <span :class="{'active' : currentPage === 1}" class="pagination__page">
          <nuxt-link :to="{ query: { ... $route.query, page: 1 }}" class="" @click="changePage(1)">1</nuxt-link>
        </span>
        <span v-if="currentPage > totalVisible+1" class="pagination__page page-item--dots">
          <div class="pagination__dots">...</div>
        </span>
        <template v-if="paginationItems > 3">
          <template v-for="(item, index) in  paginationItems">
            <span
                :key="index"
                v-if="Math.abs( index+1  - currentPage) < 3 && index+1 !== paginationItems && index+1 !== 1"
                :class="{'active' : currentPage === index+1}"
                class="pagination__page"
            >
              <nuxt-link
                  :to="{ query: { ... $route.query, page: index+1 }}" class=""
                  @click="changePage(index+1)"
              >
					<span>
						{{ index+1 }}
					</span>
              </nuxt-link>
            </span>
          </template>
        </template>
        <template v-else>
          <template v-for="(item, index) in  paginationItems">
            <span
                :key="index"
                v-if="index+1 !== 1"
                :class="{'active' : currentPage === index+1}"
                class="pagination__page"
            >
              <nuxt-link :to="{ query: { ... $route.query, page: index+1 }}" class=""
                          @click="changePage(index+1)">
					<span>
						{{ index+1 }}
					</span>
              </nuxt-link>
            </span>
          </template>
        </template>
        <span v-if="paginationItems > currentPage + totalVisible" class="pagination__page page-item--dots">
          <div class="pagination__dots">...</div>
        </span>
        <span v-if="paginationItems > totalVisible" :class="{'active' : currentPage === paginationItems}" class="pagination__page">
          <nuxt-link :to="{ query: { ... $route.query, page: paginationItems }}" class="" @click="changePage(paginationItems)">{{paginationItems}}</nuxt-link>
        </span>
      </span>
    </nav>
    <div class="pagination__right">
      <div class="pagination__page pagination__next">
        <nuxt-link
            :disabled="currentPage===pagesCount"
            :to="{ query: { ... $route.query, page: currentPage+1 }}"
            aria-label="Вперед"
            class="page-link--with-arrow"
            @click="changePage(currentPage+1)"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.70181 18.0104L15.7122 12L9.70181 5.98956L8.2876 7.40378L12.8838 12L8.2876 16.5962L9.70181 18.0104Z" fill="currentcolor"/>
          </svg>
        </nuxt-link>
      </div>
      <div class="pagination__page pagination__next-all">
        <nuxt-link :to="{ query: { ... $route.query, page: paginationItems }}"
                  aria-label="Последняя"
                  class="page-link--with-arrow"
                  @click="changePage(paginationItems)"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.4247 12L12.4143 18.0104L11.0001 16.5962L15.5963 12L11.0001 7.40378L12.4143 5.98956L18.4247 12Z" fill="currentcolor"/>
            <path d="M13.0001 12L6.98965 18.0104L5.57544 16.5962L10.1716 12L5.57544 7.40378L6.98966 5.98956L13.0001 12Z" fill="currentcolor"/>
          </svg>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>

import "~/assets/scss/pagination.scss"

export default {
  name: "ProductPagination",
  props: {
    total: Number,
    limit: {
      type: Number,
      default: 60,
    },
    currentPage: {
      type: Number,
      default: 1
    }
  },
  data: () => ({
    totalVisible: 3,
  }),
  computed: {
    paginationItems() {
      return Math.ceil((this.total / this.limit))
    },
    pagesCount() {
      return Math.ceil((this.total / this.limit))
    },
  },
  mounted(){
    window.addEventListener('keydown', this.handleKeyDown, false)
  },
  methods: {
    changePage(page) {
      this.$emit('page:change', page)
    },
    handleKeyDown(e){
      if(e.altKey){
        if(e.key === 'ArrowLeft'){
          this.changePage(this.currentPage > 1 ? this.currentPage - 1 : 1)
        }
        if(e.key === 'ArrowRight'){
          this.changePage(this.currentPage + 1)
        }
      }
    },
  },
}
</script>

<style scoped>
</style>
