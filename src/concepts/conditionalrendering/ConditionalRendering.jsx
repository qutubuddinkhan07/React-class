const ConditionalRendering = () => {
  let val = false;
  if (val) {
    return <h1>Hello</h1>;
  } else {
    return <h1>Bye</h1>;
  }
};
export default ConditionalRendering;
