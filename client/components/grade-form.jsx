import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleClick(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.postNewGrade({
      name: this.state.name,
      course: this.state.course,
      grade: this.state.grade
    });
    this.reset();
  }

  reset() {
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  render() {
    return (
      <div>
        <label className='d-flex align-items-center'>
          <i className='fas fa-user col-1 mr-2'></i>
          <input
            id='name'
            className='flex-grow-1'
            type='text'
            placeholder='Name'
            value={this.state.name}
            onClick={this.handleClick}
          />
        </label>

        <label className='d-flex align-items-center'>
          <i className='fas fa-book-open col-1 mr-2'></i>
          <input
            id='course'
            className='flex-grow-1'
            type='text'
            placeholder='Course'
            value={this.state.course}
            onClick={this.handleClick}
          />
        </label>

        <label className='d-flex align-items-center'>
          <i className='fas fa-edit col-1 mr-2'></i>
          <input
            id='grade'
            className='flex-grow-1'
            type='number'
            placeholder='Grade'
            value={this.state.grade}
            onClick={this.handleClick}
          />
        </label>

        <div className='text-right'>
          <input
            type='submit'
            value='Add'
            className='mr-2'
            onClick={this.handleSubmit}
          />
          <input
            type='reset'
            value='Cancel'
            onClick={this.reset}
          />
        </div>
      </div>
    );
  }
}

export default GradeForm;
