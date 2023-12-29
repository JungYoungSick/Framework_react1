import React from "react";

export default function StudentList({ students, oneStudentClick }) {
  return (
    <div className="student-List">
      {students.map((student, index) => (
        <div
          className="student-Name"
          id={`studentName${index}`}
          key={index}
          onClick={() => oneStudentClick(student)}
        >
          {student.name}
        </div>
      ))}
    </div>
  );
}
