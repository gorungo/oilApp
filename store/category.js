export const state = () => ({
  categories : [],
  activeCategory: null,
})

export const getters = {
  categoryChildren: (state) => {
    let res = []
    const c = [...state.categories]
    for (let i = 0; i < c.length; i++) {
      res = res.concat(c[i].children)
    }
    return res
  }
}

export const mutations = {
  setCategories: (state, categories) => {
    state.categories = categories
  },

  setActiveCategory: (state, category) => {
    state.activeCategory = category
  },
}

export const actions = {
  async getMainCategories({commit, state}) {
    if(state.categories.length) return
    await this.$axios.$get('categories/main', {})
      .then(resp => {
        commit('setCategories', resp.data)
      })
      .catch(error => {
        throw error
      });
  },

  setActiveCategoryBySlug({getters, commit}, slug) {
    commit('setActiveCategory', getters.categoryChildren.find(cat => cat.slug === slug))
  }
}

