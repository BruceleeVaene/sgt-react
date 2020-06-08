import React from 'react';

function GradeTableHeader(props) {
  return (
    <header className='d-flex justify-content-between'>
      <h1>Student Grade Table</h1>
      <h3>Average Grade <span className='badge badge-warning'>{props.averageGrade}</span></h3>
    </header>
  );
}

export default GradeTableHeader;
