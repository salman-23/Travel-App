import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { signup } from '../../store/actions/authActions';
import {
	AuthContainer,
	AuthTitle,
	AuthTextInput,
	AuthButton,
	AuthButtonText,
	AuthOther,
} from './styles';
const Signup = ({ navigation }) => {
	const dispatch = useDispatch();
	const [user, setUser] = useState({
		username: '',
		password: '',
		email: '',
		firstName: '',
		lastName: '',
		passport: '',
	});
	const handleSubmit = () => {
		console.error(user);
		dispatch(signup(user, navigation));
	};
	return (
		<AuthContainer>
			<AuthTitle>Signup</AuthTitle>
			<AuthTextInput
				onChangeText={(firstName) => setUser({ ...user, firstName })}
				placeholder="FirstName"
				placeholderTextColor="#A6AEC1"
			/>
			<AuthTextInput
				onChangeText={(lastName) => setUser({ ...user, lastName })}
				placeholder="LastName"
				placeholderTextColor="#A6AEC1"
			/>
			<AuthTextInput
				onChangeText={(email) => setUser({ ...user, email })}
				placeholder="Email"
				placeholderTextColor="#A6AEC1"
			/>
			<AuthTextInput
				onChangeText={(passport) => setUser({ ...user, passport })}
				placeholder="Passport"
				placeholderTextColor="#A6AEC1"
			/>
			<AuthTextInput
				onChangeText={(username) => setUser({ ...user, username })}
				placeholder="Username"
				placeholderTextColor="#A6AEC1"
				autoCapitalize="none"
			/>
			<AuthTextInput
				onChangeText={(password) => setUser({ ...user, password })}
				placeholder="Password"
				placeholderTextColor="#A6AEC1"
				secureTextEntry={true}
			/>
			<AuthButton onPress={handleSubmit}>
				<AuthButtonText>Sign up</AuthButtonText>
			</AuthButton>
			<AuthOther onPress={() => navigation.navigate('Signin')}>
				Click here to login!
			</AuthOther>
		</AuthContainer>
	);
};

export default Signup;
