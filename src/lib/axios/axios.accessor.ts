import axios from 'axios';
const https = require('https');

const agent = new https.Agent({
	rejectUnauthorized: false,
});

const axiosHttp_instance = axios.create({
	//httpsAgent: agent,
	baseURL:
		process.env.NODE_ENV === 'development'
			? process.env.NEXT_PUBLIC_TEST_API_URL
			: process.env.NEXT_PUBLIC_RELEASE_API_URL,
	headers: {
		'Content-type': 'application/json',
	},
});

export const AuthorizateHeader = (token: any) => {
	return {
		headers: {
			Authorization: 'Bearer ' + token,
		},
	};
};

export const axiosHttp = axiosHttp_instance;
