import axios from "axios";
import React, { useReducer } from "react";
import { API } from "../helpers/const";
//! Хранилище создаётся с помощью хука createContext.Хранилище нужно обязательно экспортировать
export const mainContext = React.createContext();

const INIT_STATE = {
  products: null,
  productToEdit: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_PRODUCT_TO_EDIT": {
      return { ...state, productToEdit: action.payload };
    }
    default:
      return state;
  }
};
//! отсюда идёт провайдер
const MainContextProvider = (props) => {
  //! useReducer = это хук, который принимает в себе "reducer" и "INIT_STATE". Возвращает массив с состояием (хранилище) и функцией
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getProducts = async () => {
    try {
      const response = await axios(API);
      let action = {
        type: "GET_PRODUCTS",
        payload: response.data, //! Данные которые нужно добавить в хранилище
      };
      dispatch(action); //! dispatch вызывает reducer
    } catch (e) {
      console.log(e);
    }
  };

  const createProduct = async (product) => {
    try {
      const response = await axios.post(API, product);
      getProducts();
    } catch (e) {
      console.log(e);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await axios.delete(`${API}/${id}`);
      console.log(response);
      getProducts();
    } catch (e) {
      console.log(e);
    }
  };

  //! Функция, чтобы стянуть данные для редактирования

  const getProductToEdit = async (id) => {
    try {
      const response = await axios(`${API}/${id}`);
      let action = {
        type: "GET_PRODUCT_TO_EDIT",
        payload: response.data,
      };
      dispatch(action);
    } catch (e) {
      console.log(e);
      //! First metod
      let action = {
        type: "GET_PRODUCT_TO_EDIT",
        payload: "Error",
      };
      dispatch(action)
    }
  };

  //! Функция чтобы сохранить данные на сервере

  const saveEditedProduct = async (editedProduct) => {
    try {
      const response = await axios.patch(
        `${API}/${editedProduct.id}`,
        editedProduct
      );
      getProducts();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <mainContext.Provider
      value={{
        getProducts: getProducts,
        createProduct: createProduct,
        deleteProduct: deleteProduct,
        getProductToEdit: getProductToEdit,
        saveEditedProduct: saveEditedProduct,
        products: state.products,
        productToEdit: state.productToEdit,
      }}
    >
      {props.children}
    </mainContext.Provider>
  );
};

export default MainContextProvider;
