import * as Yup from 'yup';

export enum AuthControllerPaths {
	root = 'api/auth',
	session = root,
	login = root + '/login',
	register = root + '/register',
	refresh = root + '/refresh',
	logout = root + '/logout',
}

export interface IUser {
	username: string;
	email: string;
}

export interface ILoginDto {
	username: string;
	password: string;
}

export interface IRegisterDto extends ILoginDto {
	email: string;
}

// Scheme
export const LoginScheme = Yup.object({
	username: Yup.string().required('Username is required'),
	password: Yup.string()
		.min(8, 'Password must be longer than 8 charapter or equals')
		.required('Password is required'),
});
