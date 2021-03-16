import React from 'react';
import { useSelector } from 'react-redux';
import { Text, List, Content } from 'native-base';
//components
import Loading from '../Loading';
import FlightItem from './FlightItem';
import PassengerItem from './PassengerItem';
import { Title } from './styles';

const OrderHistory = ({ navigation }) => {
	const orders = useSelector((state) => state.authReducer.history);
	const loading = useSelector((state) => state.authReducer.loadingHistory);
	if (loading) return <Loading />;
	const flights = [];
	const passengers = [];
	const foundFlights = orders.map((order) => order.Flights);
	const foundPassengers = orders.map((order) => order.passenger);
	const passenger = foundPassengers.forEach((passenger) =>
		passenger.forEach((pr) => passengers.push(pr))
	);
	const flight = foundFlights.forEach((flight) =>
		flight.forEach((fo) => flights.push(fo))
	);

	const flightList = flights.map((flight) => (
		<FlightItem flight={flight} key={flight.id} />
	));

	const passengerList = passengers.map((passenger) => (
		<PassengerItem passenger={passenger} key={passenger.id} />
	));

	return (
		<>
			<Title> Flights History</Title>
			<Content>
				<List>{flightList}</List>
			</Content>
			<Title>passenger History</Title>
			<Content>
				<List>{passengerList}</List>
			</Content>
		</>
	);
};

export default OrderHistory;
