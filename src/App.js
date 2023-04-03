import React from "react";
import { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import Navbar from "./components/Navbar";

function App() {
  const [data, setData] = useState({
    celcius: 10,
    name: "London",
    humidity: 10,
    speed: 2,
    image: "https://cdn-icons-png.flaticon.com/512/5903/5903939.png",
  });
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const apiKey = "Enter your api key here";
  const handleClick = () => {
    if (name !== "") {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}&units=metric`;
      axios
        .get(apiUrl)
        .then((res) => {
          let imagePath = "";
          if (res.data.weather[0].main === "Clouds") {
            imagePath =
              "https://cdn-icons-png.flaticon.com/512/5903/5903939.png";
          } else if (res.data.weather[0].main === "Clear") {
            imagePath = "https://cdn-icons-png.flaticon.com/512/136/136723.png";
          } else if (res.data.weather[0].main === "Rain") {
            imagePath =
              "https://cdn-icons-png.flaticon.com/512/4150/4150897.png";
          } else if (res.data.weather[0].main === "Drizzle") {
            imagePath =
              "https://cdn-icons-png.flaticon.com/512/1281/1281211.png";
          } else if (res.data.weather[0].main === "Mist") {
            imagePath =
              "https://cdn-icons-png.flaticon.com/512/4005/4005901.png";
          } else {
            imagePath =
              "https://cdn-icons-png.flaticon.com/512/1779/1779807.png";
          }
          // console.log(res.data);
          setData({
            ...data,
            celcius: res.data.main.temp,
            name: res.data.name,
            humidity: res.data.main.humidity,
            speed: res.data.wind.speed,
            image: imagePath,
          });
          setError("");
        })
        .catch((err) => {
          if (err.response.status === 404) {
            setError("Invalid City Name");
          } else {
            setError("");
          }
          console.log(err);
        });
    }
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <CurrentWeather
                data={data}
                error={error}
                setName={setName}
                handleClick={handleClick}
              />
            }
          />
          <Route
            path="/forcast"
            element={<Forecast city={data.name} apiKey={apiKey} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
