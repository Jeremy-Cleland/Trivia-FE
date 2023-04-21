import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import styles from "./Login.module.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <button className={styles.button1} onClick={() => loginWithRedirect()}>
        Log In
      </button>
    </>
  );
};

export default LoginButton;
