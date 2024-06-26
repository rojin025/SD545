import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../images/logo.jpeg";

import "./header.css";
import axios from "axios";

export interface MusicList {
  id: string;
  urlPath: string;
  title: string;
  releaseDate: string;
}

interface Props {
  token: string | undefined;
  updateMusicList: (musicList: MusicList[]) => void;
  onHandleIsLoggedin: (condition: boolean) => void;
}

export default function Header({
  token,
  updateMusicList,
  onHandleIsLoggedin,
}: Props) {
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>("");
  const URL = "SOME_URL";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Searching :", search);
    handleSearch(search);
  };

  async function handleSearch(title: string) {
    try {
      const response = await axios.get(`${URL}+${title}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Get Music API :", response);
      if (!response.data.length) {
        throw new Error("Error Seraching data.");
      }

      console.log("Searching Data :", response.data);
      updateMusicList(response.data);
    } catch (e) {
      console.log("Error - Searching Song Title", e);
    }
  }

  function handleSearchInput(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  const handleLogout = () => {
    sessionStorage.clear();
    onHandleIsLoggedin(false);
    navigate("/login");
  };

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
        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}
