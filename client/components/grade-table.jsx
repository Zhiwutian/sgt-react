import React from 'react';
import Grade from './grade';

export default function GradeTable(props) {

  if (!props.grades.length) {
    return <h1 className="text-center">No grades available</h1>;
  }

  return (
    <table className="table table-striped table-bordered col-10 offset-1">
      <thead>
        <tr>
          <th>Student Name</th>
          <th>Course</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>
        {props.grades.map(grade => <Grade key={grade.id} studentData={grade}/>)}
      </tbody>
    </table>
  );

}
