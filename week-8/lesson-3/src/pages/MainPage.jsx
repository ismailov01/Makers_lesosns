import React, { useContext, useEffect } from "react";
import MyCard from "../components/MyCard";
import { mainContext } from "../contexts/MainContext";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainPage = () => {
  const { getCountries, countries } = useContext(mainContext);
  useEffect(() => {
    getCountries();
  }, []);
  console.log(countries);
  return (
    <div className="container">
      <Link to="/add">
      <Button>Добавить страну</Button>
      </Link>
      <div className="d-flex justify-content-between flex-wrap">
        {countries.map((item) => (
          <MyCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
