import React, { useContext, useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import MediaCard from "../components/MediaCard";
import { clientContext } from "../contexts/ClientContext";
import { useNavigate } from "react-router";
import Pagination from "../components/Pagination";

const MainPage = () => {
  const { getPhones, phones, currentPosts } = useContext(clientContext);
  const navigate = useNavigate();
  const [brandValue, setBrandValue] = useState("");

  let object = new URLSearchParams(window.location.search);
  function filterPhones(key, value) {
    object.set(key, value);
    let newUrl = `${window.location.pathname}?${object.toString()}`;
    navigate(newUrl);
    getPhones();
    setBrandValue(value);
  } 

  useEffect(() => {
    setBrandValue(object.get("brand"));
  }, [object]);

  useEffect(() => {
    getPhones();
  }, []);

  return (
    <>
      <div className="main-page">
        <div className="sidebar">
          <FormControl component="fieldset">
            <FormLabel component="legend">Brand</FormLabel>
            <RadioGroup
              aria-label="gender"
              value={brandValue}
              name="radio-buttons-group"
              onChange={(e) => filterPhones("brand", e.target.value)}
            >
              <FormControlLabel
                value="Xiaomi"
                control={<Radio />}
                label="Xiaomi"
              />
              <FormControlLabel
                value="Techno"
                control={<Radio />}
                label="Techno"
              />
              <FormControlLabel
                value="Samsung"
                control={<Radio />}
                label="Samsung"
              />
              <FormControlLabel
                value="iPhone"
                control={<Radio />}
                label="iPhone"
              />
              <FormControlLabel value="INOI" control={<Radio />} label="INOI" />
              <FormControlLabel
                value="Blackview"
                control={<Radio />}
                label="Blackview"
              />
              <FormControlLabel
                value="Techno"
                control={<Radio />}
                label="Techno"
              />
              <FormControlLabel
                value="Realme"
                control={<Radio />}
                label="Realme"
              />
              <FormControlLabel
                value="OnePlus"
                control={<Radio />}
                label="OnePlus"
              />
            </RadioGroup>
          </FormControl>
        </div>
        {phones ? (
          <>
            <div className="phones">
              {currentPosts.map((phone) => (
                <MediaCard phone={phone} key={phone.id} />
              ))}
            </div>
          </>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>

      <div>
        <Pagination />
      </div>
    </>
  );
};

export default MainPage;
