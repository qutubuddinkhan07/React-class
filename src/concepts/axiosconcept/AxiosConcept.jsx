import axios from "axios";
import { useEffect, useState } from "react";

const AxiosConcept = () => {
  const [products, setProducts] = useState([]);

  const fdata = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    setProducts(data);
  };

  useEffect(() => {
    fdata();
  }, []);

  return (
    <div>
      <h1>Axios</h1>
      {products.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        products.map((product, idx) => {
          return <h3 key={idx}>{product.title}</h3>;
        })
      )}
    </div>
  );
};

export default AxiosConcept;
