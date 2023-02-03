import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
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
        <div className='auth-buttons'>
          {this.props.auth0.isAuthenticated ? (
            <>
              <Logout /> <p>{user.nickname}</p>
            </>
          ) : (
            <Login className={styles.Login} />
          )}
        </div>
        <div className='user-info'>
          {this.props.auth0.isAuthenticated && (
            <img
              classname={styles.userImg}
              src={user.picture}
              alt='profile picture'
            />
          )}
        </div>
        <div></div>
      </header>
    );
  }
}

export default withAuth0(Header);
