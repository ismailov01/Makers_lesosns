import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { mainContext } from "../contexts/MainContext";

const AddPage = () => {
  const { addCountry } = useContext(mainContext);
  const history = useHistory();
  const [newCountry, setNewCountry] = useState({
    name: "",
    capital: "",
    population: 0,
  });

  function handleChange(e) {
    let country = {
      ...newCountry,
      [e.target.name]: e.target.value,
    };
    setNewCountry(country);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addCountry(newCountry);
    history.push("/");
  }

  return (
    <div>
      <Link to="/">
        <Button variant="success">На главную</Button>
      </Link>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Country Name</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Enter country name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Country capital</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="capital"
            type="text"
            placeholder="Enter country capital"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Country Poulation</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="population"
            type="number"
            placeholder="Enter country population"
          />
        </Form.Group>
        <Button type="submit">Add</Button>
      </Form>
    </div>
  );
};

export default AddPage;
