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

  return (
    <div id="root">
      <StudentList
        students={sortedStudents}
        onStudentClick={handleStudentClick}
      />
      <div className="line"></div>
      <StudentInfo data={jsonData} selectedStudent={selectedStudent} />
    </div>
  );
}
