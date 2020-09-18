import React from 'react';

export default function Grade(props) {
  return (
    <tr>
      <td>{props.studentData.name}</td>
      <td>{props.studentData.course}</td>
      <td>{props.studentData.grade}</td>
    </tr>
  );
}
