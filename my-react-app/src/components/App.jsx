import React, { useState } from "react";
import StudentList from "./StudentList";
import StudentInfo from "./StudentInfo";

export default function App({ jsonData }) {
  const [selectedStudent, setSelectedStudent] = useState(
    jsonData.students.length > 0 ? jsonData.students[0].name : ""
  );

  const sortedStudents = jsonData.students.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const handleStudentClick = (studentName) => {
    setSelectedStudent(studentName);
  };

  // 선택된 학생 정보 가져오기
  const selectedStudentData = jsonData.students.find(
    (student) => student.name === selectedStudent
  );

  return (
    <div id="root">
      <StudentList
        students={sortedStudents}
        onStudentClick={handleStudentClick}
      />
      <div className="line"></div>
      {selectedStudentData && (
        <StudentInfo
          data={jsonData}
          selectedStudent={selectedStudentData.name}
          Advan={selectedStudentData.text1}
          Intro={selectedStudentData.text2}
        />
      )}
    </div>
  );
}
