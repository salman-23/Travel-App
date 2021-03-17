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
import { ButtonTextStyled, StyledContainer, SearchButton } from "./styles";
//Components
import DateSelector from "./DatePicker";
import Loading from "../Loading";
import AirportPicker from "./AirportPicker";
import { searchFlight } from "../../store/actions/flightActions";
import { passengersDetails } from "../../store/actions/bookingActions";

const FlightSearch = ({
  navigation,
  selectedFlight,
  handleSelect,
  setQuery,
  initialState,
}) => {
  const { destinations, destinationLoading } = useSelector(
    (state) => state.destinationReducer
  );
  const { travelClasses, travelClassLoading } = useSelector(
    (state) => state.travelClassReducer
  );

  const dispatch = useDispatch();
  const [filter, setFilter] = useState({
    departureDate: "",
    returnDate: null,
    passengers: "",
    departureAirport: 1,
    arrivalAirport: 3,
    roundtrip: false,
    travelClassId: 1,
  });

  if (destinationLoading || travelClassLoading) return <Loading />;

  const pickerItems = destinations.map((destination) => (
    <Picker.Item
      label={`${destination.city} (${destination.code} - ${destination.airport})`}
      value={destination.id}
    />
  ));
  const classPicker = travelClasses.map((travelClass) => (
    <Picker.Item label={travelClass.type} value={travelClass.id} />
  ));

  const handleSubmit = () => {
    if (handleSelect) handleSelect(null);
    if (setQuery) setQuery(initialState);
    dispatch(passengersDetails(filter.passengers, filter.travelClassId));
    dispatch(searchFlight(filter, filter.roundtrip, navigation));
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
        {filter.roundtrip && (
          <>
            <Text>
              <Icon type="MaterialIcons" name="flight-land" /> Return Date
            </Text>
            <DateSelector
              filter={filter}
              setFilter={setFilter}
              type="returnDate"
            />
          </>
        )}
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
            <Icon type="Ionicons" name="people" /> Passengers
          </Text>
        </Form>
        <TextInput
          placeholder={"Enter number of passengers"}
          keyboardType="numeric"
          onChangeText={(passengers) => setFilter({ ...filter, passengers })}
          value={filter.passengers}
        />
        <AirportPicker
          filter={filter}
          setFilter={setFilter}
          items={classPicker}
          type="travelClassId"
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
        <SearchButton block onPress={handleSubmit}>
          <ButtonTextStyled>
            <Icon type="AntDesign" name="search1" /> Search
          </ButtonTextStyled>
        </SearchButton>
      </Content>
    </StyledContainer>
  );
};

export default FlightSearch;
