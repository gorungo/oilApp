import * as logger from "@/js/logger";

export const categoryLinkUrl = function(category){
  let link = '/catalog/'
  if(arguments.length > 0){
    for(let i = 0; i<arguments.length; i++){
      link = link + arguments[i].slug + '/'
    }
  }
  return link
}

export const getActiveCategory = async ({store, slug}) => {
  if(slug){
    try {
      const res = await store.dispatch('category/getCategoryBySlug', slug)
      await store.dispatch('category/setActiveCategory', res.data)
      return res.data
    } catch (e) {
      //logger.log(e)
    }
  }
}

export const updateActiveCategoryFromUrlParam = async ({store, route}) => {
    try {
      if(route.params.pathMatch) {
        const cats = route.params.pathMatch.split('/')
        const slug = cats[cats.length - 2].replace('/', '')
        await store.dispatch('category/setActiveCategoryBySlug', slug)
      }
    } catch (e) {
      //logger.log(e)
    }
}

