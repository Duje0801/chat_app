function MessageRecieved(message, setMessagesArray) {
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
