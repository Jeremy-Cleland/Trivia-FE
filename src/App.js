import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import styles from './App.module.css';
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
        <h1 className={styles.h1}>
          This is App.
        </h1>
        <FormModal
          showModal={this.state.showModal}
          handleCloseModal={this.handleCloseModal}
          handleFetchQuestions={this.handleFetchQuestions}
        />
        <Header />
        <GameBoard
          // handleResetQuestionArray={this.handleResetQuestionArray}
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
