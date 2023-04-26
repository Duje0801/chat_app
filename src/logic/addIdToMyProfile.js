function AddIdToMyProfile(setMyProfile, drone) {
  setMyProfile((profile) => {
    return { ...profile, id: drone.clientId };
  });
}

export default AddIdToMyProfile;
