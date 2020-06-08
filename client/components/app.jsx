import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [] };
    this.gradeTableHeader = this.gradeTableHeader.bind(this);
  }

  componentDidMount() {
    fetch('/api/grades')
      .then(response => response.json())
      .then(grades => this.setState({ grades }))
      .catch(error => console.error(error));
  }

  gradeTableHeader() {
    return (
      <header>
        <h1>Student Grade Table</h1>
      </header>
    );
  }

  createGradeTable() {
    const grades = this.state.grades.map(grade => (
      <tr key={grade.id}>
        <td>{grade.name}</td>
        <td>{grade.course}</td>
        <td>{grade.grade}</td>
      </tr>
    ));
    return grades;
  }

  render() {
    return (
      <div className='container'>
        {this.gradeTableHeader()}
        <table className='table table-bordered table-striped'>
          <thead className='thead-dark'>
            <tr>
              <th>Name</th>
              <th>Course</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {this.createGradeTable()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
