import { useState } from "react";
import { AiFillWechat } from "react-icons/ai";
import MappingMemberList from "../logic/mappingMemberList";

function Header({ membersArray, myProfile }) {
  const [isOpen, setIsOpen] = useState(false);

  const mappedMembers = MappingMemberList(membersArray, myProfile, true);

  const handleClick = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <div className="header">
      <div className="chatSign">
        <AiFillWechat />
        Chat
      </div>
      <div onClick={handleClick} className="whoIsOnline">
        Who is online?
        {isOpen && <div className="membersList">{mappedMembers}</div>}
      </div>
    </div>
  );
}

export default Header;
