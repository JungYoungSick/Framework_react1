import React from "react";

export default function Advantages({ selectedStudentName }) {
  return (
    <h1
      className={`Introduction ${selectedStudentName}`}
    >{`${selectedStudentName}의 장점`}</h1>
  );
}
