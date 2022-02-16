<template>
  <section>
    <div class="flex align-items-center justify-content-between">
      <h1>List of Members</h1>
      total: {{ totalProducts }}
    </div>
    <div>
      <input type="search" v-model="searchOrganization" />
      <button @click.prevent="handleClick(searchOrganization)">
        Search: {{ searchOrganization }}
      </button>
    </div>
    <ul class="product-list">
      <li v-for="product in list" :key="product.id">
        <router-link :to="`/detail/${product.login}`">
          <article class="grid product-container card">
            <div class="image">
              <img
                :src="`https://avatars.githubusercontent.com/u/${product.id}`"
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
          </article>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, ref, Ref } from 'vue'
import useProductsApi from '@/composables/productsApi'
import { MemberList } from '@/types'
// import OrganizationButton from './OrganizationButton.vue'
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    list: MemberList[]
  }
}

export default defineComponent({
  async setup() {
    let organization = 'lemoncode'

    const searchOrganization: Ref<string> = ref(organization)

    const { list, totalProducts } = await useProductsApi(
      searchOrganization.value
    )

    const handleClick = (input: string) => {
      searchOrganization.value = input
    }

    return {
      list,
      totalProducts,
      handleClick,
      searchOrganization,
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
.product-container:hover {
  background-color: rgb(198, 247, 244);
  border: 1px solid blue;
}
.avatar {
  max-width: 100px;
}
</style>
