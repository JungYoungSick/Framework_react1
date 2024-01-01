// app.jsx
import React, { useState } from "react";
import Advantages from "./Advantages"; // Advantages 컴포넌트 파일 경로에 따라 수정
import Introduction from "./Introduction"; // Introduction 컴포넌트 파일 경로에 따라 수정
import Search from "./Info/Search"; // Search 컴포넌트 파일 경로에 따라 수정

const App = () => {
  const [firstName, setFirstName] = useState("Advantages");
  const [lastName, setLastName] = useState("Introduction");

  const handleNameChange = (newFirstName, newLastName) => {
    setFirstName(newFirstName);
    setLastName(newLastName);
  };

  return (
    <div>
      <h1>
        {firstName} {lastName}
      </h1>
      <Search onNameChange={handleNameChange} />
      {/* 나머지 컴포넌트 및 내용 추가 */}
      <Advantages />
      <Introduction />
    </div>
  );
};

export default App;
