import { ChangeEvent, useState } from "react";
import { LoginResponse } from "../../types/types";
import logo from "../images/logo.jpeg";

import "./playlist.css";
export default function Playlist() {
  const [user, setUser] = useState<LoginResponse | null>(null);
  const [serach, setSearch] = useState<string>("");

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  console.log(sessionStorage);
  const loginRes = JSON.parse(sessionStorage.responseData);

  return (
    <div className="border-line">
      <div className="header">
        {/* <img src={logo} alt="music profile" className="logo" /> */}
        <input
          type="search"
          placeholder="Search..."
          className="search"
          onChange={handleSearch}
        />
        <button className="logout">Logout</button>
      </div>

      <br />
      <hr className="breakline" />
      <div>
        <div>{serach && "Hello"}</div>
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
