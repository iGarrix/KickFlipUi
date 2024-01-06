import Link from 'next/link';
import { Fragment } from 'react';
import { Client_SearchLayoyt_1 } from '../Client_SearchLayout_1';
import { Paginator } from '@/components/custom/paginator/paginator';
import { Metadata } from 'next';
import { GetPositions } from '@/lib/apis/positions/positions.controller';

export const metadata: Metadata = {
	title: 'Accessories items, Fick Flip Dropshipping',
	description: 'Fick Flip Dropshipping Platform',
};

export default async function AccessoriesPage(props: {
	searchParams: { [key: string]: string | undefined };
}) {
	function getParams() {
		return {
			search: props.searchParams.s as string,
			take: props.searchParams.take
				? Number(props.searchParams.take as string)
				: 20,
			currPage: Number(props.searchParams.page as string),
		};
	}

	const data = await GetPositions({
		take: getParams().take,
		page: getParams().currPage,
		ca: 'Accessories',
		s: getParams().search,
	});

	return (
		<Fragment>
			<br />
			<div className="flex items-center gap-[1rem] w-[calc(70%-2rem)] mr-auto">
				<h1 className="font-spacemono font-semibold text-xl line-clamp-1">
					{props.searchParams.s
						? `Found ${data?.meta.total} items in ${data?.meta.lastPage} ${
								data?.meta.lastPage === 1 ? 'page' : 'pages'
						  } results by "${props.searchParams.s}"`
						: `Accessories, ${data?.meta.total} items in ${
								data?.meta.lastPage
						  } ${data?.meta.lastPage === 1 ? 'page' : 'pages'} was found`}
				</h1>
				{data && data.meta.currentPage > data.meta.lastPage && (
					<Link href={'/shoes'}>
						<button className="text-blue-500">Go to 1 page</button>
					</Link>
				)}
			</div>
			<br />
			<Client_SearchLayoyt_1 data={data?.data} />
			{data && data.meta.lastPage > 1 && (
				<div className="flex w-full justify-center mt-auto pt-[2rem]">
					<Paginator totalPages={data.meta.lastPage} targetKey="page" />
				</div>
			)}
		</Fragment>
	);
}
