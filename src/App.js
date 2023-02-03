import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css';
import FormModal from './FormModal/FormModal';
import GameBoard from './GameBoard/GameBoard';
import Header from './Header/Header';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            questionArray: [],
        };
    }

    // handleResetQuestionArray = () => {
    //   this.setState({
    //     questionArray: null
    //   });
    // };

    handleFetchQuestions = async () => {
        const url = 'https://opentdb.com/api.php?amount=10';
        const response = await axios(url);
        this.setState({
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
            <div className={styles.app}>
                <Header />
                <div className={styles.main}>
                    <FormModal
                        showModal={this.state.showModal}
                        handleCloseModal={this.handleCloseModal}
                        handleFetchQuestions={this.handleFetchQuestions}
                    />
                    <GameBoard
                        // handleResetQuestionArray={this.handleResetQuestionArray}
                        questions={this.state.questionArray}
                    />
                </div>
                <button
                    className={styles.startButton}
                    onClick={this.handleToggleModal}
                >
                    Game Options
                </button>
            </div>
        );
    }
}

export default App;
