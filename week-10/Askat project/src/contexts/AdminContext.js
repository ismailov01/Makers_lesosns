import axios from "axios";
import React, { useReducer } from "react";
import { API } from "../helpers/const";

export const adminContext = React.createContext();

const INIT_STATE = {
  phones: null,
  phoneToEdit: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PHONES":
      return { ...state, phones: action.payload };
    case "GET_PHONES_TO_EDIT":
      return { ...state, phoneToEdit: action.payload };
    case "CLEAR_STATE":
      return { ...state, phoneToEdit: action.payload };
    default:
      return state;
  }
};

const AdminContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //!CREATE
  const addPhone = async (phone) => {
    try {
      const response = await axios.post(API, phone);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  //! READ
  const getPhones = async () => {
    try {
      const response = await axios(API);
      let action = {
        type: "GET_PHONES",
        payload: response.data,
      };
      dispatch(action);
      getPhones();
    } catch (e) {
      console.log(e);
    }
  };

  //! UPDATE

  //! Нужна чтобы стянуть данные. Данные нужны для отображения в input
  const getPhoneToEdit = async (id) => {
    try {
      const response = await axios(`${API}/${id}`);
      let action = {
        type: "GET_PHONES_TO_EDIT",
        payload: response.data,
      };
      dispatch(action);
    } catch (e) {
      console.log(e);
    }
  };

  const saveEditedPhone = async (editedPhone) => {
    try {
      const response = await axios.patch(
        `${API}/${editedPhone.id}`,
        editedPhone
      );
      getPhones();
      clearState();
    } catch (e) {
      console.log(e);
    }
  };

  const clearState = async () => {
    let action = {
      type: "CLEAR_STATE",
      payload: null,
    };
    dispatch(action);
  };

  //! DELETE
  const deletePhone = async (id) => {
    try {
      const response = await axios.delete(`${API}/${id}`);
      getPhones();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <adminContext.Provider
      value={{
        addPhone: addPhone,
        getPhones: getPhones,
        getPhoneToEdit: getPhoneToEdit,
        saveEditedPhone: saveEditedPhone,
        clearState: clearState,
        deletePhone: deletePhone,
        phones: state.phones,
        phoneToEdit: state.phoneToEdit,
      }}
    >
      {props.children}
    </adminContext.Provider>
  );
};

export default AdminContextProvider;
