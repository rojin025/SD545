import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { LoginResponse } from "../../types/types";
import logo from "../images/logo.jpeg";

import "./playlist.css";
import axios from "axios";
export default function Playlist() {
  const [userRes, setUserRes] = useState<LoginResponse | null>(null);
  const [search, setSearch] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Searching :", search);
    const successLogin = await handleSearch(search);
  };

  async function handleSearch(title: string) {
    try {
      console.log("handleSerach userRes ---->  ", userRes);
      const response = await axios.get<LoginResponse>(
        `http://localhost:4000/api/music?search=${title}`,
        {
          headers: {
            Authorization: `Bearer ${userRes?.accessToken}`,
          },
        }
      );

      if (response.status !== 200) {
        throw new Error("Wrong Credential!");
      }

      console.log("Searching Data :", response.data);
    } catch (e) {
      console.log("Error - Searching Song Title", e);
    }
  }

  function handleSearchInput(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  useEffect(() => {
    console.log(sessionStorage);
    const loginRes = JSON.parse(sessionStorage.responseData);
    setUserRes(loginRes);
    console.log("!st time : ", userRes);
  }, []);

  return (
    <div className="border-line">
      <div className="header">
        {/* <img src={logo} alt="music profile" className="logo" /> */}
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

      <br />
      <hr className="breakline" />
      <div>
        <div>{search && "Hello"}</div>
        <h3 className="song-interest">Songs you may interest</h3>
        <table className="table">
          <tr className="th-headers">
            <td className="td-1">Index</td>
            <td className="td-2">Title</td>
            <td className="td-2">Release Date</td>
            <td className="td-1">Action</td>
          </tr>
          <tr className="th">
            <td className="td-1-bold">1</td>
            <td className="td-2">Mocking Bird</td>
            <td className="td-2">1989-1-2</td>
            <td className="td-1">
              <i className="fa-solid fa-plus"></i>
            </td>
          </tr>
          <tr className="th">
            <td className="td-1-bold">2</td>
            <td className="td-2">Smooth Criminal</td>
            <td className="td-2">1999-12-12</td>
            <td className="td-1">
              <i className="fa-solid fa-plus"></i>
            </td>
          </tr>
        </table>
      </div>
      <br />

      <div>
        <h3 className="playlist">Your Playlist</h3>
        <table className="table-playlist">
          <tr className="th-headers-playlist">
            <td className="td-playlist-bold">Index</td>
            <td className="td-22-playlist">Title</td>
            <td className="td-actions">Actions</td>
          </tr>
          <tr className="th-playlist">
            <td className="td-playlist-bold">1</td>
            <td className="td-22-playlist">Mocking Bird</td>
            <td className="td-actions">
              {" "}
              <i className="fa-solid fa-circle-minus"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <i className="fa-solid fa-circle-play"></i>
            </td>
          </tr>
          <tr className="th-playlist">
            <td className="td-playlist-bold">2</td>
            <td className="td-22-playlist">Smooth Criminal</td>
            <td className="td-actions">
              {" "}
              <i className="fa-solid fa-circle-minus"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <i className="fa-solid fa-circle-play"></i>
            </td>
          </tr>
        </table>
      </div>
      <br />
      <div>
        <table className="table-playing">
          <tr className="tr-headers-playing">
            <td>
              <h1>Music Playing......!</h1>
            </td>
          </tr>
        </table>
        <h1>The end!!</h1>
      </div>
    </div>
  );
}
