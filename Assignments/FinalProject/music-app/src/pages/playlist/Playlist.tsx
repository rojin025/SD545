import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { LoginResponse } from "../../types/types";
import logo from "../images/logo.jpeg";

import "./playlist.css";
import axios from "axios";

import Header from "./Header/header";
import Musiclist from "./Music-list/musiclist";
import MusicPlayer from "./Music-player/music.player";
import FavoriteMusic from "./Favorites-music/favorite.music";

export default function Playlist() {
  const [userRes, setUserRes] = useState<LoginResponse | null>(null);

  useEffect(() => {
    console.log(sessionStorage);
    const loginRes = JSON.parse(sessionStorage.responseData);
    setUserRes(loginRes);
    console.log("Top Token is : ", userRes?.accessToken);
    console.log("!st time : ", userRes);
  }, []);

  return (
    <div className="border-line">
      <Header token={userRes?.accessToken} />
      <br />
      <hr className="breakline" />
      <br />
      <Musiclist />
      <br />
      <FavoriteMusic />
      <br />
      <MusicPlayer />
    </div>
  );
}
