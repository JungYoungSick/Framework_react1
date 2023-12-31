import React from "react";

export default function StudentList({ students, onStudentClick }) {
  return (
    <div className="student-List">
      {students.map((student, index) => (
        <div
          className="student-Name"
          id={`studentName${index}`}
          key={index}
          onClick={() => onStudentClick(student.name)}
        >
          {student.name}
        </div>
      ))}
    </div>
  );
}
