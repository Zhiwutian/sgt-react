import React from 'react';

export default class GradeTable extends React.Component {

  render() {

    return (
      <table className="table col-10 offset-1">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Course</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    );
  }
}
