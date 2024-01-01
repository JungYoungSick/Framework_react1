import React, { useState } from "react";

export default function Search({ data }) {
  const [inputValue, setInputValue] = useState("");

  // 입력값이 변경될 때 호출되는 핸들러 함수
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // 폼 제출 시 호출되는 핸들러 함수
  const nameSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={nameSubmit}>
      {/* 입력값을 상태로 설정하고 핸들러 함수를 등록 */}
      <input type="text" value={inputValue} onChange={handleInputChange} />
      {/* 제출 버튼 */}
      <button type="submit">SHOW</button>
    </form>
  );
}
