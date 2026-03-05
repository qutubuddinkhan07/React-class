const Card = ({ data }) => {
  let { username } = data;
  return (
    <div>
      <p>{username}</p>
    </div>
  );
};
export default Card;
