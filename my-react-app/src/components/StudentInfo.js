import React from 'react';

const StudentInfo = ({ data }) => {
  return (
    <div className="student-Info">
      {/* 학생 소개 */}
      <h1 className="Introduction">{data.introduction}</h1>
      <p className="student-Text1">{data.text1}</p>

      {/* 학생 장점 */}
      <h3 className="Advantages">{data.advantagesTitle}</h3>
      <p className="student-Text2">{data.text2}</p>
    </div>
  );
};

export default StudentInfo;
