import React from "react";
import Advantages from "./Info/Advantages.jsx";
import Introductions from "./Info/Introductions.jsx";
import Search from "./Info/Search.jsx";

export default function StudentInfo({ data, selectedStudent, Advan, Intro }) {
  return (
    <div className="student-info">
      {/* 학생 소개 */}
      <Advantages selectedStudentName={selectedStudent} Advantage={Advan} />

      {/* 학생 장점 */}
      <Introductions
        selectedStudentName={selectedStudent}
        Introduction={Intro}
      />

      <Search data={data} />
    </div>
  );
}
