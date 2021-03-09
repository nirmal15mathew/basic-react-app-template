import { useRef } from "react";
import "./LoginForm.css"

function LoginForm(props) {
  // using ref for handling inputs
  const username = useRef(null);
  const password = useRef(null);

  // the function for setting the credentials according to input
  const { setCreds } = props;
  const submitCreds = (e) => {
    // for preventing the page from refreshing
    e.preventDefault();
    let creds = {
      username: username.current.value,
      password: password.current.value,
    };
    setCreds(creds); // send credentials to the parent component
  };
  return (
    <form className="login-form">
      <fieldset className="field username">
        <input type="text" required ref={username} placeholder="Username"></input>
      </fieldset>
      <fieldset className="field password">
        <input type="password" required ref={password} placeholder="Password"></input>
      </fieldset>
      <button onClick={(e) => submitCreds(e)} className="button submit-button">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
