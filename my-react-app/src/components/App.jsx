import React, { useState } from "react";
import StudentList from "./StudentList";
import StudentInfo from "./StudentInfo";
import Search from "./Info/Search";
import jsonData from "../Data/data.json"; // 데이터 로딩 코드는 이곳에 추가해야 함

export default function App() {
  const [selectedStudent, setSelectedStudent] = useState(
    jsonData.students.length > 0 ? jsonData.students[0].name : ""
  );
  const [searchedStudent, setSearchedStudent] = useState("");

  const handleStudentClick = (studentName) => {
    setSelectedStudent(studentName);
    setSearchedStudent(""); // 학생 이름 클릭 시 검색어 초기화
  };

  const handleSearch = (searchTerm) => {
    // 검색어가 유효한 경우에만 검색어 및 검색된 학생 설정
    if (jsonData.students.some((student) => student.name === searchTerm)) {
      setSearchedStudent(searchTerm);
      setSelectedStudent(""); // 검색 시 선택된 학생 초기화
    } else {
      alert("해당하는 학생을 찾을 수 없습니다.");
    }
  };

  return (
    <div id="root">
      <StudentList
        students={jsonData.students}
        onStudentClick={handleStudentClick}
      />
      <div className="line"></div>
      <StudentInfo
        data={jsonData}
        selectedStudent={selectedStudent || searchedStudent}
      />
      <Search onSearch={handleSearch} />
    </div>
  );
}
