import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UserProfile from '../UserProfile';
import Home from '../Home';
import Signin from '../authentication/Signin';
import Signup from '../authentication/Signup';
import Logout from '../buttons/Logout';
const RootNavigator = () => {
	const { Navigator, Screen } = createStackNavigator();

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
						headerRight: () => <Logout />,
					}}
				/>
				<Screen
					name="Signin"
					component={Signin}
					options={{ headerShown: false }}
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