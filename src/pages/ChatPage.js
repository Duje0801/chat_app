import Header from "../components/Header";
import DisplayMessages from "../components/DisplayMessages";
import DisplayMembers from "../components/DisplayMembers";
import Input from "../components/Input";

function ChatPage({
  messagesArray,
  membersArray,
  allMembersArray,
  myProfile,
  drone,
}) {
  return (
    <div className="app">
      <Header membersArray={membersArray} myProfile={myProfile} />
      <div className="displayApp">
        <DisplayMessages
          messagesArray={messagesArray}
          allMembersArray={allMembersArray}
          myProfile={myProfile}
        />
        <DisplayMembers membersArray={membersArray} myProfile={myProfile} />
      </div>
      <Input drone={drone} />
    </div>
  );
}

export default ChatPage;
