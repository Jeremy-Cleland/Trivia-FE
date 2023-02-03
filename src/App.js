import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css';
import FormModal from './FormModal/FormModal';
import GameBoard from './GameBoard/GameBoard';
// import Header from './Header/Header';


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
      showModal: false,
    });
  };

  // Form Modal

  handleToggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  handleCloseModal = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    return (
      <div className={styles.main}>
        <div>
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
          <button
            className={styles.startButton}
            onClick={this.handleToggleModal}>
            Game Options
          </button>
        </div>
        <div className={styles.info}>
          <p><span>DESCRIPTION:</span> A game to test the mind! Battle of the Minds is a game designed to provide interacting and engaging intellectual stimulation through testing your knowledge on trivia questions in the category of the user’s choosing. Once the user selects their category, preferred number of questions and difficulty level, the battle begins!</p>
          <p><span>INSTRUCTIONS:</span> Click on the Game Options button to get started, choose your settings, prepare your mind for battle, and unleash the trivia! Use the GitHub login at the top of the screen to have your cumalative score added to our leaderboard.</p>
        </div>
      </div>
    );
  }
}

export default App;
