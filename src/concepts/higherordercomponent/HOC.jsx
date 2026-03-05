import React from "react";
import Bike from "./Bike";
import PetrolPump from "./PetrolPump";

const HOC = () => {
  return (
    <div>
      <PetrolPump>
        <Bike name={"Apache"} />
      </PetrolPump>
      <Bike name={"Splendor"} />
      <PetrolPump>
        <Bike name={"DAICHU"} />
      </PetrolPump>
    </div>
  );
};

export default HOC;

//! petrolpump --> higher order component
//! bike is the argument to pertrol pump
//! <Bike name={"Apache"} /> --> gets some extra features/functionality
