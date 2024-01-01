import { AxiosError } from 'axios';

export interface IBaseErrorState<TPropsType> {
	message: string | null;
	props: TPropsType | null;
}

export interface IThrowerResponse {
	StatusCode: number;
	Message: string;
}

export interface BineIncommingTypeProps {
	page: number;
	take: number;
}

export interface IAuthorizateResponse<TInstance> {
	accessToken: string;
	instance: TInstance;
}

export interface IBineMeta {
	total: number;
	lastPage: number;
	currentPage: number;
	perPage: number;
	prev: number | null;
	next: number | null;
}

export interface BineResponse<TBineDataType> {
	meta: IBineMeta;
	data: Array<TBineDataType>;
}

export interface IAuthenticateUserRequest {
	accessToken: string;
	refreshToken: string;
}

export interface IBaseApiDtos {
	createTime: Date;
	modifyTime: Date | null;
}

// Actions

export function ErrorHandler(_error: any): IBaseErrorState<IThrowerResponse> {
	const axiosError: AxiosError = _error as AxiosError;
	if (axiosError) {
		const thrower: IThrowerResponse = axiosError.response
			?.data as IThrowerResponse;
		if (thrower) {
			const baseThrowerError: IBaseErrorState<IThrowerResponse> = {
				message: null,
				props: thrower,
			};
			return baseThrowerError;
		}
		const baseAxiosError: IBaseErrorState<any> = {
			message: axiosError.message,
			props: null,
		};
		return baseAxiosError;
	}
	const baseUnknownError: IBaseErrorState<IThrowerResponse> = {
		message: 'Unknown error',
		props: null,
	};
	return baseUnknownError;
}
