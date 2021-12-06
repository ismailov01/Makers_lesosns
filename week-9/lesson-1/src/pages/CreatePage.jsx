import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { mainContext } from "../context/MainContext";

const CreatePage = () => {
  const [product, setProduct] = useState({
    art: "",
    price: 0,
    size: "",
    color: "",
    type: "",
  });

  //! useContext возвращает объект хранилища. Принимает то хранилище, откуда нужно взять данные
  const data = useContext(mainContext);
  const {createProduct} = data
  //! useHistory - это хук который возвращает объект с различными методами (push, goBack)
  const history = useHistory()

  const handleChange = (e) => {
    // console.log(e.target.name, "name");
    // console.log(e.target.value, "value");
    let object = {
      ...product,
      [e.target.name]: e.target.value,
    };
    setProduct(object);
  };
  const handleClick = () => {
    createProduct(product);
    history.push("/")
  };

  return (
    <div>
      Create Page
      <div>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Enter art.number"
          name="art"
        />
        <input
          onChange={handleChange}
          type="text"
          placeholder="Enter price"
          name="price"
        />
        <select onChange={handleChange} name="size">
          <option value="">Выберите размер</option>
          <option value="s">S</option>
          <option value="m">M</option>
          <option value="l">L</option>
          <option value="xl">XL</option>
          <option value="xxl">XXL</option>
        </select>
        <select onChange={handleChange} name="color">
          <option value="">Выберите цвет</option>
          <option value="black">Черный</option>
          <option value="white">Белый</option>
          <option value="pink">Розовый</option>
          <option value="red">Красный</option>
        </select>
        <select onChange={handleChange} name="type">
          <option value="">Выберите тип</option>
          <option value="evening">Вечернее</option>
          <option value="wedding">Свадебное</option>
          <option value="casual">Повседневное</option>
        </select>
        <button onClick={handleClick}>Create</button>
      </div>
    </div>
  );
};

export default CreatePage;
