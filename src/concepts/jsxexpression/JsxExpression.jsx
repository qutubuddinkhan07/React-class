//! jsx expression is used to access the js variables or functions inside the jsx | HTML
//! syntax --> {}
//! Inside the JSX it's not possible to declare a variable
//! Reinitializing a variable is possible
const JsxExpression = () => {
  let obj = {
    username: "sundari",
    age: 11,
    imageurl: "skjfksd",
    email: "abc123@gmail.com",
    phoneno: 1232132312,
    education: "BTech",
    address: {
      state: "Odisha",
      city: "BBSR",
    },
  };

  let arr = ["Akaza", "Rengoku", "Tanjiro", "Shinobu"];

  return (
    <div>
      <h1>Jsx Expression</h1>

      <h1>{arr[0]}</h1>

      {/* {arr.map((user, idx) => {
        return (
          <h1>
            {idx}
            {user}
          </h1>
        );
      })} */}

      {arr.map((ele, idx) => {
        return <h1 key={idx}>{ele}</h1>;
      })}
    </div>
  );
};

export default JsxExpression;
