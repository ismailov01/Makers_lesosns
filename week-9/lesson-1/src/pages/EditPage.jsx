import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { mainContext } from "../context/MainContext";

const EditPage = () => {
  const data = useContext(mainContext);
  const { getProductToEdit, productToEdit, saveEditedProduct } = data;
  const params = useParams();
  const history = useHistory()
  const [editProduct, setEditProduct] = useState(productToEdit);

  useEffect(() => {
    getProductToEdit(params.id);
  }, []);
  useEffect(() => {
    setEditProduct(productToEdit);
  }, [productToEdit]);

  const handleChange = (event) => {
    let product = {
      //! Создаем копию объекта
      ...editProduct,
      [event.target.name]: event.target.value, //! Перезаписываем свойства
    };
    setEditProduct(product); //! Обновляем состояние
  };
  const handleClick = () => {
      saveEditedProduct(editProduct)
    history.push('/')
  };

  if(editProduct === 'Error'){
      return (
          <div>
              <h2>Product not defined</h2>
              <Link to="/">Go back</Link> 
          </div>
      )
  }

  return (
    <div>
      Edit page
      {editProduct ? (
        <div>
          <input
            value={editProduct.art}
            onChange={handleChange}
            type="text"
            placeholder="Enter art.number"
            name="art"
          />
          <input
            value={editProduct.price}
            onChange={handleChange}
            type="text"
            placeholder="Enter price"
            name="price"
          />
          <select value={editProduct.size} onChange={handleChange} name="size">
            <option value="">Выберите размер</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
            <option value="xxl">XXL</option>
          </select>
          <select
            value={editProduct.color}
            onChange={handleChange}
            name="color"
          >
            <option value="">Выберите цвет</option>
            <option value="black">Черный</option>
            <option value="white">Белый</option>
            <option value="pink">Розовый</option>
            <option value="red">Красный</option>
          </select>
          <select value={editProduct.type} onChange={handleChange} name="type">
            <option value="">Выберите тип</option>
            <option value="evening">Вечернее</option>
            <option value="wedding">Свадебное</option>
            <option value="casual">Повседневное</option>
          </select>
          <button onClick={handleClick}>Save</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default EditPage;
