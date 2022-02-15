<template>
  <section>
    <div class="flex align-items-center justify-content-between">
      <h1>List of Members</h1>
      total: {{ totalProducts }}
    </div>
    <ul class="product-list">
      <li v-for="product in list" :key="product.id">
        <router-link :to="`/detail/${product.login}`">
          <article class="grid product-container card">
            <div class="image">
              <img
                :src="`https://avatars.githubusercontent.com/u/${product.id}?v4`"
                alt=""
                class="avatar"
              />
            </div>
            <div class="product-container__content">
              <h2>
                {{ product.login }}
              </h2>
              <p>
                <span class="grey-text">ID: </span>
                <strong>{{ product.id }}</strong>
              </p>
              <p>
                <span class="grey-text">Node_ID: </span>
                {{ product.node_id }}
              </p>
            </div>
            <div class="flex product-container__aside">
              <AddToCartButton :product="product" @addItem="onAddItem" />
            </div>
          </article>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AddToCartButton from '@/components/AddToCartButton.vue'
import useProductsApi from '@/composables/productsApi'
import { MemberList } from '@/types'
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    list: MemberList[]
  }
}
export default defineComponent({
  components: {
    AddToCartButton,
  },
  async setup() {
    const { list, totalProducts } = await useProductsApi()
    const onAddItem = (product: MemberList) => {
      console.log(product.login)
    }
    return {
      list,
      totalProducts,
      onAddItem,
    }
  },
})
</script>

<style lang="scss" scoped>
.product-list {
  padding: 0;
  li {
    margin-bottom: 2em;
  }
}
.product-container {
  align-items: flex-start;
  grid-template-columns: 210px 1fr 100px;
}
.product-container--has-discount {
  background-color: rgba(yellow, 0.5);
}
.avatar {
  max-width: 100px;
}
</style>
