import React from 'react';
import GradeTableHeader from './header';
import GradeTable from './gradetable';

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

  getAverageGrade() {
    const grades = this.state.grades.map(grade => grade.grade);
    let gradeSum = 0;
    for (let i = 0; i < grades.length; i++) {
      gradeSum += grades[i];
    }
    const gradeAvg = Math.floor(gradeSum / grades.length);
    return gradeAvg;
  }

  render() {
    return (
      <div className='container'>
        <GradeTableHeader averageGrade={this.getAverageGrade()} />
        <GradeTable grades={this.state.grades} />
      </div>
    );
  }
}

export default App;
