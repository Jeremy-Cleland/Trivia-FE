//import './App.css';
import React from 'react';
//import axios from 'axios';
import FormModal from './FormModal';
import GameBoard from './GameBoard';
import staticQuestions from './staticData.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true,
      questionArray: staticQuestions.results,
    };
  }

  // Modal

  handleOpenModal = () => {
    this.setState({
      showModal: true
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
        />
        <GameBoard
          questions={this.state.questionArray} />
        <button onClick={this.handleOpenModal}>
          Game Options
        </button>
      </div >
    );
  }
}


export default App;
