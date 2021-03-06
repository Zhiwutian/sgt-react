import React from 'react';

export default class GradeForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      course: '',
      grade: ''
    };

  }

  handleCancel(e) {
    e.preventDefault();
    this.setState({ name: '', course: '', grade: '' });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addStudent(this.state);
    this.setState({ name: '', course: '', grade: '' });
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)} onReset={e => this.handleCancel(e)}>
        <div className="form-group input-group d-flex justify-content-center">
          <div className="input-group-prepend" >
            <i className="input-group-text fab fa-accessible-icon"></i>
          </div>
          <input className="form-control" type="text" name="name" placeholder="Name" value={this.state.name} onChange={e => this.handleChange(e)}/>
        </div>
        <div className="form-group input-group d-flex justify-content-center">
          <div className="input-group-prepend">
            <i className="input-group-text fas fa-table"></i>
          </div>
          <input className="form-control" type="text" name="course" value={this.state.course} placeholder="Course" onChange={e => this.handleChange(e)}/>
        </div>
        <div className="form-group input-group d-flex justify-content-center">
          <div className="input-group-prepend" >
            <i className="input-group-text fas fa-graduation-cap"></i>
          </div>
          <input className="form-control" type="number" name="grade" value={this.state.grade} placeholder="Grade" onChange={e => this.handleChange(e)}/>
        </div>
        <input className="btn btn-success" type="submit" value="Add"/>
        <input className="btn btn-primary" type="reset" value="Cancel"/>
      </form>
    );
  }

}
