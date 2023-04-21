import React from "react";
import axios from "axios";
import styles from "./Leaderboard.module.css";

class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    this.getLeaderboardUsers();
  }

  getLeaderboardUsers = async () => {
    const users = await axios(`${process.env.REACT_APP_SERVER}users`);
    users.data.sort((a, b) => b.score - a.score);
    this.setState({
      users: users.data,
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <h1>Leaderboard</h1>
        {this.state.users.map((user) => (
          <div key={user._id} className={styles.userDiv}>
            <img className={styles.userPic} src={user.picture} alt="user pic" />
            <h3 className={styles.userName}>{user._id}</h3>
            <p className={styles.userScore}>{user.score}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Leaderboard;
