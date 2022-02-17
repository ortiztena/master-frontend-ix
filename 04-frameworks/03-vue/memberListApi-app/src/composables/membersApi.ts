import { ref, Ref, computed, ComputedRef } from 'vue'
import { MemberList } from '@/types'
import { listService } from '@/services/members'

const useMembersApi = async (organization: string): Promise<{
    list: Ref<MemberList[]>
    totalMembers: ComputedRef<number>
}> => {
    const list: Ref<MemberList[]> = ref([])
    list.value = await listService.get(organization)

    const totalMembers = computed(() => {
        return list.value.length
    })
    return { list, totalMembers }
}

export default useMembersApi