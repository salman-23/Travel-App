import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
//Components
import Loading from "../Loading";
import FlightItem from "./FlightItem";
import { chosenFlights } from "../../store/actions/bookingActions";
//Styling
import { List, Container, Content, Button, Text } from "native-base";

const FlightList = ({ navigation, route }) => {
  const { flights, flightsLoading, returnFlights } = useSelector(
    (state) => state.flightReducer
  );
  const bookingReducer = useSelector((state) => state.bookingReducer);
  const { travelClassId } = bookingReducer;
  const bookedFlights = bookingReducer.flights;
  const dispatch = useDispatch();
  const [selectedFlight, setSelectedFlight] = useState(null);

  if (flightsLoading) return <Loading />;

  const handleSelect = (flightId) => setSelectedFlight(flightId);
  const handleSubmit = () => {
    dispatch(
      chosenFlights(
        selectedFlight,
        navigation,
        returnFlights.length,
        "departing",
        route
      )
    );
    handleSelect(null);
  };
  const flightList = flights.map((flight) => (
    <FlightItem
      flight={flight}
      selectedFlight={selectedFlight}
      handleSelect={handleSelect}
      travelClassId={travelClassId}
    />
  ));

  return (
    <Content>
      <Container>
        <List>
          {flightList}
          {selectedFlight && (
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onPress={handleSubmit}
            >
              <Text>{returnFlights.length ? "Next" : "Book"}</Text>
            </Button>
          )}
        </List>
      </Container>
    </Content>
  );
};

export default FlightList;
