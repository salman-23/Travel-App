import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { signup, updateProfile } from '../../store/actions/authActions';
import {
	AuthContainer,
	AuthTitle,
	AuthTextInput,
	AuthButton,
	AuthButtonText,
	AuthOther,
} from './styles';
const Signup = ({ navigation }) => {
	const profile = useSelector((state) => state.authReducer.profile);
	const dispatch = useDispatch();
	const [user, setUser] = useState(
		profile ?? {
			username: '',
			password: '',
			email: '',
			firstName: '',
			lastName: '',
			passport: '',
		}
	);
	const handleSubmit = () => {
		if (profile) dispatch(updateProfile(user, navigation));
		dispatch(signup(user, navigation));
	};
	return (
		<AuthContainer>
			<AuthTitle>{profile ? 'Update' : 'Sign Up'}</AuthTitle>
			<AuthTextInput
				value={user.firstName}
				onChangeText={(firstName) => setUser({ ...user, firstName })}
				placeholder="FirstName"
				placeholderTextColor="#A6AEC1"
			/>
			<AuthTextInput
				value={user.lastName}
				onChangeText={(lastName) => setUser({ ...user, lastName })}
				placeholder="LastName"
				placeholderTextColor="#A6AEC1"
			/>
			<AuthTextInput
				value={user.email}
				onChangeText={(email) => setUser({ ...user, email })}
				placeholder="Email"
				placeholderTextColor="#A6AEC1"
			/>
			<AuthTextInput
				value={user.passport}
				onChangeText={(passport) => setUser({ ...user, passport })}
				placeholder="Passport"
				placeholderTextColor="#A6AEC1"
			/>

			{profile ? null : (
				<>
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
				</>
			)}
			<AuthButton onPress={handleSubmit}>
				<AuthButtonText>{profile ? 'Update' : 'Sign Up'}</AuthButtonText>
			</AuthButton>
			{profile ? null : (
				<AuthOther onPress={() => navigation.navigate('Signin')}>
					Click here to login!
				</AuthOther>
			)}
		</AuthContainer>
	);
};

export default Signup;
