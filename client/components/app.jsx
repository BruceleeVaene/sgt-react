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

  postNewGrade(newGrade) {
    fetch('/api/grades', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newGrade)
    })
      .then(response => response.json())
      .then(data => this.setState({ grades: this.state.grades.concat(data) }))
      .catch(error => console.error('Error', error));
  }

  getAverageGrade() {
    const grades = this.state.grades.map(grade => grade.grade);
    let gradeSum = 0;
    for (let i = 0; i < grades.length; i++) {
      gradeSum += grades[i];
    }
    if (grades.length === 0) {
      return 0;
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
