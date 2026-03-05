import { useRef, useState } from "react";

const UseRefHookHome = () => {
  const [name, setName] = useState("Sundari"); // this re-renders the component
  const nameRef = useRef(); // this doesn't re-render
  console.log(nameRef);
  console.log("object".length);

  const updateName = () => {
    // console.log(nameRef.current);
    nameRef.current.innerText = "Zenitsu";
  };

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => setName("Lavan")}>Update Name</button>

      <h1 ref={nameRef}>Nezuko</h1>
      <button onClick={updateName}>Update name</button>
    </div>
  );
};

export default UseRefHookHome;
