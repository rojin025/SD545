import { ChangeEvent, useState } from "react";

import { User, GithubUser } from "../types/types";

interface Props {
  onSearch: (users: User[]) => void;
}

export default function Header({ onSearch }: Props) {
  const [username, setUsername] = useState("");

  async function handleSearch() {
    const response = await fetch(
      `https://api.github.com/search/users?q=${username}`
    );
    const rawdata = await response.json();
    const data = rawdata.items.map((user: GithubUser) => {
      const { login, id, avatar_url } = user;
      return { login, id, avatar_url };
    });

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    onSearch(data);
  }

  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUsername(value);
  };

  return (
    <section className="jumbotron">
      <h3 className="jumbotron-heading">Search Github Users</h3>
      <div>
        <input
          type="text"
          placeholder="Enter the name you search"
          onChange={changeInput}
        />
        &nbsp;<button onClick={handleSearch}>Search</button>
      </div>
    </section>
  );
}
