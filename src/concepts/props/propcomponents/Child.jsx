const Child = (props) => {
  console.log(props);
  // this is printed on the console --> {name: 'Alex', age: 25, email: 'alex123@gmail.com'}

  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.age}</p>
      <h4>{props.email}</h4>
      <hr />
    </div>
  );
};

export default Child;
