//import logo from './logo.svg';
import SignedOut from "./components/SignedOut";
import SignedIn from "./components/SignedIn";
import "./App.css";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [loginState, setLogin] = useState(false);
  const [currentUser, setUser] = useState(null);
  return (
    <div className="App">
      {loginState && currentUser ? (
        <BrowserRouter>
          <SignedIn user={currentUser} setLogin={setLogin} />
        </BrowserRouter>
      ) : (
        <SignedOut setLogin={setLogin} setUser={setUser} />
      )}
    </div>
  );
}

export default App;
