import React from 'react';
import Grade from './grade';

function GradeTable(props) {
  const grades = props.grades.map(grade => {
    return (
      <Grade key={grade.id} grade={grade} deleteAGrade={props.deleteAGrade}/>
    );
  });
  if (grades.length > 0) {
    return (
      <table className='table table-striped table-bordered'>
        <thead className='thead-dark'>
          <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Grade</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {grades}
        </tbody>
      </table>
    );
  } else {
    return (
      <h3>No Grades</h3>
    );
  }
}

export default GradeTable;
