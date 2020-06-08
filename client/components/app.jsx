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

  render() {
    return (
      <div className='container'>
        <GradeTableHeader />
        <GradeTable grades={this.state.grades} />
      </div>
    );
  }
}

export default App;
