import React from 'react';
import Grade from './grade';

export default function GradeTable(props) {

  if (!props.grades.length) {
    return <h1 className="text-center">No grades available</h1>;
  }

  return (
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Student Name</th>
          <th>Course</th>
          <th>Grade</th>
          <th>Operations</th>
        </tr>
      </thead>
      <tbody>
        {props.grades.map(grade => <Grade key={grade.id} studentData={grade} deleteStudent={props.deleteCallback}/>)}
      </tbody>
    </table>
  );

}
