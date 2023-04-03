import React from "react";
import "../styles/currentWeather.css";

function CurrentWeather({ data, error, setName, handleClick }) {
  return (
    <div className="container">
      <div className="weather">
        <div className="search">
          <input
            type="text"
            placeholder="Enter City Name"
            onChange={(e) => setName(e.target.value)}
          />
          <button>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3917/3917132.png"
              onClick={handleClick}
              alt=""
            />
          </button>
        </div>
        <div className="error">
          <p>{error}</p>
        </div>
        <div className="winfo">
          <img src={data.image} alt="" className="icon" />
          <h1>{Math.round(data.celcius)}°c</h1>
          <h2>{data.name}</h2>
          <div className="details">
            <div className="col">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2938/2938122.png"
                alt=""
              />
              <div className="humidity">
                <p>{Math.round(data.humidity)}%</p>
                <p>Humidity</p>
              </div>
            </div>
            <div className="col">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1247/1247767.png"
                alt=""
              />
              <div className="wind">
                <p>{Math.round(data.speed)} km/h</p>
                <p>Wind</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
