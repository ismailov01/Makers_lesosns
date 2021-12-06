import { ShoppingCart } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { clientContext } from "../contexts/ClientContext";

const DetailPage = () => {
  const { getDetails, phoneDetails } = useContext(clientContext);
  const params = useParams();
  useEffect(() => {
    getDetails(params.id);
  }, []);
  console.log(phoneDetails);
  return (
    <div>
      {phoneDetails ? (
        <div className="detail-page">
          <div className="detail-image">
            <img src={phoneDetails.image} alt="phone" />
          </div>
          <div>
          <h2>{phoneDetails.name}</h2>
          <p>{phoneDetails.description}</p>
          <Button variant="contained" color="primary">
                Add to cart
          </Button>
          <div>
            <h4>About:</h4>
            <ul className="character">
              <li>
                <strong>Price:</strong>
                <span>{phoneDetails.price}</span>
              </li>
              <li>
                <strong>Color:</strong>
                <span>{phoneDetails.color}</span>
              </li>
              <li>
                <strong>Brand:</strong>
                <span>{phoneDetails.brand}</span>
              </li>
              <li>
                <strong>Moodel:</strong>
                <span>{phoneDetails.model}</span>
              </li>
            </ul>
          </div>
          </div>
          
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default DetailPage;
