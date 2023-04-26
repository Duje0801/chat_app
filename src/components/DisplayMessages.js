import { useRef, useEffect } from "react";

function DisplayMessages({ messagesArray, allMembersArray, myProfile }) {
  const ref = useRef();

  useEffect(() => {
    ref.current.scrollIntoView({ behavior: "instant" });
  });

  const displayMessageArray = messagesArray.map((message) => {
    //Finding message author including old messages with logged out authors
    const findMemeber = allMembersArray.find(
      (member) => member.id === message.clientId
    );

    //Check is it someone's message or join/left message
    const bcgColor = findMemeber?.color || `black`;
    const checkName = findMemeber?.name;

    //Setting message author above message text if message have author
    let memberName = ``;
    if (checkName) memberName = `${findMemeber.name}:`;

    //If message is mine
    if (myProfile.id === message.clientId)
      return (
        <li className="myMessage" key={message.messageId}>
          <div className="messageAuthor">{memberName}</div>
          <div>{message.text}</div>
        </li>
      );

    //If message is from someone else
    return (
      <li
        className="message"
        style={{ backgroundColor: `#${bcgColor}` }}
        key={message.messageId}
      >
        <div className="messageAuthor">{memberName}</div>
        <div>{message.text}</div>
      </li>
    );
  });

  return (
    <div className="messagesDisplay">
      <ul>{displayMessageArray}</ul>
      <div ref={ref} />
    </div>
  );
}

export default DisplayMessages;
