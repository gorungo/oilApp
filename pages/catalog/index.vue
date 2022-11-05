<template>
	<div class="container">
    <h1 class="my-4 mt-5">Каталог товаров</h1>
    <category-list-main />
	</div>
</template>

<script>
import {mapActions} from "vuex"
import CategoryListMain from "~/components/category/CategoryListMain"

export default {
	name: "Index",
  components: {CategoryListMain},
  data: () => ({

	}),
  mounted() {
    this.clearProducts()
  },
  methods: {
    ...mapActions('product', ['clearProducts']),
  }
}
</script>
