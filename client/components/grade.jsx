import React from 'react';

function Grade(props) {
  return (
    <tr key={props.grade.id}>
      <td>{props.grade.name}</td>
      <td>{props.grade.course}</td>
      <td>{props.grade.grade}</td>
      <td>
        <input type='button'
          id={props.grade.id}
          value='DELETE'
          onClick={props.deleteAGrade}
          className='btn btn-danger'/>
      </td>
    </tr>
  );
}

export default Grade;
