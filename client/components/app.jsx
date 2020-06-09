import React from 'react';
import GradeTableHeader from './header';
import GradeTable from './grade-table';
import GradeForm from './grade-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [] };
    this.postNewGrade = this.postNewGrade.bind(this);
    this.deleteAGrade = this.deleteAGrade.bind(this);
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
      .then(data => {
        const grades = Array.from(this.state.grades); // cloning
        grades.push(data);
        this.setState({ grades });
      })
      .catch(error => console.error(error));
  }

  deleteAGrade(event) {
    const id = Number(event.currentTarget.id);
    fetch(`/api/grades/${id}`, { method: 'DELETE' })
      .then(response => response.json())
      .then(() => {
        const grades = this.state.grades.filter(grade => { return grade.id !== id; });
        this.setState({ grades });
      });
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
    const gradeAvg = Number(Math.floor(gradeSum / grades.length));

    return gradeAvg;
  }

  render() {
    return (
      <div className='container'>
        <GradeTableHeader averageGrade={this.getAverageGrade()} />
        <div className='d-flex w-100'>
          <GradeTable grades={this.state.grades} deleteAGrade={this.deleteAGrade}/>
          <GradeForm postNewGrade={this.postNewGrade}/>
        </div>
      </div>
    );
  }
}

export default App;
