'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Fragment, useState, useTransition } from 'react';
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
	const [isPending, startTransition] = useTransition();
	const pathname = usePathname();

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

			startTransition(() => {
				router.push(`${props.pathname ? props.pathname : pathname}/${query}`);
			});
		}
	}

	return (
		<form onSubmit={onSubmit} className="grow">
			<SearchInput
				placeholder={props.placeholder}
				defValue={props.defValue ? props.defValue : searchParams.get('s')}
				isPending={isPending}
				onChange={(e: any) => {
					setVal(e.target.value);
				}}
			/>
			{isPending && (
				<div className="fixed top-0 left-0 animate-pulse z-[1000] bg-blue-500/80 h-[5px] w-full"></div>
			)}
		</form>
	);
};
