import React from 'react';

export default function Header(props) {
  return (
    <header className="d-flex text-center justify-content-around">
      <h1 className="col-6">Student Grade Table</h1>
      <h3 className="col-6"> Average:<span className="badge badge-secondary">{props.averageGrade}</span></h3>
    </header>
  );
}
