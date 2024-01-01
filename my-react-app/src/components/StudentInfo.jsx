// StudentInfo.jsx
import React, { useState } from "react";
import Advantages from "./Info/Advantages";
import Introduction from "./Info/Introduction";
import Search from "./Info/Search";

export default function StudentInfo({ data, selectedStudent }) {
  const [searchedStudent, setSearchedStudent] = useState("");

  const handleSearch = (studentName) => {
    setSearchedStudent(studentName);
  };

  return (
    <div className="student-Info">
      {/* 학생 소개 */}
      <Advantages selectedStudentName={selectedStudent || searchedStudent} />
      <p className="student-Text1">{data.text1}</p>

      {/* 학생 장점 */}
      <Introduction selectedStudentName={selectedStudent || searchedStudent} />
      <p className="student-Text2">{data.text2}</p>

      {/* 검색창 */}
      <Search onSearch={handleSearch} data={data} />
    </div>
  );
}
