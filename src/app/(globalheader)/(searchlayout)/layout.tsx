import { SearchClient } from '@/components/custom/fields/SearchInput/seachinput.clientside';
import { faHeart, faCartPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function SearchLayout(props: { children: React.ReactNode }) {
	return (
		<div className="w-[95%] mr-auto flex flex-col h-full">
			<div className="flex justify-between">
				<SearchClient
					placeholder="Search anything by name, shipping, etc"
					urlValue="s"
				/>
				<div className="flex items-center justify-end gap-[2rem] ml-auto w-[calc(30%+2rem)] text-lg">
					<Link href={'/profile/liked'} className="relative">
						<div className="w-[6px] h-[6px] rounded-full bg-rose-600 absolute top-[-4px] right-[-8px]"></div>
						<FontAwesomeIcon icon={faHeart} />
					</Link>
					<Link href={'/profile/cart'} className="relative">
						<div className="w-[6px] h-[6px] rounded-full bg-rose-600 absolute top-[-4px] right-[-8px]"></div>
						<FontAwesomeIcon icon={faCartPlus} />
					</Link>
					<Link href={'/profile'}>
						<FontAwesomeIcon icon={faUser} />
					</Link>
				</div>
			</div>
			{props.children}
		</div>
	);
}
