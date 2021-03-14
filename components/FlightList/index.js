import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
//Components
import Loading from "../Loading";
import FlightItem from "./FlightItem";
import { bookingCreate } from "../../store/actions/bookingActions";
//Styling
import { List, Container, Content, Button, Text } from "native-base";

const FlightList = ({ navigation }) => {
  const { flights, loading, returnFlights } = useSelector(
    (state) => state.flightReducer
  );

  const dispatch = useDispatch();
  const [selectedFlight, setSelectedFlight] = useState(null);

  if (loading) return <Loading />;

  const handleSelect = (flightId) => setSelectedFlight(flightId);
  const handleSubmit = () => {
    dispatch(
      bookingCreate(
        selectedFlight,
        navigation,
        returnFlights.length,
        "FlightList"
      )
    );
    handleSelect(null);
  };
  const flightList = flights.map((flight) => (
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
