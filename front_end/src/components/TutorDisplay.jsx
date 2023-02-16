import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayTemplate from "./DisplayTemplate";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

function TutorDisplay() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("/Tutor/display")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <DisplayContainer>
      <h1 className="listhead"> Teacher List </h1>
      <div>
        <div className="cardbox">
          {data.map((ele, index) => (
            <DisplayTemplate ele={ele} key={index} />
          ))}
        </div>

        <center>
          <Button
            className="btn-danger"
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </Button>
        </center>
      </div>
    </DisplayContainer>
  );
}

const DisplayContainer = styled.div`

  padding: 20px;

  .listhead{
    text-align: center;
    background-color: burlywood;
    padding: 10px;
    border-radius: 10px;
  }

  .cardbox {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  padding: 20px;

  }
`;

export default TutorDisplay;
