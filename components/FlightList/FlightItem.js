import React from "react";
import { useDispatch } from "react-redux";
//Styling
import { Text, Right, Button, Body, Left, Icon } from "native-base";
import { ThumbnailStyled, ListItemStyled } from "./styles";

const FlightItem = ({ flight, selectedFlight, handleSelect }) => {
  const dispatch = useDispatch();
  const stringTime = (time) => {
    let hrs = Math.floor(time);
    let mins = Math.round((time % 1) * 60);
    return `${hrs > 12 ? hrs - 12 : hrs}:${mins > 9 ? mins : `0${mins}`} ${
      hrs >= 12 ? "PM" : "AM"
    }`;
  };
  const stringDate = (date) => date.split("-").reverse().join("/");
  return (
    <ListItemStyled thumbnail selected={selectedFlight == flight.id}>
      <Right>
        <Text>{flight.name}</Text>
        <ThumbnailStyled
          square
          source={{
            uri: flight.airlines.logo,
          }}
        />
        <Button onPress={() => handleSelect(flight.id)}>
          <Text>Select</Text>
        </Button>
      </Right>
      <Left>
        <Body>
          <Text note>
            <Icon type="Feather" name="clock" />{" "}
            {stringTime(flight.departureTime)} -{" "}
            {stringTime(flight.arrivalTime)}
          </Text>
          <Text note>
            <Icon type="Feather" name="calendar" />{" "}
            {stringDate(flight.departureDate)}
          </Text>
          <Text note>
            <Icon type="MaterialCommunityIcons" name="airplane" />
            {flight.origin.airport}-({flight.origin.code}) to{" "}
            {flight.destination.airport}-({flight.destination.code})
          </Text>
          <Text note>{flight.airlines.name}</Text>
          <Text>Starting From: {flight.economyPrice} BD</Text>
        </Body>
      </Left>
    </ListItemStyled>
  );
};

export default FlightItem;
