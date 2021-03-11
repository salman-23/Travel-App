import React from "react";
import { useDispatch } from "react-redux";
//Styling
import {
  ListItem,
  Text,
  Right,
  Button,
  Body,
  Left,
  Icon,
  Thumbnail,
} from "native-base";
import { ThumbnailStyled } from "./styles";

const FlightItem = ({ flight }) => {
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
    <ListItem thumbnail>
      <Right>
        <Text>{flight.name}</Text>
        <ThumbnailStyled
          square
          source={{
            uri: flight.airlines.logo,
          }}
        />
        <Button primary>
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
            <Icon type="feather" name="calendar" />{" "}
            {stringDate(flight.departureDate)} -{" "}
            {stringDate(flight.arrivalDate)}{" "}
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
    </ListItem>
  );
};

export default FlightItem;
