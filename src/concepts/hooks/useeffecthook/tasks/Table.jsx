const Table = ({ products, setData }) => {
  const filterData = (id) => {
    setData(products.filter((product) => product.id != id));
  };

  const sortAsc = () => {
    const sortedData = [...products].sort((a, b) =>
      a.title.localeCompare(b.title),
    );
    setData(sortedData);
  };

  const sortDesc = () => {
    const sortedData = [...products].sort((a, b) =>
      b.title.localeCompare(a.title),
    );
    setData(sortedData);
  };

  //   console.log(products);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>
              Title
              <button onClick={() => sortAsc()}>In Ascending Order</button>
              <button onClick={() => sortDesc()}>In Descending Order</button>
            </th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, idx) => {
            return (
              <tr key={idx}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>
                  <img src={product.image} alt={product.title} width={100} />
                </td>
                <td>
                  <button onClick={() => filterData(product.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
