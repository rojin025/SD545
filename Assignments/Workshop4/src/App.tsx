import Header from "./components/HeaderNav.index";
import Body from "./components/Body.index";
import { useState } from "react";

import { SearchResponse } from "./types/types";

export default function App() {
  const [searchResponse, setSerachRes] = useState<SearchResponse>({
    isFirst: true,
    isLoading: false,
    isError: false,
    users: [],
  });

  return (
    <div id="app">
      <div className="container">
        <Header onSearch={setSerachRes} />
        <Body onSearchResponse={searchResponse} />
      </div>
    </div>
  );
}
