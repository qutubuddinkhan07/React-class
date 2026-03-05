import { useEffect, useState } from "react";
import Table from "./Table";
import "./useeffecttask.css";

const UseEffectTask1 = () => {
  const [data, setData] = useState([]);

  const fdata = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  // fdata();

  useEffect(() => {
    fdata();
  }, []);

  //   console.log(data);

  return (
    <div>
      {data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <Table products={data} setData={setData} />
      )}
    </div>
  );
};

export default UseEffectTask1;
