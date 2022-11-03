<template>
  <div v-if="total > 0" class="pagination p-3">
    <div class="pagination__left">
      <div class="pagination__page pagination__prev-all">
        <nuxt-link :to="{ query: { ... $route.query, page: 1 }}" aria-label="Первая" class="page-link--with-arrow" @click="changePage(1)">
          Первая
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
          Предыдущая
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
          Следующая
        </nuxt-link>
      </div>
      <div class="pagination__page pagination__next-all">
        <nuxt-link :to="{ query: { ... $route.query, page: paginationItems }}"
                  aria-label="Последняя"
                  class="page-link--with-arrow"
                  @click="changePage(paginationItems)"
        >
          Последняя
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
