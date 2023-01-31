//import './App.css';
import React from 'react';
//import axios from 'axios';
import FormModal from './FormModal';
import GameBoard from './GameBoard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true,
      questionArray: [
        {
          "category": "Entertainment: Film",
          "type": "multiple",
          "difficulty": "medium",
          "question": "Which of the following is NOT a quote from the 1942 film Casablanca? ",
          "correct_answer": "&quot;Frankly, my dear, I don&#039;t give a damn.&quot;",
          "incorrect_answers": [
            "&quot;Here&#039;s lookin&#039; at you, kid.&quot;",
            "&ldquo;Of all the gin joints, in all the towns, in all the world, she walks into mine&hellip;&rdquo;",
            "&quot;Round up the usual suspects.&quot;"

          ]
        }
      ]
    }
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
          questions={this.state.questionArray}/>
        <button onClick={this.handleOpenModal}>
          Game Options
        </button>
      </div >
    );
  }
}


export default App;
