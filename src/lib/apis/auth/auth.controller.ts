import { AxiosError, AxiosResponse } from 'axios';
import {
	AuthControllerPaths,
	ILoginDto,
	IRegisterDto,
	IUser,
} from './auth.types';
import {
	IAuthorizateResponse,
	IBaseErrorState,
	IRefreshTokenRequest,
} from '@/lib/api_requests/common.fetches';
import { AuthorizateHeader, axiosHttp } from '@/lib/axios/axios.accessor';

export async function GetSession(token: string) {
	try {
		const response: AxiosResponse<IUser> = await axiosHttp.get<IUser>(
			AuthControllerPaths.session,
			{
				headers: AuthorizateHeader(token).headers,
			}
		);
		return response.data;
	} catch (error) {
		const _err: AxiosError = error as AxiosError;
		throw _err.response?.data as IBaseErrorState;
	}
}

export async function Login(dto: ILoginDto) {
	try {
		const response: AxiosResponse<IAuthorizateResponse<IUser>> =
			await axiosHttp.post<IAuthorizateResponse<IUser>>(
				AuthControllerPaths.login,
				dto
			);
		return response.data;
	} catch (error) {
		const _err: AxiosError = error as AxiosError;
		throw _err.response?.data as IBaseErrorState;
	}
}

export async function Register(dto: IRegisterDto) {
	try {
		const response: AxiosResponse<IAuthorizateResponse<IUser>> =
			await axiosHttp.post<IAuthorizateResponse<IUser>>(
				AuthControllerPaths.register,
				dto
			);
		return response.data;
	} catch (error) {
		const _err: AxiosError = error as AxiosError;
		throw _err.response?.data as IBaseErrorState;
	}
}

export async function Refresh(dto: IRefreshTokenRequest) {
	try {
		const response: AxiosResponse<IAuthorizateResponse<IUser>> =
			await axiosHttp.patch<IAuthorizateResponse<IUser>>(
				AuthControllerPaths.refresh,
				dto
			);
		return response.data;
	} catch (error) {
		const _err: AxiosError = error as AxiosError;
		throw _err.response?.data as IBaseErrorState;
	}
}

export async function Logout(token: string) {
	try {
		const response: AxiosResponse<any> = await axiosHttp.post<any>(
			AuthControllerPaths.logout,
			{},
			{
				headers: AuthorizateHeader(token).headers,
			}
		);
		return response.data;
	} catch (error) {
		const _err: AxiosError = error as AxiosError;
		throw _err.response?.data as IBaseErrorState;
	}
}
