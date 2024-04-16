import Header from "./components/HeaderNav.index";
import Body from "./components/Body.index";
import { useState } from "react";

import { User } from "./types/types";

export default function App() {
  const [usersData, setUsersData] = useState<User[]>([]);

  function handleSearch(users: User[]) {
    setUsersData(users);
  }

  return (
    <div id="app">
      <div className="container">
        <Header onSearch={handleSearch} />
        <Body users={usersData} />
      </div>
    </div>
  );
}
