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

  render() {
    return (
      <div>
        <Header/>
        <GradeTable/>
      </div>
    );
  }
}

export default App;
