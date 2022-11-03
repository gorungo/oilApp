<template>
	<div id="app">
		<AppHeader />
		<main>
				<nuxt />
		</main>
		<Footer />
	</div>
</template>

<script>
import AppHeader from "~/components/AppHeader";

export default {
	components: {AppHeader },

}
</script>
