import React from "react";
import Question from "../Question/Question";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";

class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedAnswer: null,
    };
  }

  handleScoreSubmit = async (user) => {
    const savedUser = await axios(
      `http://localhost:3001/users/${user.nickname}`,
    );
    if (!savedUser.data) {
      const submittingUser = {
        _id: user.nickname,
        picture: user.picture,
        score: this.props.correctAnswers,
      };
      await axios.post("http://localhost:3001/users", submittingUser);
    } else {
      savedUser.data.score = +savedUser.data.score + this.props.correctAnswers;
      await axios.put(
        `http://localhost:3001/users/${savedUser.data._id}`,
        savedUser.data,
      );
    }
  };

  handleSubmitAnswer = (event) => {
    event.preventDefault();

    if (
      this.state.checkedAnswer ===
      this.props.questions[this.props.renderedQuestionIndex].correct_answer
    ) {
      this.props.handleUpdateCorrectAnswers();
    }

    if (
      this.props.auth0.isAuthenticated &&
      this.props.renderedQuestionIndex === this.props.questions.length - 1 &&
      this.props.questions.length > 0
    ) {
      const user = this.props.auth0.user;
      this.handleScoreSubmit(user);
    }

    if (this.state.checkedAnswer) {
      this.props.handleQuestionAdvance();
      this.setState({
        checkedAnswer: null,
      });
    }
  };

  handleAnswerChange = (value) => {
    this.setState({
      checkedAnswer: value,
    });
  };

  render() {
    return (
      <>
        {this.props.renderedQuestionIndex === this.props.questions.length &&
        this.props.questions.length > 0 ? (
          <h3>
            You got {this.props.correctAnswers} out of{" "}
            {this.props.questions.length} correct.
          </h3>
        ) : this.props.questions.length > 0 ? (
          <h3>SCORE: {this.props.correctAnswers}</h3>
        ) : null}

        {this.props.questions.map((question, index) => (
          <Question
            key={index}
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

export default withAuth0(GameBoard);
