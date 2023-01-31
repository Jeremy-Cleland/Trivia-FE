import React from 'react';
//import Modal from 'react-bootstrap/Modal';
//import { Container, Form, Button } from 'react-bootstrap';

class GameBoard extends React.Component {

  render() {
    return (
      <div>
        {this.props.questions.map((question) => (<p>
          {question.question}</p>))}
      </div>
    );
  }
}

export default GameBoard;
