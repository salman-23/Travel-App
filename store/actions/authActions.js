import instance from './instance';
import decode from 'jwt-decode';
import * as types from '../actions/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
const setUser = (token) => {
	AsyncStorage.setItem('myToken', token);
	instance.defaults.headers.common.Authorization = `Bearer ${token}`;
	return {
		type: types.SET_USER,
		payload: decode(token),
	};
};
export const signin = (user, navigation) => {
	return async (dispatch) => {
		try {
			const res = await instance.post('/signin', user);
			dispatch(setUser(res.data.token));
			navigation.navigate('Home');
		} catch (error) {
			console.error(error);
		}
	};
};

export const signup = (newUser, navigation) => {
	return async (dispatch) => {
		try {
			const res = await instance.post('/signup', newUser);
			dispatch(setUser(res.data.token));
			console.error(res.data.token);
			navigation.navigate('Home');
		} catch (error) {
			console.log(error);
		}
	};
};
