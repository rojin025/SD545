import { ChangeEvent, FormEvent, useState } from "react";
import logo from "../../images/logo.jpeg";
import "./header.css";
import axios from "axios";
import { LoginResponse } from "../../../types/types";

interface Props {
  token: string | undefined;
}

export default function Header({ token }: Props) {
  const [search, setSearch] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Searching :", search);
    const successLogin = await handleSearch(search);
  };

  async function handleSearch(title: string) {
    try {
      console.log("Header Element token ---->  ", token);
      const response = await axios.get<LoginResponse>(
        `http://localhost:4000/api/music?search=${title}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status !== 200) {
        throw new Error("Error Seraching data.");
      }

      console.log("Searching Data :", response.data);
    } catch (e) {
      console.log("Error - Searching Song Title", e);
    }
  }

  function handleSearchInput(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  return (
    <div>
      <div className="header">
        <img src={logo} alt="music profile" className="logo" />
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search..."
            className="search"
            onChange={handleSearchInput}
          />
        </form>
        <button className="logout">Logout</button>
      </div>
      <div>{search && "Hello"}</div>
    </div>
  );
}
