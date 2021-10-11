import React from "react";
import { MemberEntity } from "./member-model";

interface Props {
  member: MemberEntity;
}

export const MemberTableRow: React.FC<Props> = (props) => {
  const { member } = props;
  return (
    <tr>
      <td>
        <img src={member.avatar_url} />
      </td>
      <td>
        <span>{member.id}</span>
      </td>
      <td>
        <span>{member.login}</span>
      </td>
    </tr>
  );
};
