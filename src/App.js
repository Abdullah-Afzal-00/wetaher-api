import React from "react";
import { useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const APIkey = ""; //go get your API Key from "openweather.org" by logging in to it.
  const [data, setData] = useState("");
  const [cityName, setCityName] = useState("");
  const [temprature, setTemprature] = useState("");
  const [info, setInfo] = useState("");
  const getCityName = () => {
    console.log(data);
    setCityName(data);
    setInfo(" has temprature ");
  };
  const getTemprature = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}&units=metric`
      )
      .then((res) => {
        console.log(res);
        setTemprature(res.data.main.temp);
        //console.log(temprature);
      })
      .catch((e) => {
        console.log("Error is Found !!!");
      });
  };
  return (
    <>
      <input
        placeholder="Enter City Name"
        onChange={(event) => setData(event.target.value)}
      ></input>
      <button
        onClick={() => {
          getCityName();
          getTemprature();
        }}
      >
        Show Weather
      </button>
      <div>
        {cityName}
        {info}
        {temprature}
      </div>
    </>
  );
};

export default App;
