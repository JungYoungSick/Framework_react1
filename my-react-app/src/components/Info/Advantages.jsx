import React from "react";

export default function Advantages({ selectedStudentName, Advantage }) {
  return (
    <>
      <h1
        className={`Advantages ${selectedStudentName}`}
      >{`${selectedStudentName}의 장점`}</h1>
      <p className={`text1 ${Advantage}`}>{`${Advantage}`}</p>
    </>
  );
}
