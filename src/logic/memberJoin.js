import { v4 as uuidv4 } from "uuid";

function MemberJoin(
  member,
  setMembersArray,
  setMessagesArray,
  setAllMembersArray
) {
  const newMember = {
    id: member.id,
    name: member.clientData.name,
    color: Math.floor(Math.random() * 16777215).toString(16),
  };

  const newMessage = {
    text: `${newMember.name} join!`,
    messageId: uuidv4(),
  };

  //Adding new member to members array
  setMembersArray((array) => {
    return [...array, newMember];
  });

  //Adding new member to members array permanently
  setAllMembersArray((array) => {
    return [...array, newMember];
  });

  //Adding new message (join) to message array
  setMessagesArray((array) => {
    return [...array, newMessage];
  });
}

export default MemberJoin;
