import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { Icon } from 'native-base';
import { Alert } from 'react-native';
// Components
import { profile } from '../../store/actions/authActions';
const Login = () => {
	const navigation = useNavigation();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.authReducer.user);
	const handlelogin = () => {
		if (user) {
			dispatch(profile());
			navigation.navigate('UserProfile');
		} else {
			Alert.alert(
				'Signin',
				'You need to sign in before checkout',
				[
					{
						text: 'Cancel',
						onPress: () => console.log('Cancel Pressed'),
						style: 'cancel',
					},
					{ text: 'Signin', onPress: () => navigation.navigate('Signin') },
				],
				{ cancelable: false }
			);
		}
	};
	return (
		<Icon
			onPress={handlelogin}
			type="AntDesign"
			name="profile"
			style={{ fontSize: 20, color: 'black' }}
		/>
	);
};

export default Login;
