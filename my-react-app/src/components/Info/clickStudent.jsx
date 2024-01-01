import React, { useState } from "react";

export default function clickStudent({ students }) {
  const [selectedText, setSelectedText] = useState(null);

  const handleStudentClick = (name) => {
    setSelectedText(name);
  };

  return (
    <div className="student-List">
      {students.map((student, index) => (
        <div
          className={`student-Name ${
            selectedText === student.name ? "selected" : ""
          }`}
          key={index}
          onClick={() => handleStudentClick(student.name)}
        >
          {student.name}
        </div>
      ))}
    </div>
  );
}
