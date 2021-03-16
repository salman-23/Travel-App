import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
//Components
import Loading from "../Loading";
import FlightItem from "./FlightItem";
import { chosenFlights } from "../../store/actions/bookingActions";
//Styling
import { List, Container, Content, Button, Text } from "native-base";

const Roundtrip = ({ navigation }) => {
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

  const departingFlight = flights.find(
    (flight) => flight.id === bookedFlights.departing
  );

  const handleSubmit = () => {
    dispatch(
      chosenFlights(
        selectedFlight,
        navigation,
        returnFlights.length,
        "returning",
        route
      )
    );
    handleSelect(null);
  };
  const flightList = returnFlights
    .filter(
      (flight) =>
        flight.departureDate !== departingFlight.departureDate ||
        +flight.departureTime >= 2 + +departingFlight.arrivalTime
    )
    .map((flight) => (
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
          {flightList.length === 0 ? (
            <StyledMessage>
              No return flights available 😔 Please adjust your search criteria
              or choose another departing flight.
            </StyledMessage>
          ) : (
            flightList
          )}
          {selectedFlight && (
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onPress={handleSubmit}
            >
              <Text>Book</Text>
            </Button>
          )}
        </List>
      </Container>
    </Content>
  );
};

export default Roundtrip;
