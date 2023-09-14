import React from "react";

const student=[
    {
        name: 'hansol',
    },
    {
        name: 'lee',
    },
    {
        name:'sol',
    },
];

function AttendanceBook(props){
    return(
        <ul>
            {student.map((student) => {
                return <li key={student.id}>{student.name}</li>
            })}
        </ul>
    );
}

export default AttendanceBook;