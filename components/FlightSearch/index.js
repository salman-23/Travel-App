import React from "react";
import { TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
//Styling
import {
  Content,
  Text,
  Icon,
  Form,
  Picker,
  Button,
  CheckBox,
  Body,
  ListItem,
} from "native-base";
import { StyledContainer } from "./styles";
//Components
import DateSelector from "./DatePicker";
import Loading from "../Loading";
import AirportPicker from "./AirportPicker";
import { searchFlight } from "../../store/actions/flightActions";

const FlightSearch = ({ navigation }) => {
  const { destinations, destinationLoading } = useSelector(
    (state) => state.destinationReducer
  );
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({
    departureDate: "",
    passangers: "",
    departureAirport: "",
    arrivalAirport: "",
    roundtrip: false,
  });
  if (destinationLoading) return <Loading />;
  const pickerItems = destinations.map((destination) => (
    <Picker.Item
      label={`${destination.city} (${destination.code} - ${destination.airport})`}
      value={destination.id}
    />
  ));
  const handleSubmit = () => {
    dispatch(searchFlight(filter, navigation));
  };
  return (
    <StyledContainer>
      <Content>
        <Text>
          <Icon type="MaterialIcons" name="flight-takeoff" /> Departure Date
        </Text>
        <DateSelector
          filter={filter}
          setFilter={setFilter}
          type="departureDate"
        />
        <Form>
          <Text>
            <Icon type="MaterialIcons" name="flight-takeoff" /> Departure
            Airport
          </Text>
          <AirportPicker
            filter={filter}
            setFilter={setFilter}
            items={pickerItems}
            type="departureAirport"
          />
          <Text>
            <Icon type="MaterialIcons" name="flight-land" /> Arrival Airport
          </Text>
          <AirportPicker
            filter={filter}
            setFilter={setFilter}
            items={pickerItems}
            type="arrivalAirport"
          />
          <Text>
            <Icon type="Ionicons" name="people" /> Passangers
          </Text>
        </Form>
        <TextInput
          placeholder={"Enter number of passangers"}
          keyboardType="numeric"
          onChangeText={(passangers) => setFilter({ ...filter, passangers })}
          value={filter.passangers}
        />
        <ListItem>
          <CheckBox
            checked={filter.roundtrip}
            onPress={() =>
              setFilter({ ...filter, roundtrip: !filter.roundtrip })
            }
          />
          <Body>
            <Text>Roundtrip</Text>
          </Body>
        </ListItem>
        <Button onPress={handleSubmit}>
          <Text>
            <Icon type="AntDesign" name="search1" /> Search Flights
          </Text>
        </Button>
      </Content>
    </StyledContainer>
  );
};

export default FlightSearch;
