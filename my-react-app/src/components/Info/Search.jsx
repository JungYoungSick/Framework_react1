// Search.jsx
import React, { useState } from "react";

export default function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    if (searchTerm.trim() !== "") {
      onSearch(searchTerm);
    } else {
      alert("검색어를 입력해주세요.");
    }
  };

  return (
    <div>
      <input
        type="text"
        id="Search"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button type="button" onClick={handleSearchClick}>
        SHOW
      </button>
    </div>
  );
}
