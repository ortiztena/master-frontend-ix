import { ref, Ref, computed, ComputedRef } from 'vue'
import { MemberList } from '@/types'
import { productService } from '@/services/products'

const useProductsApi = async (): Promise<{
    list: Ref<MemberList[]>
    totalProducts: ComputedRef<number>
}> => {
    const list: Ref<MemberList[]> = ref([])
    list.value = await productService.get()

    const totalProducts = computed(() => {
        return list.value.length
    })
    return { list, totalProducts }
}

export default useProductsApi