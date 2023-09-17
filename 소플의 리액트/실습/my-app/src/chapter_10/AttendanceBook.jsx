import React, { useEffect, useState } from "react";

// const students = [
//   { id: 1, name: "MinKyung" },
//   { id: 2, name: "HanSol" },
//   { id: 3, name: "HyunSoo" },
//   { id: 4, name: "JungGeun" },
// ];

const AttendanceBook = (props) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("/students.json", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        setStudents(result);
        console.log(result);
      });
  }, []);

  return (
    <ul>
      {students.map((student) => {
        return <li>{student.name}</li>;
      })}
    </ul>
  );
};

export default AttendanceBook;
