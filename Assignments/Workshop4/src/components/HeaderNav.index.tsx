import { ChangeEvent, useState } from "react";

import { User, GithubUser, SearchResponse } from "../types/types";
import axios from "axios";

interface Props {
  onSearch: (value: SearchResponse) => void;
}

export default function Header({ onSearch }: Props) {
  const [keyword, setKeyword] = useState("");

  async function handleSearch() {
    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${keyword}`
      );

      const data = response.data.items.map((user: GithubUser) => {
        const { login, id, avatar_url, html_url } = user;
        return { login, id, avatar_url, html_url };
      });

      if (response.status === 200) {
        onSearch({
          isFirst: false,
          isLoading: false,
          isError: false,
          users: data,
        });
      } else {
        onSearch({
          isFirst: false,
          isLoading: true,
          isError: false,
          users: [],
        });
      }
    } catch (e) {
      onSearch({
        isFirst: false,
        isLoading: true,
        isError: true,
        users: [],
      });
    }
  }

  return (
    <section className="jumbotron">
      <h3 className="jumbotron-heading">Search Github Users</h3>
      <div>
        <input
          type="text"
          placeholder="Enter the name you search"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setKeyword(e.target.value)
          }
        />
        &nbsp;
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>
    </section>
  );
}
