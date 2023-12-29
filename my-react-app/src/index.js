// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import StudentInfo from './components/StudentInfo.js';
import jsonData from './Data/data.json';

const StudentList = ({ students }) => {
  return (
    <div className="student-List">
      {students.map((student, index) => (
        <div className="student-Name" id={`studentName${index}`} key={index}>
          {student.name}
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const sortedStudents = jsonData.students.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div id="root">
      <StudentList students={sortedStudents} />
      <div className="line"></div>
      <StudentInfo data={jsonData} />
      {/* ... (기존 코드) ... */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
