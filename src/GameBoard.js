import React from 'react';
import Leaderboard from './Leaderboard';
import Question from './Question';

class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderedQuestionIndex: 0,
      checkedAnswer: null,
      correctAnswers: 0
    };
  }

  // toggleCorrectAnswerIndicator = () => {

  // }

  handleSubmitAnswer = (event) => {
    event.preventDefault();

    if (this.state.checkedAnswer === this.props.questions[this.state.renderedQuestionIndex].correct_answer) {
      this.setState({
        correctAnswers: this.state.correctAnswers + 1
      });


    }

    if (this.state.checkedAnswer) {
      this.setState({
        renderedQuestionIndex: this.state.renderedQuestionIndex + 1,
        checkedAnswer: null
      });
    }
  };

  handleAnswerChange = (value) => {
    this.setState({
      checkedAnswer: value
    });
  };

  render() {
    return (
      <>
        {this.state.renderedQuestionIndex === this.props.questions.length && this.props.questions.length > 0 ?
          <Leaderboard
            correctAnswers={this.state.correctAnswers}
            totalAnswers={this.props.questions.length}
          // handleResetQuestionArray={this.props.handleResetQuestionArray}
          /> :
          `SCORE: ${this.state.correctAnswers}`}

        {this.props.questions.map((question, index) => (
          <Question key={index}
            question={question}
            handleAnswerChange={this.handleAnswerChange}
            handleSubmitAnswer={this.handleSubmitAnswer}
            currentQuestionIndex={index}
            renderedQuestionIndex={this.state.renderedQuestionIndex}
          />
        ))}
      </>
    );
  }
}

export default GameBoard;
