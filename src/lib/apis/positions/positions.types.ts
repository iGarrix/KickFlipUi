import { BineIncommingTypeProps } from '@/lib/api_requests/common.fetches';
import * as Yup from 'yup';

export enum PositionControllerPaths {
	root = 'api/positions',
	getall = root,
	getbycode = root + '/getbycode',
	create = root + '/create',
	delete = root + '/delete',
}

export interface IPositionImage {
	src: string;
}

export interface IPosition {
	name: string;
	description: string;
	image: Array<IPositionImage>;
	size: string;
	price: string;
	shipping: string;
	code: string;
}

export interface GetPositionsDto extends BineIncommingTypeProps {
	ca?: string | null;
	s?: string | null;
}

export function GetPositionImage(src?: string) {
	if (!src) {
		return `${
			process.env.NODE_ENV === 'development'
				? process.env.NEXT_PUBLIC_TEST_API_URL
				: process.env.NEXT_PUBLIC_RELEASE_API_URL
		}api/images/default`;
	}

	return `${
		process.env.NODE_ENV === 'development'
			? process.env.NEXT_PUBLIC_TEST_API_URL
			: process.env.NEXT_PUBLIC_RELEASE_API_URL
	}api/images/position_images/${src}`;
}

export interface ICreatePositonForm {
	images: Array<File>;
}

// Scheme
export const CreatePositionSheme = Yup.object({
	images: Yup.array()
		.min(1, 'Files must be more than 1 or equal')
		.max(5, 'Files must be less than 5 or equals'),
});
