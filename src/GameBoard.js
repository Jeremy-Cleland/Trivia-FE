import React from 'react';
import Question from './Question';
//import Modal from 'react-bootstrap/Modal';
//import { Container, Form, Button } from 'react-bootstrap';

class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderedQuestionIndex: 0,
      checkedAnswer: null,
      correctAnswers: 0
    };
  }

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
      <div>
        {this.props.questions.map((question, index) => (
          <Question key={index}
            question={question}
            handleAnswerChange={this.handleAnswerChange}
            handleSubmitAnswer={this.handleSubmitAnswer}
            currentQuestionIndex={index}
            renderedQuestionIndex={this.state.renderedQuestionIndex}
          />
        ))}
        {this.state.correctAnswers}
      </div>
    );
  }
}

export default GameBoard;
