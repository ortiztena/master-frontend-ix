<template>
  <section>
    <div class="flex align-items-center justify-content-between">
      <h1>List of Members</h1>
      total: {{ total }}
    </div>
    <div>
      <input type="search" v-model="organization" />
      <button @click.prevent="handleClick">Search: {{ organization }}</button>
    </div>
    <ul class="member-list">
      <li v-for="member in list" :key="member.id">
        <router-link :to="`/detail/${member.login}`">
          <article class="grid member-container card">
            <div class="image">
              <img
                :src="`https://avatars.githubusercontent.com/u/${member.id}`"
                alt=""
                class="avatar"
              />
            </div>
            <div class="member-container__content">
              <h2>
                {{ member.login }}
              </h2>
              <p>
                <span class="grey-text">ID: </span>
                <strong>{{ member.id }}</strong>
              </p>
              <p>
                <span class="grey-text">Node_ID: </span>
                {{ member.node_id }}
              </p>
            </div>
          </article>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useMembersApi from '@/composables/membersApi'
import { MemberList } from '@/types'

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    list: MemberList[]
  }
}

export default defineComponent({
  data() {
    return {
      organization: 'lemoncode', // comentar aquí
      list: [] as MemberList[],
      total: 0,
      newOrg: '',
    }
  },

  async created() {
    const { list, totalMembers } = await useMembersApi(this.organization)
    //  const { list, totalMembers } = await useMembersApi(this.$store.getters.org)
    this.list = list.value
    this.total = totalMembers.value
  },
  methods: {
    async handleClick() {
      const { list, totalMembers } = await useMembersApi(this.organization)
      // const { list, totalMembers } = await useMembersApi(this.$store.getters.org)

      this.list = list.value
      this.total = totalMembers.value
      // this.$store.commit("UPDATE_ORG", this.newOrg)
    },
  },
})
</script>

<style lang="scss" scoped>
.member-list {
  padding: 0;
  li {
    margin-bottom: 2em;
  }
}
.member-container {
  align-items: flex-start;
  grid-template-columns: 210px 1fr 100px;
}
.member-container:hover {
  background-color: rgb(198, 247, 244);
  border: 1px solid blue;
}
.avatar {
  max-width: 100px;
}
</style>
