import { useState } from "react";

const ControlledFormHandling = () => {
  const [formData, setFormData] = useState({
    username: "",
  });
  const [error, setError] = useState(null);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError(false);
  };

  const handleForm = (e) => {
    e.preventDefault();

    if (!formData.username.trim() || formData.username.startsWith(" ")) {
      setError(true);
      return;
    }

    // if (!formData.username) {
    //   setError(true);
    // }

    setFormData({
      username: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleInput}
          value={formData.username}
        />
        <br />
        {error ? <p style={{ color: "red" }}>Username is empty!!</p> : null}
        <button onSubmit={handleForm}>Submit</button>
        <hr />
        <h2>{formData.username}</h2>
      </form>
    </div>
  );
};

export default ControlledFormHandling;
