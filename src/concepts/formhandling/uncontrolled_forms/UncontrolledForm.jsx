import "./uncontrolledform.css";
import { useRef } from "react";
import { toast } from "react-toastify";

const UncontrolledForm = () => {
  const usernameRef = useRef(null);

  const maleRef = useRef(null);
  const femaleRef = useRef(null);
  const othersRef = useRef(null);

  const handleForm = (e) => {
    e.preventDefault();
    // console.log(e);

    const username = usernameRef.current.value;
    const gender = maleRef.current.checked
      ? "male"
      : femaleRef.current.checked
        ? "female"
        : othersRef.current.checked
          ? "others"
          : null;

    // if (!username) {
    //   toast.error("All fields are required!!", { position: "top-center" });
    // }

    // console.log("form submitted");
    // console.log(usernameRef.current.value);

    console.log(gender);
  };

  return (
    <>
      <form onSubmit={handleForm} className="form-uncontrolled">
        <input type="text" placeholder="Enter your name" ref={usernameRef} />
        <br />

        {/* handling radio buttons */}
        <label htmlFor="male">
          <input
            type="radio"
            value={"male"}
            name="gender"
            id="male"
            ref={maleRef}
          />
          Male
        </label>
        <label htmlFor="female">
          <input
            type="radio"
            name="gender"
            id=""
            value={"female"}
            ref={femaleRef}
          />
          Female
        </label>
        <label htmlFor="others">
          <input
            type="radio"
            name="gender"
            id=""
            value={"others"}
            ref={othersRef}
          />
          Others
        </label>
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};

export default UncontrolledForm;
