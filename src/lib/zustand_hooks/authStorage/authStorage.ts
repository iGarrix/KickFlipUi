import { IUser } from '@/lib/apis/auth/auth.types';
import { create } from 'zustand';

export interface AuthStore {
	instance: IUser | null;
	accessToken: string | null;
	onSignIn: (user: IUser | null) => void;
	onSignToken: (token?: string | null) => void;
}

export enum AuthVariables {
	access_token = 'acs_tkn',
}

export const useAuthStorage = create<AuthStore>((set, get) => ({
	instance: null,
	accessToken: 'wait',
	onSignIn: (user: IUser | null) => {
		set({ instance: user });
	},
	onSignToken: (token?: string | null) => {
		if (!token) {
			sessionStorage.removeItem(AuthVariables.access_token);
		} else {
			sessionStorage.setItem(AuthVariables.access_token, token);
		}
		set({ accessToken: token });
	},
}));
