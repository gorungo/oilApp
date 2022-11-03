<template>
	<div v-if="links && links.length" class="breadcrumbs">
		<nuxt-link
			v-for="(link, i) in links"
			:key="i"
			:to="link.url"
			class="breadcrumbs__item"
		>
			{{ link.title }}
		</nuxt-link>
	</div>
</template>

<script>
export default {
	name: "AppBreadcrumbs",
  props: {
    links: {
      type: Array,
      default: ()=>[],
    },
  },
}
</script>
