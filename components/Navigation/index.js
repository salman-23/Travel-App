import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Home';
import Signin from '../authentication/Signin';
import Signup from '../authentication/Signup';

const RootNavigator = () => {
	const { Navigator, Screen } = createStackNavigator();

	return (
		<>
			<Navigator
				initialRouteName="Signin"
				screenOptions={{
					headerTintColor: 'white',
					headerStyle: {
						backgroundColor: '#000',
					},
				}}
			>
				<Screen name="Home" component={Home} options={{ headerShown: false }} />
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
			</Navigator>
		</>
	);
};

export default RootNavigator;
