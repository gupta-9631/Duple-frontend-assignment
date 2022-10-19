import React from "react";
// import "./home.css";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Card = styled.div`
  border: 1px solid gray;
  width: 80vh;
  height: 450px;
  border-radius: 5px;
  background-color: rgb(156, 156, 193);
`;

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  height: 20px;
  border-radius: 10px;
  margin-top: 5px;
`;
const InfContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 10px;
`;
const DateTime = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-top: 60px;
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
const Temp = styled.div`
  font-size: 120px;
  font-weight: 120;
  color: white;
`;
const Clear = styled.div``;
const ForeCastContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  margin-top: 50px;
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

const Home = () => {
  const onChangeHandler = () => {};

  return (
    <Container>
      <Card className="card">
        <SearchWrapper>
          <Input type="text" onChange={onChangeHandler} />
        </SearchWrapper>
        <InfContainer>
          <DateTime>
            <Date>Tue.09/19/2017</Date>
            <Time>12:27</Time>
          </DateTime>
          <Temp>
            28<span>℃</span>
          </Temp>
          <Clear>Clear</Clear>
        </InfContainer>
        <ForeCastContainer>
          <MaxMin>
            <Max>Max: 28</Max>
            <Min>Min 23</Min>
          </MaxMin>
          <WindSpeed>
            <Wind>Wind: South East</Wind>
            <Speed> 6 mi/h</Speed>
          </WindSpeed>
        </ForeCastContainer>
      </Card>
    </Container>
  );
};

export default Home;
