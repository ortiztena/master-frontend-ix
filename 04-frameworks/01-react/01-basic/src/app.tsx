import React from "react";
import { MemberEntity } from "./member-model";
import { MemberTableRow } from "./member-table-row";
import { MemberTable } from "./members-table";
import { handleFetchJson } from "./utils";

export const App = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [inputValue, setInputValue] = React.useState<string>("lemoncode");

  React.useEffect(() => {
    getMembers(inputValue);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    getMembers(inputValue);
  };

  const getMembers = (inputValue) => {
    fetch(`https://api.github.com/orgs/${inputValue}/members`)
      .then(handleFetchJson)
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
