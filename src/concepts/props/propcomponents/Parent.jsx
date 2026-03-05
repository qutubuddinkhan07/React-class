import Child from "./Child";

const Parent = () => {
  let username = "Alex";

  return (
    <div id="parent" className="parent">
      <Child name={username} age={25} email="alex123@gmail.com" />
      <Child name="subhasis" age={90} email="subhasis123@gmail.com" />
    </div>
  );
};

export default Parent;
