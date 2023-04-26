import MappingMemberList from "../logic/mappingMemberList";

function DisplayMembers({ membersArray, myProfile }) {
  const displayMembersArray = MappingMemberList(membersArray, myProfile, false);

  return (
    <div className="membersDisplay">
      <div className="onlineText">Online:</div>
      <ul>{displayMembersArray}</ul>
    </div>
  );
}

export default DisplayMembers;
