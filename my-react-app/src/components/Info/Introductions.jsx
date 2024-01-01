import React from "react";

export default function Introductions({ selectedStudentName, Introduction }) {
  return (
    <>
      <h1
        className={`Introduction ${selectedStudentName}`}
      >{`${selectedStudentName}의 소개`}</h1>
      <p className={`text2 ${Introduction}`}>{`${Introduction}`}</p>
    </>
  );
}
