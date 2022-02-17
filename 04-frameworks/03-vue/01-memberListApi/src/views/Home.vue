<template>
  <div class="home">
    <div v-if="error">Error :( {{ error }}</div>
    <Suspense>
      <template #default>
        <MemberList />
      </template>
      <template #loading>
        <div class="loading">Loading...</div>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent, onErrorCaptured, ref, Ref } from 'vue'
import MemberList from '@/components/MemberList.vue'
export default defineComponent({
  name: 'Home',
  components: { MemberList },
  setup() {
    const error: Ref<unknown> = ref()
    onErrorCaptured((err) => {
      console.error(err)
      error.value = err
    })
    return {
      error,
    }
  },
})
</script>
