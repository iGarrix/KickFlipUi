// 'use client';
// import { useEffect } from 'react';
// import { axiosHttp } from '../axios/axios.accessor';
// import { useSessionStorage } from '@uidotdev/usehooks';
// import { jwtDecode } from 'jwt-decode';
// import { AuthVariables } from '../zustand_hooks/authStorage/authStorage';

// const useAxiosAuth = () => {
// 	const [accessToken, setAccessToken] = useSessionStorage<string | null>(
// 		AuthVariables.access_token,
// 		null
// 	);

// 	useEffect(() => {
// 		const requestIntercept = axiosHttp.interceptors.request.use(
// 			(config) => {
// 				if (!config.headers['Authorization']) {
// 					config.headers['Authorization'] = `Bearer ${accessToken}`;
// 				}
// 				return config;
// 			},
// 			(error) => Promise.reject(error)
// 		);

// 		const responseIntercept = axiosHttp.interceptors.response.use(
// 			(response) => response,
// 			async (error) => {
// 				const prevRequest = error?.config;
// 				if (error?.response?.status === 401 && !prevRequest?.sent) {
// 					prevRequest.sent = true;
// 					if (!accessToken) {
// 						return axiosHttp(prevRequest);
// 					}
// 					const decoded = jwtDecode(accessToken);
// 					console.log(decoded);
// 					//await refreshToken();
// 					console.log('Refresh Token');
// 					prevRequest.headers['Authorization'] = `Bearer ${accessToken}`;
// 					return axiosHttp(prevRequest);
// 				}
// 				return Promise.reject(error);
// 			}
// 		);

// 		return () => {
// 			axiosHttp.interceptors.request.eject(requestIntercept);
// 			axiosHttp.interceptors.response.eject(responseIntercept);
// 		};
// 	}, [accessToken]);

// 	return axiosHttp;
// };

// export default useAxiosAuth;
