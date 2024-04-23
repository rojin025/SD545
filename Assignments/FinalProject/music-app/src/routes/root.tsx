import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/login/Login";
import Playlist from "../pages/playlist/Playlist";
import ErrorPage from "../pages/errorPage/ErrorPage";
import { useState } from "react";
import Home from "../pages/home/Home";

function Root() {
  const [isLoggedin, setIsloggedin] = useState(false);

  function handleIsLoggedin(condition: boolean) {
    setIsloggedin(condition);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login onHandleIsLoggedin={handleIsLoggedin} />}
        />
        <Route
          path="/playlist"
          element={
            <Playlist
              onHandleIsLoggedin={handleIsLoggedin}
              isLoggedin={isLoggedin}
            />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Root;
