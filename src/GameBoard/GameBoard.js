import React from 'react';
import Question from '../Question/Question';
import styles from './Gameboard.module.css';

class GameBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            renderedQuestionIndex: 0,
            checkedAnswer: null,
            correctAnswers: 0,
        };
    }

    // toggleCorrectAnswerIndicator = () => {

    // }

    handleSubmitAnswer = (event) => {
        event.preventDefault();

        if (
            this.state.checkedAnswer ===
            this.props.questions[this.state.renderedQuestionIndex]
                .correct_answer
        ) {
            this.setState({
                correctAnswers: this.state.correctAnswers + 1,
            });
        }

        if (this.state.checkedAnswer) {
            this.setState({
                renderedQuestionIndex: this.state.renderedQuestionIndex + 1,
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
                <h3 className={styles.h3}>Description:</h3>
                <h3 className={styles.h3}>Instructions:</h3>
                {this.state.renderedQuestionIndex ===
                    this.props.questions.length &&
                this.props.questions.length > 0 ? (
                    <p>
                        You got {this.state.correctAnswers} out of{' '}
                        {this.props.questions.length} correct.
                    </p>
                ) : (
                    `SCORE: ${this.state.correctAnswers}`
                )}

                {this.props.questions.map((question, index) => (
                    <Question
                        key={index}
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
