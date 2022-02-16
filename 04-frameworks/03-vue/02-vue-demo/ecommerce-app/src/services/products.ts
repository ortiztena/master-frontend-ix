import { MemberList } from '@/types'

export const productService = {
  async get(organization: string): Promise<MemberList[]> {

    return fetch(`https://api.github.com/orgs/${organization}/members`).then((r) => {
      if (!r.ok) {
        alert("Wrong Organization, Try another");
        throw new Error(`HTTP error! status: ${r.status}`);
      } else {
        return r.json();
      }
    })

  },

  async getMember(login: MemberList['login']): Promise<MemberList | undefined> {
    if (!login) throw new Error('login is required')
    return this.get('').then(list => {   //keep an eye here
      return list.find((item: MemberList) => String(item.login) === String(login))
    })
  },
}



