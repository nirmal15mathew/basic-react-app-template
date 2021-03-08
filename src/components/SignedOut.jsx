import { useState, useEffect } from "react";
import LoginForm from "./LoginForm";

function SignedOut(props) {
  // the functions for setting the active username and to tell that the user has logged in
  const { setUser, setLogin } = props;
  // supplying the empty strings to declare type
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  useEffect(() => {
    // only for debugging
    if (
      credentials.username === "yourusername" &&
      credentials.password === "yourpassword"
    ) {
      setLogin(true);
      setUser(credentials.username);
    }
  }, [credentials]); // updates when credentials are updated by the LoginForm
  return (
    <>
      <LoginForm setCreds={setCredentials}></LoginForm>
    </>
  );
}

export default SignedOut;
