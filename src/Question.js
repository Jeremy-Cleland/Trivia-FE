import React from 'react';
//import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class Question extends React.Component {

  render() {
    return (
      <>
        {
          this.props.renderedQuestionIndex === this.props.currentQuestionIndex ?
            <form onSubmit={() => (this.props.handleSubmitAnswer(event))}>
              <h1>{this.props.question.question}</h1>
              <label>
                <input
                  name={this.props.question.question}
                  type="radio"
                  value={this.props.question.correct_answer}
                  onChange={(e) => this.props.handleAnswerChange(e.target.value)} />
                {this.props.question.correct_answer}
              </label>
              {this.props.question.incorrect_answers.map((incorrectAnswer, index) => (
                <label key={index}>
                  <input
                    name={this.props.question.question}
                    type="radio"
                    value={incorrectAnswer}
                    onChange={(e) => this.props.handleAnswerChange(e.target.value)} />
                  {incorrectAnswer}
                </label>
              ))}
              <br />
              <Button type="submit">Submit Answer</Button>
            </form> : null
        }
      </>
    );
  }
}

export default Question;
