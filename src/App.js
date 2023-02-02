import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FormModal from './FormModal';
import GameBoard from './GameBoard';
import Button from 'react-bootstrap/Button';
import Header from './Header';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      questionArray: []
    };
  }

  handleResetQuestionArray = () => {
    this.setState({
      questionArray: []
    });
  };

  handleFetchQuestions = async (event) => {
    event.preventDefault();

    const formOptions = {
      category: event.target.category.value,
      numberOfQuestions: event.target.numberOfQuestions.value,
      difficulty: event.target.difficulty.value
    };

    let url = `https://opentdb.com/api.php?amount=${formOptions.numberOfQuestions}`;

    url = formOptions.category === 'all' ? url : `${url}&category=${formOptions.category}`;

    url = formOptions.difficulty === 'all' ? url : `${url}&difficulty=${formOptions.difficulty}`;

    this.handleResetQuestionArray();

    const response = await axios(url);
    this.setState({
      questionArray: response.data.results,
      showModal: false
    });
  };

  // Form Modal

  handleToggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  handleCloseModal = () => {
    this.setState({
      showModal: false
    });
  };

  render() {
    return (
      <body>
        <FormModal
          showModal={this.state.showModal}
          handleCloseModal={this.handleCloseModal}
          handleFetchQuestions={this.handleFetchQuestions}
        />
        <Header />
        <GameBoard
          handleResetQuestionArray={this.handleResetQuestionArray}
          questions={this.state.questionArray} />
        <Button
          onClick={this.handleToggleModal}>
          Game Options
        </Button>
      </body>
    );
  }
}


export default App;
