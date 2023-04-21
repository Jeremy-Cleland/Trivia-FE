import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import styles from "./Logout.module.css";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      className={styles.button1}
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
