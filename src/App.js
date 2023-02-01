//import './App.css';
import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormModal from './FormModal';
import GameBoard from './GameBoard';
import Button from 'react-bootstrap/Button';
// import staticQuestions from './staticData.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true,
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
    console.log(response.data.results);
    this.setState({
      questionArray: response.data.results
    });
  };

  // Modal

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
      <div>
        <FormModal
          showModal={this.state.showModal}
          handleCloseModal={this.handleCloseModal}
          handleFetchQuestions={this.handleFetchQuestions}
        />
        <GameBoard
          // handleResetQuestionArray={this.handleResetQuestionArray}
          questions={this.state.questionArray} />
        <Button
          onClick={this.handleToggleModal}>
          Game Options
        </Button>
      </div>
    );
  }
}


export default App;
