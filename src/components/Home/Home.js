import React, { useEffect, useState } from "react";
// import "./home.css";
import styled from "styled-components";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Card = styled.div`
  border: 1px solid gray;
  width: 80vh;
  height: 350px;
  border-radius: 5px;
  box-shadow: 0px 4px 0px 0px rgba(41, 189, 189, 0.63);
  background-color: rgba(23, 46, 93, 255);
`;

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  height: 20px;
  border-radius: 10px;
  margin-top: 10px;
  border: none;
`;
const InfoContainer = styled.div`
  display: flex;
  // justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;
const DateTime = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-top: 20px;
`;
const City = styled.div`
  margin-bottom: 20px;
  color: white;
`;
const Date = styled.div`
  color: white;
  font-size: 25px;
  font-weight: 500;
`;
const Time = styled.div`
  font-size: 60px;
  font-weight: 300;
  margin-top: 20px;
  color: white;
`;
const TempContainer = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
`;
const Temp = styled.div`
  font-size: 120px;
  font-weight: 120;
  color: white;
`;
const Clear = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-left: 70px;
  color: white;
  font-style: italic;
`;
const ForeCastContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  margin-top: 10px;
`;
const MaxMin = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-left: 50px;
  font-size: 25px;
  color: white;
`;
const Max = styled.div``;
const Min = styled.div``;
const WindSpeed = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-right: 45px;
  font-size: 25px;
  color: white;
`;
const Wind = styled.div``;
const Speed = styled.div``;
const Image = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 5px;
`;

const Home = () => {
  const [city, setCity] = useState({
    name: "",
    timeDate: 0,
    time: 0,
    temp: 0,
    weathericon: "",
    minTemp: 0,
    maxTemp: 0,
    windSpeed: 0,
    winDir: "",
    weather_descriptions: "",
  });
  const [search, setSearch] = useState("Mumbai");
  useEffect(() => {
    const fetchApi = () => {
      const url = `http://api.weatherstack.com/forecast?access_key=5a359f40542fa9535ed37141356a77f0&query=${search}`;
      axios.get(url).then((response) => {
        console.log(response.data);
        setCity({
          name: response.data.location.name,
          timeDate: response.data.location.localtime.split(" ")[0],
          time: response.data.location.localtime.split(" ")[1],
          temp: response.data.current.temperature,
          weathericon: response.data.current.weather_icons[0],
          minTemp: response.data.forecast.mintemp,
          maxTemp: response.data.forecast.maxtemp,
          windSpeed: response.data.current.wind_speed,
          winDir: response.data.current.wind_dir,
          weather_descriptions: response.data.current.weather_descriptions[0],
        });
      });
    };
    fetchApi();
  }, [search]);
  const onChangeHandler = (event) => {
    setSearch(event.target.value);
  };

  // console.log(search);

  return (
    <Container>
      <Card className="card">
        <SearchWrapper>
          <Input
            type="text"
            placeholder="Search Location"
            onChange={onChangeHandler}
          />
        </SearchWrapper>
        <InfoContainer>
          <DateTime>
            <City>
              <LocationOnOutlinedIcon style={{ width: 35, height: 35 }} />
              <span>{city.name}</span>
            </City>
            <Date>{city.timeDate}</Date>
            <Time>{city.time}</Time>
          </DateTime>
          <TempContainer>
            <Temp>
              {city.temp}
              <span>°c</span>
            </Temp>
            <Clear>
              <Image src={city.weathericon} />
              <span>{city.weather_descriptions}</span>
            </Clear>
          </TempContainer>
        </InfoContainer>
        <ForeCastContainer>
          <MaxMin>
            <Max>Max: {city.maxTemp}°</Max>
            <Min>Min: {city.minTemp}°</Min>
          </MaxMin>
          <WindSpeed>
            <Wind> Wind: {city.winDir} </Wind>
            <Speed>{city.windSpeed} mi/h</Speed>
          </WindSpeed>
        </ForeCastContainer>
      </Card>
    </Container>
  );
};

export default Home;
