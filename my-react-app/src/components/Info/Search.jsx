import React, { useState, useEffect } from "react";

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
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      // 입력한 값과 일치하는 데이터 찾기
      const matchingData = data.find((item) => item.name === inputValue);

      if (matchingData) {
        // 일치하는 데이터가 있을 때
        setSearchResult({
          advantages: matchingData.Advantages,
          introductions: matchingData.Introductions,
        });
        setError(null); // 초기화
      } else {
        // 일치하는 데이터가 없을 때
        setSearchResult(null);
        setError("찾는 값이 없습니다.");
      }
    } catch (error) {
      setError("오류가 있습니다.");
    }
  };

  const AdvantagesComponent = React.lazy(() => import("./Advantages.jsx"));
  const IntroductionsComponent = React.lazy(() =>
    import("./Introductions.jsx")
  );

  return (
    <div>
      <form onSubmit={nameSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>

      {error && <div>{error}</div>}

      {searchResult && (
        <React.Suspense fallback={<div>Loading...</div>}>
          <AdvantagesComponent
            selectedStudentName={inputValue}
            Advantage={searchResult.advantages}
          />
          <IntroductionsComponent
            selectedStudentName={inputValue}
            Introduction={searchResult.introductions}
          />
        </React.Suspense>
      )}
    </div>
  );
}

export default Search;
