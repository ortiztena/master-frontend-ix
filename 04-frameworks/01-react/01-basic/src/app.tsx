import React from "react";
import { MemberEntity } from "./member-model";
import { MemberTableRow } from "./member-table-row";
import { MemberTable } from "./members-table";

export const App = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [inputValue, setInputValue] = React.useState("lemoncode");

  const handleSubmit = (event) => {
    event.preventDefault();
    getMembers(inputValue);
  };

  React.useEffect(() => {
    getMembers(inputValue);
  }, []);

  const getMembers = (inputValue) => {
    fetch(`https://api.github.com/orgs/${inputValue}/members`)
      .then((response) => response.json())
      .then(setMembers);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Enter organization name:
          <input
            type="text"
            value={inputValue}
            onChange={(e) => {
              e.preventDefault();
              setInputValue(e.target.value);
            }}
          />
        </label>
        <input type="submit" />
      </form>
      <MemberTable>
        {members.map((member) => (
          <MemberTableRow key={member.id} member={member} />
        ))}
      </MemberTable>
    </>
  );
};
