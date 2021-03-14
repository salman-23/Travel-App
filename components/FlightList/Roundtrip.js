import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
//Components
import Loading from "../Loading";
import FlightItem from "./FlightItem";
import { bookingCreate } from "../../store/actions/bookingActions";
//Styling
import { List, Container, Content, Button, Text } from "native-base";

const FlightList = ({ navigation }) => {
  const dispatch = useDispatch();
  const [selectedFlight, setSelectedFlight] = useState(null);
  const { flights, loading, returnFlights } = useSelector(
    (state) => state.flightReducer
  );
  const { bookedFlights, bookingLoading } = useSelector(
    (state) => state.bookingReducer
  );

  if (loading || bookingLoading) return <Loading />;

  const handleSelect = (flightId) => setSelectedFlight(flightId);

  const bookedFlight = flights.find((flight) => flight.id === bookedFlights[0]);

  const handleSubmit = () => {
    dispatch(
      bookingCreate(
        selectedFlight,
        navigation,
        returnFlights.length,
        "ReturnFlights"
      )
    );
    handleSelect(null);
  };
  const flightList = returnFlights
    .filter(
      (flight) =>
        flight.departureDate !== bookedFlight.departureDate ||
        +flight.departureTime >= 2 + +bookedFlight.arrivalTime
    )
    .map((flight) => (
      <FlightItem
        flight={flight}
        selectedFlight={selectedFlight}
        handleSelect={handleSelect}
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

export default FlightList;
