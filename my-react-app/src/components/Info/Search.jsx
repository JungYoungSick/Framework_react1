import React, { useState } from "react";

function Search({ jsonData, setSelectedStudent }) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const nameSubmit = (event) => {
    event.preventDefault();

    const matchingStudent = jsonData.students.find(
      (student) => student.name === inputValue
    );

    if (matchingStudent) {
      // 선택된 학생 이름 설정
      setSelectedStudent(matchingStudent.name);
      setError(null);
    } else {
      setError(alert("찾는 학생이 없습니다."));
    }
  };

  return (
    <div>
      <form className="searchForm" onSubmit={nameSubmit}>
        <input
          type="text"
          ID="Search"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit" ID="search-But">
          Show
        </button>
      </form>
      {error && <div>{error}</div>}
    </div>
  );
}

export default Search;
