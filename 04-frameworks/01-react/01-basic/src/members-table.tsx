import React from "react";
import "./members-table.scss";

export const MemberTable: React.FC = (props) => {
  const { children } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Avatar</th>
          <th>Id</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};
