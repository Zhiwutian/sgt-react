import React from 'react';
import Header from './header';
import GradeTable from './grade-table';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      grades: []
    };
  }

  componentDidMount() {
    fetch('/api/grades', { method: 'GET' })
      .then(resp => resp.json())
      .then(resp => this.setState({ grades: resp }));
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
      <div>
        <Header averageGrade={this.getAverageGrade()}/>
        <GradeTable grades={this.state.grades}/>
      </div>
    );
  }
}

export default App;
