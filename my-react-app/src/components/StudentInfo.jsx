import React from "react";
import Advantages from "./Info/Advantages.jsx";
import Introduction from "./Info/Introduction.jsx";

export default function studentInfo({ data }) {
  return (
    <div className="student-Info">
      {/* 학생 소개 */}
      <Advantages>{data.introduction}</Advantages>
      <p className="student-Text1">{data.text1}</p>

      {/* 학생 장점 */}
      <Introduction>{data.advantagesTitle}</Introduction>
      <p className="student-Text2">{data.text2}</p>
    </div>
    //   <div>
    //     <from>
    //       <imput type='text' ID=''>Write your name.</imput>
    //       <button type="submit">Show</button>
    //     </from>
    //   </div>
  );
}
