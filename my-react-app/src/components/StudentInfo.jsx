import React from "react";
import Advantages from "./Info/Advantages.jsx";
import Introduction from "./Info/Introduction.jsx";
import Search from "./Info/Search.jsx";

export default function studentInfo({ data, selectedStudent }) {
  return (
    <div className="student-Info">
      {/* 학생 소개 */}
      <Advantages selectedStudentName={selectedStudent} />
      <p className="student-Text1">{data.text1}</p>
      {/* 학생 장점 */}
      <Introduction selectedStudentName={selectedStudent} />
      <p className="student-Text2">{data.text2}</p>
      <Search data={data} />
    </div>
  );
}
