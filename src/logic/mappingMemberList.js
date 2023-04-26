function MappingMemberList(membersArray, myProfile, responsive) {
  return membersArray.map((member, i) => {
    //Class if this is user's profile
    const styleMyMessage = responsive
      ? { backgroundColor: `#3b8beb`, textDecoration: `underline` }
      : { color: `#3b8beb`, textDecoration: `underline` };

    //Class if this is not user's profile
    const styleMessage = responsive
      ? { backgroundColor: `#${member.color}` }
      : { color: `#${member.color}` };

    //Creating my profile for list
    if (myProfile.id === member.id)
      return (
        <div style={styleMyMessage} key={i}>
          {member.name}*
        </div>
      );

    //Creating other profiles for list
    return (
      <div style={styleMessage} key={i}>
        {member.name}
      </div>
    );
  });
}

export default MappingMemberList;
