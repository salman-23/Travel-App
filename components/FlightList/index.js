import React from "react";
import { useSelector } from "react-redux";
import { List, Container, Content } from "native-base";
//Components
import Loading from "../Loading";
import FlightItem from "./FlightItem";

const FlightList = () => {
  const { flights, loading } = useSelector((state) => state.flightReducer);

  if (loading) return <Loading />;

  const flightList = flights.map((flight) => <FlightItem flight={flight} />);

  return (
    <Content>
      <Container>
        <List>{flightList}</List>
      </Container>
    </Content>
  );
};

export default FlightList;
