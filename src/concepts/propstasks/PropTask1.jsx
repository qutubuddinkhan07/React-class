import Card from "./propcomponents/Card";

const PropTask1 = () => {
  const developers = [
    {
      username: "naruto_uzumaki",
      age: 27,
      email: "naruto@konoha.com",
      profileImg: "https://api.dicebear.com/7.x/adventurer/svg?seed=Naruto",
      phoneNo: "9000000001",
      gender: "Male",
      designation: "Frontend Developer",
    },
    {
      username: "sasuke_uchiha",
      age: 19,
      email: "sasuke@konoha.com",
      profileImg: "https://api.dicebear.com/7.x/adventurer/svg?seed=Sasuke",
      phoneNo: "9000000002",
      gender: "Male",
      designation: "Backend Developer",
    },
  ];
  return (
    <div>
      {developers.map((dev) => {
        return <Card data={dev} />;
      })}
    </div>
  );
};
export default PropTask1;
