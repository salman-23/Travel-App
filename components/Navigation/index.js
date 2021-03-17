import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";
// Components
import UserProfile from '../UserProfile';
import Home from '../Home';
import Signin from '../authentication/Signin';
import Signup from '../authentication/Signup';
import Logout from '../buttons/Logout';
import FlightSearch from '../FlightSearch';
import FlightList from '../FlightList';
import Roundtrip from '../FlightList/Roundtrip';
import OrderHistory from '../OrderHistory';
import BookingForm from "../BookingForm";
import Login from '../buttons/Login';

const RootNavigator = () => {
	const { Navigator, Screen } = createStackNavigator();
	const { flights, flightsLoading, returnFlights, roundtrip } = useSelector(
		(state) => state.flightReducer
	);
	const bookedFlights = useSelector((state) => state.bookingReducer.flights);

	return (
		<>
			<Navigator
				initialRouteName="Home"
				screenOptions={{
					headerTintColor: 'white',
					headerStyle: {
						backgroundColor: '#000',
					},
				}}
			>
				<Screen
					name="Home"
					component={Home}
					options={{
						headerTintColor: 'black',
						headerStyle: {
							backgroundColor: '#A9BAD6',
						},

						headerRight: () => <Login />,
					}}
				/>
				<Screen
					name="FlightSearch"
					component={FlightSearch}
					options={{
						headerTintColor: 'black',
						headerStyle: {
							backgroundColor: '#A9BAD6',
						},
						headerRight: () => <Login />,
					}}
				/>
				<Screen
					name="FlightList"
					component={FlightList}
					options={{
						headerTintColor: 'black',
						headerStyle: {
							backgroundColor: '#A9BAD6',
						},
						headerRight: () => <Login />,
					}}
				/>
				<Screen
					name="ReturnFlights"
					component={Roundtrip}
					options={{
						headerTintColor: 'black',
						headerStyle: {
							backgroundColor: '#A9BAD6',
						},
						headerRight: () => <Login />,
					}}
				/>
				<Screen
					name="OrderHistory"
					component={OrderHistory}
					options={{
						headerTintColor: 'black',
						headerStyle: {
							backgroundColor: '#A9BAD6',
						},
					}}
				/>
        <Screen name="Booking" 
            component={BookingForm} 
            options={{
						headerTintColor: 'black',
						headerStyle: {
							backgroundColor: '#A9BAD6',
						},
					}}
				/>
				<Screen
          name="Signin"
          component={Signin}
          options={({ route, navigation }) => {
            return {
              headerShown: false,
            };
          }}
        />
				<Screen
					name="Signup"
					component={Signup}
					options={{ headerShown: false }}
				/>

				<Screen
					name="UserProfile"
					component={UserProfile}
					options={{
						headerTintColor: 'black',
						headerStyle: {
							backgroundColor: '#A9BAD6',
						},
						headerRight: () => <Logout />,
					}}
				/>
			</Navigator>
		</>
	);
};

export default RootNavigator;
