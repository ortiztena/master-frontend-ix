import Axios from 'axios';
import { Member } from './list.api-model';

const url = `${process.env.BASE_API_URL}/members`
// `https://api.github.com/orgs/${organization}/members`

export const getMemberList = async (
  organization: string
): Promise<Member[]> => {
  const { data } = await Axios.get(
    `${url}/${organization}`
  );
  console.log(data)
  return data;
};
