import memberJoinedAudio from "../sounds/memberJoined.mp3";
import { v4 as uuidv4 } from "uuid";

function MemberJoin(
  member,
  setMembersArray,
  setMessagesArray,
  setAllMembersArray
) {
  //Sound effect when new member join chat
  const soundEffect = new Audio(memberJoinedAudio);
  soundEffect.play();

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
