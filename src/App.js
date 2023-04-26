import { useEffect, useState } from "react";
import LogInPage from "./pages/LogInPage";
import ChatPage from "./pages/ChatPage";
import MembersListStart from "./logic/membersListStart";
import MemberJoin from "./logic/memberJoin";
import MemberLeave from "./logic/memberLeave";
import MessageRecieved from "./logic/messageRecieved";
import AddIdToMyProfile from "./logic/addIdToMyProfile";

function App() {
  const [drone, setDrone] = useState(null);
  const [logIn, setLogIn] = useState(false);
  const [myProfile, setMyProfile] = useState({});
  const [messagesArray, setMessagesArray] = useState([]);

  // Only online members
  const [membersArray, setMembersArray] = useState([]);
  // All members (including logged out members), reason is when member leave older
  // messages still have their authors displayed on screen
  const [allMembersArray, setAllMembersArray] = useState([]);
  // If app can't connect to Scaledrone
  const [error, setError] = useState(``);

  useEffect(() => {
    if (!logIn) return;

    const droneConnect = new window.Scaledrone("YEhxzsDhKaOMfaSc", {
      data: {
        name: myProfile.myUsername,
        color: "#3b8beb",
      },
    });
    setDrone(droneConnect);
  }, [logIn]);

  useEffect(() => {
    if (!drone) return;

    drone.on("open", (error) => {
      // Connection has been opened if no error
    });

    drone.on("error", (error) => {
      // An error has occurred with the connection
      setError(`Error Connecting to Server. Please Try Again`);
    });

    // Connecting to room
    const room = drone.subscribe("observable-room-algebra");

    room.on("open", (error) => {
      if (error) {
        console.error(error);
      }
    });

    room.on("members", function (members) {
      MembersListStart(members, setMembersArray, setAllMembersArray);
      AddIdToMyProfile(setMyProfile, drone);
    });

    room.on("member_join", function (member) {
      MemberJoin(member, setMembersArray, setMessagesArray, setAllMembersArray);
    });

    room.on("member_leave", function (member) {
      MemberLeave(member, setMembersArray, setMessagesArray);
    });

    room.on("message", (message) => {
      MessageRecieved(message, setMessagesArray);
    });
  }, [drone]);

  if (error) return <div className="errorMessage">{error}</div>;

  if (logIn)
    return (
      <div>
        <ChatPage
          messagesArray={messagesArray}
          membersArray={membersArray}
          allMembersArray={allMembersArray}
          myProfile={myProfile}
          drone={drone}
        />
      </div>
    );

  if (!logIn)
    return (
      <div>
        <LogInPage setLogIn={setLogIn} setMyProfile={setMyProfile} />
      </div>
    );
}

export default App;
