import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: null
    };
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
          />
        </label>

        <label className='d-flex align-items-center'>
          <i className='fas fa-book-open col-1 mr-2'></i>
          <input
            id='course'
            className='flex-grow-1'
            type='text'
            placeholder='Course'
          />
        </label>

        <label className='d-flex align-items-center'>
          <i className='fas fa-edit col-1 mr-2'></i>
          <input
            id='grade'
            className='flex-grow-1'
            type='number'
            placeholder='Grade'
          />
        </label>

        <div className='text-right'>
          <input
            type='submit'
            value='Add'
            className='mr-2'
          />
          <input
            type='reset'
            value='Clear'
          />
        </div>
      </div>
    );
  }
}

export default GradeForm;
