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
			const res = await instance.post('user/signin', user);
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
			const res = await instance.post('/user/signup', newUser);
			dispatch(setUser(res.data.token));
			console.error(res.data.token);
			navigation.navigate('Home');
		} catch (error) {
			console.log(error);
		}
	};
};
export const singout = () => {
	return async (dispatch) => {
		try {
			AsyncStorage.removeItem('myToken');
			const token = AsyncStorage.getItem('myToken');
			delete instance.defaults.headers.common.Authorization;
			dispatch({
				type: (types.SET_USER, types.FETCH_PROFILE),
				payload: null,
			});
		} catch (error) {
			console.error(error);
		}
	};
};
export const checkForToken = () => async (dispatch) => {
	const token = await AsyncStorage.getItem('myToken');
	if (token) {
		const user = decode(token);
		if (Date.now() < user.exp) {
			dispatch({
				type: types.SET_USER,
				payload: user,
			});
		} else {
			AsyncStorage.removeItem('myToken');
		}
	}
};

export const profile = (userId) => async (dispatch) => {
	try {
		const res = await instance.get(`/user/myprofile`);
		dispatch({
			type: types.FETCH_PROFILE,
			payload: res.data,
		});
	} catch (error) {
		console.log('ERROR: ', error);
	}
};

export const updateProfile = (user, navigation) => async (dispatch) => {
	try {
		await instance.put(`/user/Updateprofile`, user);
		dispatch({
			type: types.UPDATE_PROFILE,
			payload: user,
		});
		navigation.navigate('UserProfile');
	} catch (error) {
		console.log('ERROR: ', error);
	}
};

export const history = () => async (dispatch) => {
	try {
		const res = await instance.get(`/user/history`);
		dispatch({
			type: types.FETCH_HISTORY,
			payload: res.data,
		});
	} catch (error) {
		console.log('ERROR: ', error);
	}
};
