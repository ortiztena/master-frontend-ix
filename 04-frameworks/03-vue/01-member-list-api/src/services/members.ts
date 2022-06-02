import { MemberList, Member } from '@/types'

export const listService = {
  async get(organization: string): Promise<MemberList[]> {
    return fetch(`https://api.github.com/orgs/${organization}/members`).then(
      (r) => {
        if (!r.ok) {
          alert('Wrong Organization, Try another')
          throw new Error(`HTTP error! status: ${r.status}`)
        } else {
          return r.json()
        }
      }
    )
  },
}

export const memberService = {
  async get(member: string): Promise<Member> {
    return fetch(`https://api.github.com/users/${member}`).then((r) => {
      if (!r.ok) {
        alert('Wrong Member, Try another')
        throw new Error(`HTTP error! status: ${r.status}`)
      } else {
        return r.json()
      }
    })
  },

  async getMember(login: MemberList['login']): Promise<Member | undefined> {
    if (!login) throw new Error('login is required')
    return this.get(login)
  },
}
