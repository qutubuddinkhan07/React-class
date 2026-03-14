import { useReducer } from "react";

const UseReducerForm = () => {
  const initialForm = {
    username: "",
    password: "",
    email: "",
  };

  const formreducer = (state, action) => {
    //step 3
    switch (action.type) {
      case "update": {
        return { ...state, ...action.payload };
      }

      case "submit": {
        // write the logic to send the data to backend
        console.log("final data");
        console.log(action.payload);
      }
      case "clear": {
        return initialForm;
      }

      default:
        return state;
    }
  };

  const [formData, dispatch] = useReducer(formreducer, initialForm); //step 1
  const handleInput = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "update", payload: { [name]: value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "submit", payload: formData });
    dispatch({ type: "clear" });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter username"
          onChange={handleInput}
          value={formData.username}
        />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter username"
          onChange={handleInput}
          value={formData.email}
        />
        <input
          type="text"
          name="age"
          id="age"
          placeholder="Enter username"
          onChange={handleInput}
          value={formData.age}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UseReducerForm;
