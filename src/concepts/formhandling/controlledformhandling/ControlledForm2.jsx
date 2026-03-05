import { useState } from "react";

const ControlledForm2 = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    course: "",
  });

  const { username, password, email, course } = formData;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleForm = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      username: "",
      password: "",
      email: "",
      course: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <div>
          <input
            type="text"
            name="username"
            placeholder="enter username"
            value={username}
            onChange={handleInput}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="enter email"
            value={email}
            onChange={handleInput}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="enter password"
            value={password}
            onChange={handleInput}
          />
        </div>

        <div>
          <label htmlFor="course">Course</label>
          <select
            name="course"
            id="course"
            value={course}
            onChange={handleInput}
          >
            <option value="" selected={!course ? true : false}></option>
            <option value="B.Tech">B.Tech</option>
            <option value="MCA">MCA</option>
            <option value="B.Sc">B.Sc</option>
            <option value="M.Tech">M.Tech</option>
          </select>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ControlledForm2;
