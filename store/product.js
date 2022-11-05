

export const state = () => ({
  products: [],
  brands: [],
  total: null,
})

export const getters = {
  //
}

export const mutations = {
  setProducts: (state, products) => {
    state.products = products
  },

  setBrands: (state, brands) => {
    state.brands = brands
  },

  setTotal: (state, total) => {
    state.total = total
  },
}

export const actions = {
  async fetchProducts({commit}, params) {
    commit('setProducts', [])
    const url = `products`
    await this.$axios.get(url, {
      params
    }).then(res => {
      commit('setProducts', res.data.data.products)
      commit('setTotal', res.data.data.total)
    }).catch(e => {
      console.log(e)
    });
  },

  async fetchBrands({commit}, params) {
    commit('setBrands', [])
    const url = `products/brands`
    await this.$axios.get(url, {
      params
    }).then(res => {
      commit('setBrands', res.data.data)
    }).catch(e => {
      console.log(e)
    });
  },

}

