// search.jsx
import React, { useState } from "react";
import studentList from "../studentList"; // studentList 파일 경로에 따라 수정

const Search = ({ onNameChange }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    const searchedStudent = studentList.find((student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (searchedStudent) {
      // 검색된 학생이 있을 경우 Advantages와 Introduction으로 이름 변경
      onNameChange("Advantages", "Introduction");
    } else {
      // 검색된 학생이 없을 경우 알림 창 생성
      alert("값이 없습니다.");
    }
  };

  return (
    <div>
      <h2>학생 검색</h2>
      <input
        type="text"
        placeholder="검색어 입력"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>검색</button>
    </div>
  );
};

export default Search;
