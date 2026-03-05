import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart, FaHeartBroken } from "react-icons/fa";

const UseStateHookTask1 = () => {
  // const [proposal, setProposal] = useState(null);
  // const acceptProposal = () => {
  //   setProposal("accept");
  // };

  // const rejectProposal = () => {
  //   setProposal("reject");
  // };

  const [proposal, setProposal] = useState(<CiHeart />);
  const acceptProposal = () => {
    setProposal(<FaHeart fill="red" />);
  };

  const rejectProposal = () => {
    setProposal(<FaHeartBroken fill="red" />);
  };

  return (
    <div className="box">
      <div className="icon">
        {/* {proposal === null ? (
          <CiHeart />
        ) : proposal === "accept" ? (
          <FaHeart fill="red" />
        ) : (
          <FaHeartBroken fill="red" />
        )} */}

        {proposal}
      </div>
      <div className="btn">
        <button onClick={acceptProposal}>Accept</button>
        <button onClick={rejectProposal}>Reject</button>
      </div>
    </div>
  );
};

export default UseStateHookTask1;
