import C1 from "./C1";

const PropsDrilling = () => {
  const data = { username: "John", message: "Nice to meet you" };

  return (
    <div>
      <C1 data={data} />
    </div>
  );
};

export default PropsDrilling;
