'use client';

// contexts/AuthContext.tsx
import {
	createContext,
	useContext,
	useEffect,
	useLayoutEffect,
	useState,
} from 'react';
import { IUser } from '@/lib/apis/auth/auth.types';
import {
	AuthVariables,
	useAuthStorage,
} from '@/lib/zustand_hooks/authStorage/authStorage';
import { GetSession } from '@/lib/apis/auth/auth.controller';
import axiosInterceptor from '@/lib/axios/axios.interceptor';
import { DebugConsole } from '@/components/custom/debugConsole/debugConsole';

interface AuthContextProps {
	user: IUser | null;
	accessToken: string | null;
	onSignIn: (user: IUser | null) => void;
	onSignToken: (token: string | null) => void;
}

const AuthContext = createContext<AuthContextProps>({
	user: null,
	accessToken: null,
	onSignIn: () => {},
	onSignToken: () => {},
});

export interface IAuthProviderProps {
	children: React.ReactNode;
	unauthorized: React.ReactNode;
	loading: React.ReactNode;
}

export const AuthProvider: React.FC<IAuthProviderProps> = (props: {
	children: React.ReactNode;
	unauthorized: React.ReactNode;
	loading: React.ReactNode;
}) => {
	const auth = useAuthStorage();
	async function signin(token: string) {
		try {
			if (!auth.instance) {
				const response = await GetSession(token);
				auth.onSignIn(response);
			}
		} catch (error) {
			console.log(error);
		}
	}

	useLayoutEffect(() => {
		axiosInterceptor(auth);
	}, [auth.instance, auth.accessToken]);

	useEffect(() => {
		const _session: string | null = sessionStorage.getItem(
			AuthVariables.access_token
		);
		if (!_session) {
			auth.onSignToken(null);
			return;
		}
		if (auth.accessToken === 'wait') {
			auth.onSignToken(_session);
			signin(_session);
			return;
		}
	}, [auth.instance, auth.accessToken]);

	return (
		<AuthContext.Provider
			value={{
				user: auth.instance,
				accessToken: auth.accessToken,
				onSignIn: auth.onSignIn,
				onSignToken: auth.onSignToken,
			}}>
			<DebugConsole>
				<div className="fixed top-0 left-0 z-[100] bg-dark/40 backdrop-blur-md overflow-hidden whitespace-pre-wrap flex flex-col flex-wrap w-full font-semibold px-[2vw] py-[2vh]">
					<p>Debug console</p>
					<p>
						Account data: {auth.instance?.email} / {auth.instance?.username}
					</p>
					<p className="whitespace-pre-wrap">
						Access token: {auth.accessToken}
					</p>
				</div>
			</DebugConsole>
			{!auth.accessToken
				? props.unauthorized
				: !auth.instance
				? props.loading
				: props.children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
