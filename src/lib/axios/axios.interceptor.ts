import { jwtDecode } from 'jwt-decode';
import { Refresh } from '../apis/auth/auth.controller';
import {
	AuthStore,
	AuthVariables,
	useAuthStorage,
} from '../zustand_hooks/authStorage/authStorage';
import { axiosHttp } from './axios.accessor';
import { IBaseErrorState } from '../api_requests/common.fetches';
import { toast } from 'sonner';

export type InterceptStore = AuthStore;

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
						const _session: string | null = sessionStorage.getItem(
							AuthVariables.access_token
						);
						if (!_session) {
							return;
						}
						const refreshToken: any = jwtDecode(_session);
						const refreshResponse = await Refresh({
							refreshToken: refreshToken.rt,
							accessToken: _session,
						});
						toast('Session is expired', {
							description: 'Do you wanna renew?',
							action: {
								label: 'Renew',
								onClick: () => {
									store.onSignIn(refreshResponse.user);
									store.onSignToken(refreshResponse.accessToken);
								},
							},
							cancel: {
								label: 'Log out',
								onClick: () => {
									toast('Successfully logged out of your account');
									store.onSignIn(null);
									store.onSignToken(null);
								},
							},
							duration: 20000,
						});

						return Promise.resolve('success');
					} catch (_error) {
						const _err: IBaseErrorState = _error as IBaseErrorState;
						store.onSignIn(null);
						store.onSignToken(null);
						console.log(_err);
						toast('Sign out | Session validity was expired', {
							description: _err.message.join(', '),
							action: {
								label: 'Ok',
								onClick: () => {
									store.onSignIn(null);
									store.onSignToken(null);
								},
							},
							duration: 1000,
						});
						return Promise.reject(_error);
					}
				}
			}

			return Promise.reject(err);
		}
	);
};

export default axiosInterceptor;
