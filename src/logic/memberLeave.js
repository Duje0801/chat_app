import { v4 as uuidv4 } from "uuid";

function MemberLeave(member, setMembersArray, setMessagesArray) {
  const newMessage = {
    text: `${member.clientData.name} leave!`,
    messageId: uuidv4(),
  };

  setMembersArray((array) => {
    const updateArray = array.filter((m) => {
      if (m.id !== member.id) return m;
    });

    return updateArray;
  });

  setMessagesArray((array) => {
    return [...array, newMessage];
  });
}

export default MemberLeave;
