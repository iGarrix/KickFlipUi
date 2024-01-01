import { axiosHttp } from '@/serverside/axios/axios.accessor';
import {
	GetPositionsDto,
	IPosition,
	PositionControllerPaths,
} from './positions.types';
import { BineResponse } from '@/serverside/api_requests/common.fetches';
import { AxiosResponse } from 'axios';
import { setDelayAsync } from '@/serverside/api_requests/delay';

export async function GetPositions(dto: GetPositionsDto) {
	try {
		const response: AxiosResponse<BineResponse<IPosition>> =
			await axiosHttp.get<BineResponse<IPosition>>(
				PositionControllerPaths.getall,
				{
					params: dto,
				}
			);
		//await setDelayAsync(2000);
		return response.data;
	} catch (error) {
		console.log(error);
	}
}
export async function GetPositionByCode(code: string) {
	try {
		const response: AxiosResponse<IPosition> = await axiosHttp.get<IPosition>(
			PositionControllerPaths.getbycode,
			{
				params: {
					code: code,
				},
			}
		);
		return response.data;
	} catch (error) {
		console.log(error);
	}
}
