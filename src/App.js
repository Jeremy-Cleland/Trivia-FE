import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FormModal from './FormModal';
import GameBoard from './GameBoard';
import Button from 'react-bootstrap/Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      questionArray: [],
      renderedQuestionIndex: 0,
      correctAnswers: 0
    };
  }

  handleResetQuestionArray = () => {
    this.setState({
      questionArray: []
    });
  };

  handleQuestionAdvance = () => {
    this.setState({
      renderedQuestionIndex: this.state.renderedQuestionIndex + 1
    });
  };

  handleUpdateCorrectAnswers = () => {
    this.setState({
      correctAnswers: this.state.correctAnswers + 1
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
      renderedQuestionIndex: 0,
      correctAnswers: 0,
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
      <>
        <FormModal
          showModal={this.state.showModal}
          handleCloseModal={this.handleCloseModal}
          handleFetchQuestions={this.handleFetchQuestions}
        />
        <GameBoard
          handleResetQuestionArray={this.handleResetQuestionArray}
          questions={this.state.questionArray}
          renderedQuestionIndex={this.state.renderedQuestionIndex}
          handleQuestionAdvance={this.handleQuestionAdvance}
          correctAnswers={this.state.correctAnswers}
          handleUpdateCorrectAnswers={this.handleUpdateCorrectAnswers} />
        <Button
          onClick={this.handleToggleModal}>
          Game Options
        </Button>
      </>
    );
  }
}

export default App;
