import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
//Components
import Loading from "../Loading";
import FlightItem from "./FlightItem";
import { chosenFlights } from "../../store/actions/bookingActions";
import { timeFilter, airlineFilter, priceFilter, timeButtons } from "./Filters";
//Styling
import {
  List,
  Container,
  Content,
  Button,
  Text,
  CheckBox,
  View,
  Body,
} from "native-base";
import Slider from "@react-native-community/slider";
import { StyledContainer, ButtonContainer, CheckboxContainer } from "./styles";
const FlightList = ({ navigation, route }) => {
  const { flights, flightsLoading, returnFlights, roundtrip } = useSelector(
    (state) => state.flightReducer
  );
  const { airlines, airlineLoading } = useSelector(
    (state) => state.airlineReducer
  );
  const bookingReducer = useSelector((state) => state.bookingReducer);
  const { travelClassId } = bookingReducer;
  const bookedFlights = bookingReducer.flights;

  const dispatch = useDispatch();

  const initialState = {
    price: maxPrice ?? 1000000,
    airlines: [],
    departureTime: [],
    arrivalTime: [],
  };
  const [filter, setFilter] = useState(initialState);
  const [selectedFlight, setSelectedFlight] = useState(null);

  if (flightsLoading || airlineLoading) return <Loading />;

  const handleSelect = (flightId) => setSelectedFlight(flightId);
  const handleSubmit = () => {
    dispatch(
      chosenFlights(selectedFlight, navigation, roundtrip, "departing", route)
    );
    handleSelect(null);
  };

  const handleFilter = (name, set) => {
    filter[set].includes(name)
      ? setFilter({
          ...filter,
          [set]: filter[set].filter((something) => something !== name),
        })
      : setFilter({
          ...filter,
          [set]: [...filter[set], name],
        });
  };

  const maxPrice = Math.max(
    ...flights.map(
      (flight) => flight[`${travelClassId === 1 ? "economy" : "business"}Price`]
    )
  );
  //Filters
  let filteredFlights = priceFilter(flights, filter.price, travelClassId);
  if (filter.departureTime.length)
    filteredFlights = timeFilter(
      filteredFlights,
      filter.departureTime,
      "departureTime"
    );
  if (filter.arrivalTime.length)
    filteredFlights = timeFilter(
      filteredFlights,
      filter.arrivalTime,
      "arrivalTime"
    );
  if (filter.airlines.length)
    filteredFlights = airlineFilter(filteredFlights, filter.airlines);

  const flightList = filteredFlights.map((flight) => (
    <FlightItem
      flight={flight}
      selectedFlight={selectedFlight}
      handleSelect={handleSelect}
      travelClassId={travelClassId}
    />
  ));

  const airlineCheckbox = airlines.map((airline) => (
    <>
      <CheckboxContainer>
        <CheckBox
          checked={filter.airlines.includes(airline.name)}
          onPress={() => handleFilter(airline.name, "airlines")}
        />
      </CheckboxContainer>

      <Text>{airline.name}</Text>
    </>
  ));

  if (
    !filteredFlights.some((flight) => flight.id == selectedFlight) &&
    selectedFlight
  )
    handleSelect(null);
  return (
    <StyledContainer>
      <Content>
        <Text>Departure Time</Text>
        <ButtonContainer>
          {timeButtons(filter, handleFilter, "departureTime")}
        </ButtonContainer>
        <Text>Arrival Time</Text>
        <ButtonContainer>
          {timeButtons(filter, handleFilter, "arrivalTime")}
        </ButtonContainer>
        <ButtonContainer>
          <Text>Maximum Price</Text>
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={0}
            maximumValue={maxPrice + 10}
            minimumTrackTintColor="#000000"
            maximumTrackTintColor="#000000"
            value={filter.price}
            onValueChange={(value) =>
              setFilter({ ...filter, ["price"]: value })
            }
          />
          <Text>
            {Math.round(
              filter.price > maxPrice + 10 ? maxPrice + 10 : filter.price
            )}
            BD
          </Text>
        </ButtonContainer>
        <ButtonContainer>{airlineCheckbox}</ButtonContainer>
        <Button transparent onPress={() => setFilter(initialState)}>
          <Text>Reset Filters</Text>
        </Button>
        <List>
          {flightList.length === 0 ? (
            <Text>
              No departing flights available 😔 Please adjust your search
              criteria.
            </Text>
          ) : (
            flightList
          )}
          {selectedFlight && (
            <Button
              variant="contained"
              color="primary"
              block
              onPress={handleSubmit}
            >
              <Text>{roundtrip ? "Next" : "Book"}</Text>
            </Button>
          )}
        </List>
      </Content>
    </StyledContainer>
  );
};

export default FlightList;
