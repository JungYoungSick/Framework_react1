import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [searchedStudent, setSearchedStudent] = useState("");

  const handleSearch = () => {
    // 검색 로직 추가 (프롬프트 등)
    const studentName = prompt("Enter student name:");
    setSearchedStudent(studentName);
    onSearch(studentName); // 검색된 학생의 이름을 부모 컴포넌트에 전달
  };

  return (
    <div>
      <input type="text" id="search" value={searchedStudent} />
      <button type="button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Search;
