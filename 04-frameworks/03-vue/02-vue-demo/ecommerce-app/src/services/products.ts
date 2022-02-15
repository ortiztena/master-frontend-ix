import { MemberList } from '@/types'

export const productService = {
  async get(): Promise<MemberList[]> {
    const members = await fetch('/members.mock.json', {
      headers: {
        Accept: 'application/json',
      },
    }).then(
      res => res.json())
    return members
  },
  async getMember(login: MemberList['login']): Promise<MemberList | undefined> {
    if (!login) throw new Error('login is required')
    return this.get().then(list => {
      return list.find((item: MemberList) => String(item.login) === String(login))
    })
  },
}