import { axiosHttp } from './axios.accessor';

export type InterceptStore = null;

const axiosInterceptor = (store: InterceptStore) => {
	axiosHttp.interceptors.response.use(
		(res) => {
			return res;
		},
		async (err) => {
			const originalConfig = err.config;
			if (err.response && err.config) {
				if (err.response.status === 401 && !originalConfig._retry) {
					originalConfig._retry = true;
					try {
						// intercept code
						return Promise.resolve('success');
					} catch (_error) {
						return Promise.reject(_error);
					}
				}
			}

			return Promise.reject(err);
		}
	);
};

export default axiosInterceptor;
