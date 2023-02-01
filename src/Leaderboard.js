import React from 'react';

class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.handleResetQuestionArray();
  // }

  render() {
    return (
      <>
        <p>
          You got {this.props.correctAnswers} out of {this.props.totalAnswers} correct.
        </p>
      </>
    );
  }
}

export default Leaderboard;
