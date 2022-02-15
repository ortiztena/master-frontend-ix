<template>
  <div class="grid">
    <div>
      <img
        :src="`https://avatars.githubusercontent.com/u/${product.id}?v4`"
        alt=""
      />
    </div>
    <div v-if="product">
      <h1>{{ product.login }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouteLocation } from 'vue-router'
import { MemberList } from '@/types'
import { productService } from '@/services/products'

export default defineComponent({
  components: {},
  data: () => ({
    product: {} as MemberList,
  }),
  computed: {
    login(): string {
      return String((this.$route as RouteLocation).params.id)
    },
  },
  created() {
    productService
      .getMember(this.login)
      .then((product: MemberList | undefined) => {
        if (product) {
          this.product = product
        }
      })
  },
})
</script>
