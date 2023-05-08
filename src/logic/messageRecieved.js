import newMessageAudio from "../sounds/newMessage.mp3";

function MessageRecieved(message, setMessagesArray) {
  //Sound effect when new message is recieved
  const soundEffect = new Audio(newMessageAudio);
  soundEffect.play();

  const newMessage = {
    clientId: message.clientId,
    messageId: message.id,
    text: message.data.message,
  };

  setMessagesArray((array) => {
    return [...array, newMessage];
  });
}

export default MessageRecieved;
