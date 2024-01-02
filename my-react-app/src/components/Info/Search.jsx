import React, { useState } from "react";
import StudentList from "../StudentList";
import Advantages from "./Advantages";
import Introductions from "./Introductions";

function Search() {
  const [inputValue, setInputValue] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const nameSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("../Data/data.json");

      if (!response.ok) {
        throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
      }

      const data = await response.json();

      // 입력한 값과 일치하는 데이터 찾기
      const matchingData = data.find((item) => item.name === inputValue);

      if (matchingData) {
        // 일치하는 데이터가 있을 때
        setSearchResult(matchingData);
        setError(null); // 초기화
      } else {
        // 일치하는 데이터가 없을 때
        setSearchResult(null);
        setError("찾는 값이 없습니다.");
      }
    } catch (error) {
      console.error("에러 발생:", error);
      setError("오류가 있습니다.");
    }
  };

  return (
    <div>
      <form onSubmit={nameSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>

      {error && <div>{error}</div>}

      {searchResult && (
        <>
          {searchResult.value && (
            <>
              <StudentList students={searchResult.value} />
              <React.Suspense fallback={<div>Loading...</div>}>
                <Advantages
                  selectedStudentName={searchResult.name}
                  Advantage={searchResult.Advantages}
                />
                <Introductions
                  selectedStudentName={searchResult.name}
                  Introduction={searchResult.Introductions}
                />
              </React.Suspense>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Search;
