import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { NavLink } from 'react-router-dom';
import Login from './Login';
import Logout from './Logout';
import styles from './Header.module.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const user = this.props.auth0.user;
    return (
      <header>

        <div className={styles.upperRow}>
          <div className={styles.login}>
            {this.props.auth0.isAuthenticated ?
              (<><Logout /> <p>{user.nickname}</p></>) :
              <Login />}
          </div>

          <nav>
            <NavLink to="/" className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
              Home
            </NavLink>
            <NavLink to="/leaderboard" className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
              Leaderboard
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
              About
            </NavLink>
          </nav>

          <div className={styles.profilePic}>
            {this.props.auth0.isAuthenticated && <img width="50px" src={user.picture} alt="profile picture" />}
          </div>
        </div>

        <h1>Battle of the Minds</h1>
      </header>
    );
  }
}

export default withAuth0(Header);
