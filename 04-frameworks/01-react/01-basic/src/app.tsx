import React from "react";
import { MemberEntity } from "./member-model";
import { MemberTableRow } from "./member-table-row";
import { MemberTable } from "./members-table";

export const App = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [inputValue, setInputValue] = React.useState("");
  const [filtered, setFiltered] = React.useState<MemberEntity[]>([]);

  React.useEffect(() => {
    fetch("https://api.github.com/orgs/lemoncode/members")
      .then((response) => response.json())
      .then((list) => setMembers(list));
  }, []);

  React.useEffect(() => {
    const filteredList = members.filter((member) =>
      member.login.includes(inputValue)
    );
    setFiltered(filteredList);
  }, [members, inputValue]);

  return (
    <>
      <div>
        Filter :{" "}
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <MemberTable>
        {filtered.map((member) => (
          <MemberTableRow member={member} />
        ))}
      </MemberTable>
    </>
  );
};
