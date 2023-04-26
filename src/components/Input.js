import { useState } from "react";

function Input({ drone }) {
  const [state, setState] = useState(``);

  const publishMessage = (e) => {
    e.preventDefault();
    if (!state) return;
    drone.publish({
      room: "observable-room-algebra",
      message: { message: state },
    });
    setState(``);
  };

  const handleChange = (e) => {
    setState(e.target.value);
  };

  return (
    <div>
      <form className="newMessageForm" onSubmit={(e) => publishMessage(e)}>
        <input
          onChange={handleChange}
          value={state}
          className="newMessageFormInput"
          type="text"
          name="newMessage"
          placeholder="Type message..."
          maxLength="35"
        />
        <button type="submit" className="newMessageFormBtn">
          Send
        </button>
      </form>
    </div>
  );
}

export default Input;
