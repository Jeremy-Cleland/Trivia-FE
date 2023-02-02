import React from 'react';
import Question from './Question';

class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedAnswer: null
    };
  }

  handleSubmitAnswer = (event) => {
    event.preventDefault();

    if (this.state.checkedAnswer === this.props.questions[this.props.renderedQuestionIndex].correct_answer) {
      this.props.handleUpdateCorrectAnswers();
    }

    if (this.state.checkedAnswer) {
      this.props.handleQuestionAdvance();
      this.setState({
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
        {this.props.renderedQuestionIndex === this.props.questions.length && this.props.questions.length > 0 ?
          (<p>You got {this.props.correctAnswers} out of {this.props.questions.length} correct.</p>) :
          this.props.questions.length > 0 ?
            <h3>SCORE: {this.props.correctAnswers}</h3> : null}

        {this.props.questions.map((question, index) => (
          <Question key={index}
            question={question}
            handleAnswerChange={this.handleAnswerChange}
            handleSubmitAnswer={this.handleSubmitAnswer}
            currentQuestionIndex={index}
            renderedQuestionIndex={this.props.renderedQuestionIndex}
          />
        ))}
      </>
    );
  }
}

export default GameBoard;
