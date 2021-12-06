import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyCard = ({ item }) => {
  console.log(item);
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Страна:{item.name}</Card.Title>
          <Card.Text>
            Столица:{item.capital}
            <br />
            Население:{item.population}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
            <Link to={`/edit/${item.id}`}>
            <Button variant="warning">Edit</Button>
            </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default MyCard;
