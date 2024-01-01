import React from "react";

export default function Introductions({ selectedStudentName, Introduction }) {
  return (
    <>
      <h2
        className={`Introduction ${selectedStudentName}`}
      >{`${selectedStudentName}의 소개`}</h2>
      <p className={`text2 ${Introduction}`}>{`${Introduction}`}</p>
    </>
  );
}
