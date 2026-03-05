import { useRef } from "react";
import "./userefhook.css";

const UseRefHookTask1 = () => {
  const themeRef = useRef();

  const changeTheme = () => {
    themeRef.current.classList.toggle("dark");
    console.log(themeRef.current.classList.value);
  };

  return (
    <div className="homepage" ref={themeRef}>
      <h1>UseRefHookTask</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a fugit.
        Ex, rerum similique! Tenetur officia voluptatum a quod est, possimus
        dicta doloremque numquam ratione fugit id quasi molestiae ex, error,
        assumenda mollitia in sequi dignissimos. Reprehenderit excepturi
        voluptate id.
      </p>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  );
};

export default UseRefHookTask1;
