import React from "react";

export default function Introduction({ selectedStudentName }) {
  return (
    <h1
      className={`Introduction ${selectedStudentName}`}
    >{`${selectedStudentName}의 소개`}</h1>
  );
}
