import "./formtask.css";
import form_img from "../../../assets/form_task.png";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { FaLightbulb, FaLock, FaUser } from "react-icons/fa";
import { useRef } from "react";
import { toast } from "react-toastify";

const FormTask = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleForm = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    if (!(username && password)) {
      !username
        ? (usernameRef.current.style.outline = "2px solid red")
        : !password
          ? (passwordRef.current.style.outline = "2px solid red")
          : null;

      toast.warn("All fields are required!!", {
        position: "top-right",
      });
      return;
    }

    if (username === "aftab" && password === "123") {
      toast.success("Logged in successfuly", {
        position: "top-right",
      });

      console.log("object");
      const data = { username: username, password: password };

      localStorage.setItem("details", JSON.stringify(data));

      usernameRef.current.value = "";
      passwordRef.current.value = "";
      return;
    }

    // else this will show
    toast.error("Username or password didn't match!!", {
      position: "top-right",
    });
  };

  return (
    <div className="form-container">
      <div className="left-box">
        <h2>Login</h2>
        <p>How I get started with</p>
        <form className="form" onSubmit={handleForm}>
          <div className="textfield">
            <div className="inner-icons">
              <FaUser />
            </div>
            <input type="text" placeholder="Username" ref={usernameRef} />
          </div>
          <div className="textfield">
            <div className="inner-icons">
              <FaLock />
            </div>
            <input type="password" placeholder="Password" ref={passwordRef} />
          </div>
          <button>Login Now</button>
        </form>

        <div className="social-links">
          <p>
            <strong>Login</strong> with Others
          </p>
          <div className="google icon">
            <a href="">
              <FcGoogle /> <span className="para">Login with google</span>
            </a>
          </div>
          <div className="facebook icon">
            <a href="">
              <ImFacebook2 /> <span className="para">Login with facebook</span>
            </a>
          </div>
        </div>
      </div>
      <div className="right-box">
        <div className="stamp">
          <FaLightbulb size={20} />
        </div>
        <img src={form_img} alt="demo" loading="eager" />
      </div>
    </div>
  );
};

export default FormTask;
