<template>
  <div class="list-item">
    <div class="list-item__image-wrap">
      <img :src="imagePath" class="list-item__image" alt="">
    </div>
    <div class="list-item__info">
      <div class="list-item__title">
        {{product.name}}
      </div>
      <div v-if="cost > 0" class="list-item__price">
        <span>{{cost}} ₽</span>
      </div>
    </div>

  </div>
</template>
<script>

import {siteUrl} from "~/js/path";

export default {
  props: {
    product: {
      type: Object,
      default: null,
    }
  },

  computed: {
    imagePath(){
      return this.product.image ? siteUrl + '/storage/img/thumb/' + this.product.image : '/images/no-image.svg'
    },

    cost(){
      return this.product.cost
    }
  }
}

</script>
<style>
.list-item {
  min-height: 232px;
  display: flex;
  padding: 1rem;
  background-color: #f8f8f8;
  border-radius: 1rem;
  gap: 1.5rem;
  width: 100%;
}
.list-item__image-wrap{
  width: 100px;
  min-width: 100px;
  height: 100px;
  max-height: 100px;
  background: white;
  border-radius: 1rem;
  padding: 0.25rem;
}
.list-item__image{
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 1rem;
}
.list-item__info{
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
}
.list-item__title{
  flex-grow: 1;
  font-size: 18px;
  font-weight: bold;
}
.list-item__price {
  width: 150px;
  min-width: 150px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}
.list-item__price span {
  display: block;
  background: white;
  padding: 0.25rem;
  white-space: nowrap;
  border-radius: 0.5rem;
}
@media (min-width: 576px) {
  .list-item__image-wrap {
    width: 200px;
    min-width: 200px;
    height: 200px;
    max-height: 200px;
  }
  .list-item__info{
    flex-direction: row;
  }
}

</style>
