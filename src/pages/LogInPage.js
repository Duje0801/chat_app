import { useState } from "react";
import RandomNickname from "../logic/possibleNickname";

function LogInPage({ setLogIn, setMyProfile }) {
  const [state, setState] = useState(``);
  const [shortUsername, setShortUsername] = useState(``);

  const selectUsername = (e) => {
    e.preventDefault();
    if (state.length < 3)
      return setShortUsername(`Username must have at least 3 characters`);
    setLogIn(true);
    setMyProfile({ myUsername: state });
  };

  const handleRandomUsername = () => {
    setLogIn(true);
    setMyProfile({ myUsername: RandomNickname() });
  };

  const handleChange = (e) => {
    setState(e.target.value);
  };

  return (
    <>
      <div className="logInTitle">Welcome to Chat!</div>
      <div className="logInBox">
        <form onSubmit={(e) => selectUsername(e)} className="logInForm">
          <input
            onChange={handleChange}
            value={state}
            className="logInFormInput"
            type="text"
            name="username"
            placeholder="Enter your username"
            maxLength="15"
          />
          <button type="submit" className="logInSendBtn">
            Log In
          </button>
        </form>
        <div className="logInShortUsername">{shortUsername}</div>
        <div className="orInLogin">or</div>
        <button
          type="button"
          onClick={handleRandomUsername}
          className="logInRandomBtn"
        >
          Generate random username
        </button>
      </div>
    </>
  );
}

export default LogInPage;
