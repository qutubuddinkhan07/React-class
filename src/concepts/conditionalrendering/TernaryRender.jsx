const TernaryRender = () => {
  let theme = "dark";
  //   let theme = "light";

  return <div className={`box ${theme === "dark" ? "dark" : "light"}`}></div>;
};

export default TernaryRender;
