'use client';

import { SearchClient } from '@/components/custom/fields/SearchInput/seachinput.clientside';
import usePositionStorage from '@/lib/zustand_hooks/cartStorage/cartStorage';
import { faHeart, faCartPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function SearchLayout(props: { children: React.ReactNode }) {
	const pos_storage = usePositionStorage();
	return (
		<div className="w-[95%] xs:mx-auto 2xl:mr-auto flex flex-col h-full">
			<div className="flex justify-between">
				<SearchClient
					placeholder="Search anything by name, shipping, etc"
					urlValue="s"
				/>
				<div className="flex items-center justify-end gap-[2rem] ml-auto w-[calc(30%+2rem)] text-lg xs:hidden md:flex">
					<Link href={'/account/liked'} className="relative">
						{pos_storage.liked && pos_storage.liked.length !== 0 && (
							<div className="w-[6px] h-[6px] rounded-full bg-rose-600 absolute top-[-4px] right-[-8px]"></div>
						)}
						<FontAwesomeIcon icon={faHeart} />
					</Link>
					<Link href={'/account/cart'} className="relative">
						{pos_storage.cart && pos_storage.cart.length !== 0 && (
							<div className="w-[6px] h-[6px] rounded-full bg-rose-600 absolute top-[-4px] right-[-8px]"></div>
						)}
						<FontAwesomeIcon icon={faCartPlus} />
					</Link>
					<Link href={'/account'}>
						<FontAwesomeIcon icon={faUser} />
					</Link>
				</div>
			</div>
			{props.children}
		</div>
	);
}
