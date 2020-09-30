import React from 'react';

export default function Grade(props) {
  return (
    <tr>
      <td>{props.studentData.name}</td>
      <td>{props.studentData.course}</td>
      <td>{props.studentData.grade}</td>
      <td><button className="btn btn-danger" onClick={() => props.deleteStudent(props.studentData.id)}>Delete</button></td>
    </tr>
  );
}
