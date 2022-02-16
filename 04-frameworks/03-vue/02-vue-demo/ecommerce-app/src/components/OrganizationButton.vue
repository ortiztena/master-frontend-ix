<template>
  <input type="text" />
  <button class="button" type="button" @click.prevent="addItem()">
    Search Organization
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { MemberList } from '@/types'

export default defineComponent({
  props: {
    product: {
      type: Object as PropType<MemberList>,
      required: true,
    },
  },
  methods: {
    addItem(): void {
      this.$emit('add-item', this.product)
    },
  },
})
</script>
