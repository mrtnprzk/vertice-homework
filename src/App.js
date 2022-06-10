import React, { useState, useEffect } from "react";
import axios from "axios";
import Results from "./components/Results";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const fetchDataSearch = async (item) => {
    try {
      const result = await axios.get(
        `https://api.github.com/search/repositories?sort=stars&order=desc&q=${item}&per_page=10`
      );
      result && setSearchResults(result.data.items);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDataSearch();
  }, []);

  return (
    <div className="App">
      <SearchBar fetchDataSearch={fetchDataSearch} />
      <Results results={searchResults} />
    </div>
  );
}

export default App;
