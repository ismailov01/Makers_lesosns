import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { mainContext } from "../context/MainContext";

const HomePage = () => {
  const { getProducts, products, deleteProduct } = useContext(mainContext);
  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);
  return (
    <div>
      Home Page
      <Link to="/create">Create Product</Link>
      {products ? (
        products.length ? (
          <table>
            <thead>
              <tr>
                <th>Articul</th>
                <th>Price</th>
                <th>Size</th>
                <th>Type</th>
                <th>Color</th>
                <th>#</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item) => (
                <tr key={item.id}>
                  <td>{item.art}</td>
                  <td>{item.price}$</td>
                  <td>{item.size}</td>
                  <td>{item.type}</td>
                  <td>{item.color}</td>
                  <td>
                      <button onClick={() => deleteProduct(item.id)}>Delete</button>
                  </td>
                  <td>
                      <Link to={`/edit/${item.id}`}>Edit</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h2>Products null</h2>
        )
      ) : (
        <h2>Загрузка...</h2>
      )}
    </div>
  );
};

export default HomePage;
