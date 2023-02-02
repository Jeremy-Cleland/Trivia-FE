import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Login from './Login';
import Logout from './Logout';
import './Header.css';
import styles from './Header.module.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const user = this.props.auth0.user;
    return (
      <header>
        <div className="auth-buttons">
          {this.props.auth0.isAuthenticated ?
            (<><Logout /> <p>{user.nickname}</p></>) :
            <Login />}
        </div>
        <h1 className = {styles.h1}>Battle of the Minds</h1>
        <div className="user-info">
          {this.props.auth0.isAuthenticated && <img src={user.picture} alt="profile picture" />}
        </div>
      </header>
    );
  }
}

export default withAuth0(Header);
