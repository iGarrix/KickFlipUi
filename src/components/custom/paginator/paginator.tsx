'use client';

import ReactPaginate from 'react-paginate';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { IPaginatorProps } from './paginator.types';
import { Fragment, useTransition } from 'react';

export const Paginator: React.FC<IPaginatorProps> = ({ ...props }) => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const pathname = usePathname();
	const [isPending, startTransition] = useTransition();
	function onPaginate(e: any) {
		let _currPage = e.selected + 1;
		const current = new URLSearchParams(Array.from(searchParams.entries()));
		current.set('page', _currPage);
		if (props.take) {
			current.set('take', props.take.toString());
		}
		const currString = current.toString();
		const query = currString ? `?${currString}` : '';
		startTransition(() => {
			router.push(`${pathname}/${query}`);
		});
	}

	function getInitialPage() {
		if (props.targetKey) {
			const target = searchParams.get(props.targetKey);
			if (target) {
				return Number(target);
			}
		} else {
			const page = searchParams.get('page');
			if (page) {
				return Number(page);
			}
		}
		return 1;
	}

	return (
		<Fragment>
			<ReactPaginate
				breakLabel="..."
				initialPage={getInitialPage() - 1}
				nextLabel={<FontAwesomeIcon className="" icon={faAngleRight} />}
				previousLabel={<FontAwesomeIcon className="" icon={faAngleLeft} />}
				onPageChange={onPaginate}
				pageRangeDisplayed={5}
				marginPagesDisplayed={2}
				pageCount={props.totalPages}
				className="flex flex-wrap gap-2 items-center justify-center select-none transition-all overflow-hidden w-full outline-none"
				pageClassName="font-bold flex items-center justify-center text-center outline-none transition-all"
				breakClassName=""
				activeClassName="paginator__active"
				disabledClassName="paginator__disabled"
				nextLinkClassName="w-[40px] h-[40px] xs:hidden sm:flex 3xl:flex font-medium flex items-center justify-center text-center outline-none"
				pageLinkClassName="w-[40px] h-[40px] flex items-center justify-center text-center outline-none border-2 border-dark/0 hover:border-dark/80"
				nextClassName="ml-[2vw] transition-all border-2 border-dark/0 hover:border-dark/80 outline-none"
				previousClassName="mr-[2vw] transition-all border-2 border-dark/0 hover:border-dark/80 outline-none"
				breakLinkClassName="paginator__breakLink"
				activeLinkClassName={`transition-all text-white hover:text-white ${
					isPending ? 'bg-blue-500 border-0' : 'bg-dark'
				}`}
				containerClassName=""
				disabledLinkClassName="paginator__disabledLink"
				previousLinkClassName="w-[40px] h-[40px] xs:hidden sm:flex 3xl:flex font-medium flex items-center justify-center text-center outline-none"
				renderOnZeroPageCount={() => {}}
			/>
			{isPending && (
				<div className="fixed top-0 left-0 animate-pulse z-[1000] bg-blue-500/80 h-[5px] w-full"></div>
			)}
		</Fragment>
	);
};
