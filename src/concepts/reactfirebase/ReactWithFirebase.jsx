import { createdocument, fetchdocuments } from "./firebasecrud";

const ReactWithFirebase = () => {
  const uploadDocs = async () => {
    await createdocument("users", { username: "SAM", age: 20 });
  };

  const fdata = async () => {
    const result = await fetchdocuments("users");
    console.log(result);
  };

  return (
    <div>
      <h1>ReactWithFirebase</h1>
      <div>
        <h2>Add data</h2>
        <button className="border" onClick={uploadDocs}>
          Upload
        </button>
      </div>

      <div>
        <h2>Fetch data</h2>
        <button className="border" onClick={fdata}>
          Fetch
        </button>
      </div>
    </div>
  );
};

export default ReactWithFirebase;
