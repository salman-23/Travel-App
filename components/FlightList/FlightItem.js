import React from "react";
import { useDispatch } from "react-redux";
//Styling
import { Text, Right, Button, Body, Left, Icon } from "native-base";
import { ThumbnailStyled, ListItemStyled } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

const FlightItem = ({
  flight,
  selectedFlight,
  handleSelect,
  travelClassId,
}) => {
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
    <TouchableOpacity onPress={() => handleSelect(flight.id)}>
      <ListItemStyled thumbnail selected={selectedFlight == flight.id}>
        <Right>
          <Text>{flight.name}</Text>
          <ThumbnailStyled
            square
            source={{
              uri: flight.airlines.logo,
            }}
          />
        </Right>
        <Left>
          <Body>
            <Text note>
              <Icon type="Feather" name="clock" />
              {` ${stringTime(flight.departureTime)} ${stringTime(
                flight.arrivalTime
              )}`}
            </Text>
            <Text note>
              <Icon type="Feather" name="calendar" />
              {` ${stringDate(flight.departureDate)}`}
            </Text>
            <Text note>
              <Icon type="MaterialCommunityIcons" name="airplane" />
              {` ${flight.origin.airport}-(${flight.origin.code}) to ${flight.destination.airport}-(${flight.destination.code})`}
            </Text>
            <Text note>{flight.airlines.name}</Text>
            <Text>
              {travelClassId === 1
                ? `Economy Price: ${flight.economyPrice} BD per passenger`
                : `Business Price: ${flight.businessPrice} BD per passenger`}
            </Text>
          </Body>
        </Left>
      </ListItemStyled>
    </TouchableOpacity>
  );
};

export default FlightItem;
