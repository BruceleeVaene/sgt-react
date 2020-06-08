import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [] };
  }

  componentDidMount() {
    fetch('/api/grades')
      .then(response => response.json())
      .then(grades => this.setState({ grades }))
      .catch(error => console.error(error));
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
      <table>
        <thead>
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
    );
  }
}

export default App;
