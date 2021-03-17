import { Button, Text, Content, Container } from "native-base";
import React from "react";
import { StyledButton } from "./styles";

export const timeFilter = (flights, time, set) => {
  return flights.filter(
    (flight) =>
      flight[set] >=
        (time.includes("Morning")
          ? 5
          : time.includes("Afternoon")
          ? 12
          : time.includes("Evening")
          ? 18
          : 0) &&
      flight[set] <
        (time.includes("Evening")
          ? 24
          : time.includes("Afternoon")
          ? 18
          : time.includes("Morning")
          ? 12
          : 24)
  );
};

export const priceFilter = (flights, max, travelClassId) => {
  return flights.filter(
    (flight) =>
      flight[`${travelClassId === 1 ? "economy" : "business"}Price`] < max
  );
};

export const airlineFilter = (flights, airlinese) => {
  return flights.filter((flight) => airlinese.includes(flight.airlines.name));
};

const times = ["Morning", "Afternoon", "Evening"];

export const timeButtons = (filter, handleFilter, set) =>
  times.map((time) => (
    <StyledButton
      variant="contained"
      active={filter[set].includes(time)}
      onPress={() => handleFilter(time, set)}
    >
      <Text>{time}</Text>
    </StyledButton>
  ));
