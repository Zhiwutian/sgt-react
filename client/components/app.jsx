import React from 'react';
import Header from './header';
import GradeTable from './grade-table';
import GradeForm from './grade-form';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      grades: []
    };
    this.addStudentToServer = this.addStudentToServer.bind(this);
  }

  componentDidMount() {
    fetch('/api/grades', { method: 'GET' })
      .then(resp => resp.json())
      .then(resp => this.setState({ grades: resp }));
  }

  addStudentToServer(studentData) {
    const options = {
      method: 'POST',
      body: JSON.stringify(studentData),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('/api/grades', options)
      .then(resp => resp.json())
      .then(resp => {
        const newGrades = this.state.grades.slice(0);
        newGrades.push(resp);
        this.setState({ grades: newGrades });
      });
  }

  getAverageGrade() {
    if (this.state.grades.length) {
      const total = this.state.grades.reduce((gradeTotal, currentGrade) => gradeTotal + parseInt(currentGrade.grade), 0);
      return total / this.state.grades.length;
    } else {
      return 0;
    }

  }

  render() {

    return (
      <div className="container">
        <Header averageGrade={this.getAverageGrade()}/>
        <div className="d-flex row">
          <GradeTable grades={this.state.grades}/>
          <GradeForm addStudent={this.addStudentToServer}/>
        </div>
      </div>
    );
  }
}

export default App;
