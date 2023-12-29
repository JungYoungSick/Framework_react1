// import React, { useState, useEffect } from 'react';

// const StudentList = () => {
//   const [studentData, setStudentData] = useState([]);

//   useEffect(() => {
//     // JSON 데이터 가져오기 (예: fetch 사용)
//     fetch('path/to/Data.json')
//       .then(response => response.json())
//       .then(data => {
//         setStudentData(data);
//       })
//       .catch(error => console.error('Error fetching JSON:', error));
//   }, []); // 두 번째 매개변수로 빈 배열을 전달하여 한 번만 실행되도록 설정

//   return (
//     <div>
//       <h1>Student List</h1>
//       <ul>
//         {studentData.map((student, index) => (
//           <li key={index}>{student.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default StudentList;
