import React, { useContext, useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useParams, useHistory } from "react-router-dom";
import { mainContext } from "../contexts/MainContext";

const EditPage = () => {
  const { getCountryToEdit, countryToEdit, saveEditCountry } = useContext(mainContext);
  const params = useParams();
    const history = useHistory()
  useEffect(() => {
    getCountryToEdit(params.id);
  }, []);
  const [editCountry, setEditCountry] = useState(countryToEdit);
  console.log(countryToEdit);
  console.log(editCountry);

  useEffect(() => {
    setEditCountry(countryToEdit);
  }, [countryToEdit]);

  function handleChange(e) {
      let country = {
          ...editCountry,
          [e.target.name]: e.target.value
      }
      setEditCountry(country)
  }
  function handleSubmit(e) {
      e.preventDefault()
      saveEditCountry(editCountry)
      history.push('/')
  }
  return (
    <div>
      <Link to="/">
        <Button variant="success">На главную</Button>
      </Link>
      {
          editCountry ? (
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Change country Name</Form.Label>
              <Form.Control
                value={editCountry.name}
                onChange={handleChange}
                name="name"
                type="text"
                placeholder="Change country name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Change country capital</Form.Label>
              <Form.Control
                value={editCountry.capital}
                onChange={handleChange}
                name="capital"
                type="text"
                placeholder="Change country capital"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Change country Poulation</Form.Label>
              <Form.Control
                value={editCountry.population}
                onChange={handleChange}
                name="population"
                type="number"
                placeholder="Change country population"
              />
            </Form.Group>
            <Button type="submit">Save Changes</Button>
            <Button variant="danger">Delete</Button>

          </Form>
          ) : (
              <h2>Loading...</h2>
          )
      }
     
    </div>
  );
};

export default EditPage;
