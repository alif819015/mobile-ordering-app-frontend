import React, { useState } from "react";
import { SearchButton, SearchContainer, SearchInput } from "./SearchBar.style";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <SearchContainer>
    <SearchInput
      type="text"
      placeholder="Search phoness..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <SearchButton onClick={handleSearch}>Search</SearchButton>
  </SearchContainer>
  );
};

export default SearchBar;
