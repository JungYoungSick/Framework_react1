import React, { useState } from "react";

export default function StudentList({ students, onStudentClick }) {
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleStudentClick = (name) => {
    // 클릭한 학생의 이름을 상태에 저장
    setSelectedStudent(name);

    // 부모 컴포넌트로 클릭 이벤트 전달
    onStudentClick(name);
  };

  return (
    <div className="student-List">
      {students.map((student, index) => (
        <div
          className={`student-Name ${
            selectedStudent === student.name ? "selected" : ""
          }`}
          id={`studentName${index}`}
          key={index}
          onClick={() => handleStudentClick(student.name)}
        >
          {student.name}
        </div>
      ))}
    </div>
  );
}
