import React from "react";
import { MemberEntity } from "./member-model";
import { MemberTableRow } from "./member-table-row";
import { MemberTable } from "./members-table";
import { handleFetchJson } from "./utils";

export const App = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [inputValue, setInputValue] = React.useState<string>("lemoncode");
  const [inputFilter, setInputFilter] = React.useState<string>("");
  const [filtered, setFiltered] = React.useState<MemberEntity[]>([]);

  React.useEffect(() => {
    const filteredList = members.filter((member) =>
      member.login.includes(inputFilter)
    );
    setFiltered(filteredList);
  }, [members, inputFilter]);

  React.useEffect(() => {
    getMembers(inputValue);
  }, []);

  const inputRef = React.useRef<HTMLInputElement>();

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    getMembers(inputValue);
    setInputFilter(""); // setea el filtro a cero
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
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        </label>
        <input type="submit" />
      </form>
      <form>
        <label>Members filter: </label>
        <input
          value={inputFilter}
          onChange={(e) => setInputFilter(e.target.value)}
        />
      </form>
      <MemberTable>
        {filtered.map((member) => (
          <MemberTableRow key={member.id} member={member} />
        ))}
      </MemberTable>
    </>
  );
};
