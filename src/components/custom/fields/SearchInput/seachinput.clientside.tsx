'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { SearchInput } from './searchinput';

export const SearchClient: React.FC<any> = (props: {
	placeholder: string;
	pathname: string;
	urlValue: string;
	defValue?: string;
}) => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [val, setVal] = useState('');

	function onSubmit(e: any) {
		e.preventDefault();

		if (searchParams) {
			const current = new URLSearchParams(Array.from(searchParams.entries()));

			const value = val.trim();
			if (!value) {
				current.delete(props.urlValue);
			} else {
				current.set(props.urlValue, val);
			}

			const search = current.toString();
			const query = search ? `?${search}` : '';

			//router.push(`${pathname}/${query}`);
			router.push(`${props.pathname}/${query}`);
		}
	}

	return (
		<form onSubmit={onSubmit} className="grow">
			<SearchInput
				placeholder={props.placeholder}
				defValue={props.defValue}
				onChange={(e: any) => {
					setVal(e.target.value);
				}}
			/>
		</form>
	);
};
