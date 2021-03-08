import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://192.168.100.17:8000',
});

export default instance;
