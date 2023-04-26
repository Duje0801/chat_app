function MembersListStart(members, setMembersArray, setAllMembersArray) {
  const updateMembers = members.map((member) => {
    return {
      id: member.id,
      name: member.clientData.name,
      color: Math.floor(Math.random() * 16777215).toString(16),
    };
  });

  setMembersArray(updateMembers);
  setAllMembersArray(updateMembers);
}

export default MembersListStart;
