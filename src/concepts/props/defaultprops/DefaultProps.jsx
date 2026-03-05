import Card from "./Card";

const DefaultProps = () => {
  const userData = [
    { username: "Naruto", age: 22 },
    { age: 20 },
    { username: "Sasuke" },
  ];

  return (
    <div>
      {userData.map((ele) => {
        return <Card user={ele} />;
      })}
    </div>
  );
};

export default DefaultProps;
