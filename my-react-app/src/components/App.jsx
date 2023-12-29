import React from "react";
import StudentList from "./StudentList";
import StudentInfo from "./StudentInfo";
// import Search from "./Search";

export default function App({ jsonData }) {
  const sortedStudents = jsonData.students.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div id="root">
      <StudentList students={sortedStudents} />
      <div className="line"></div>
      <StudentInfo data={jsonData} />
      {/* <Search></Search> */}
    </div>
  );
}
