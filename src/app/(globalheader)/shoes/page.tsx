import { PositionCard } from '@/components/custom/cards/positioncard/positioncard';
import { SearchClient } from '@/components/custom/fields/SearchInput/seachinput.clientside';
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import { faCartPlus, faEuro } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function ShoesPage(props: {
	searchParams: { [key: string]: string | undefined };
}) {
	return (
		<div className="w-[95%] mr-auto flex flex-col">
			<div className="flex justify-between">
				<SearchClient
					placeholder="Search shoes by name, shipping, etc"
					pathname="/clothing/"
					urlValue="s"
					defValue={props.searchParams.s}
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
			<br />
			<h1 className="font-spacemono font-semibold text-3xl line-clamp-1 w-[calc(70%-2rem)] mr-auto">
				{props.searchParams.s
					? `Found 10 results by ${props.searchParams.s}`
					: 'Shoes'}
			</h1>
			<br />
			<div className="flex gap-[2rem]">
				<div className="grid grid-cols-1 gap-[1rem] grow">
					<PositionCard
						src={
							'https://content2.rozetka.com.ua/goods/images/big/218279819.jpg'
						}
						title={'Globe'}
						desc={'Classic - 40'}
						size={'xl'}
						quantity={2}
						total={'750'}
						shipping={'Italy'}
					/>
					<PositionCard
						src={
							'https://content2.rozetka.com.ua/goods/images/big/218279819.jpg'
						}
						title={'Globe'}
						desc={'Classic - 40'}
						size={'xl'}
						quantity={2}
						total={'750'}
						shipping={'Italy'}
					/>
					<PositionCard
						src={
							'https://content2.rozetka.com.ua/goods/images/big/218279819.jpg'
						}
						title={'Globe'}
						desc={'Classic - 40'}
						size={'xl'}
						quantity={2}
						total={'750'}
						shipping={'Italy'}
					/>
					<PositionCard
						src={
							'https://content2.rozetka.com.ua/goods/images/big/218279819.jpg'
						}
						title={'Globe'}
						desc={'Classic - 40'}
						size={'xl'}
						quantity={2}
						total={'750'}
						shipping={'Italy'}
					/>
					<PositionCard
						src={
							'https://content2.rozetka.com.ua/goods/images/big/218279819.jpg'
						}
						title={'Globe'}
						desc={'Classic - 40'}
						size={'xl'}
						quantity={2}
						total={'750'}
						shipping={'Italy'}
					/>
					<PositionCard
						src={
							'https://content2.rozetka.com.ua/goods/images/big/218279819.jpg'
						}
						title={'Globe'}
						desc={'Classic - 40'}
						size={'xl'}
						quantity={2}
						total={'750'}
						shipping={'Italy'}
					/>
					<PositionCard
						src={
							'https://content2.rozetka.com.ua/goods/images/big/218279819.jpg'
						}
						title={'Globe'}
						desc={'Classic - 40'}
						size={'xl'}
						quantity={2}
						total={'750'}
						shipping={'Italy'}
					/>
				</div>
				<div className="w-[30%] bg-gold h-max sticky top-[10vh] right-0 font-spacemono flex flex-col flex-wrap gap-[1rem] p-[1.5rem] rounded-sm">
					<h2 className="text-2xl font-black">Item Short Details</h2>
					<div className="flex justify-between gap-[1rem] font-semibold text-[16px]">
						<p>Dropshipping</p>
						<p>-15%</p>
					</div>
					<div className="flex justify-between gap-[1rem] font-semibold text-[16px]">
						<p>Subtotal</p>
						<p className="flex gap-[1rem] items-center">
							<FontAwesomeIcon icon={faEuro} />
							<span>630.00</span>
						</p>
					</div>
					<div className="flex justify-between gap-[1rem] font-semibold text-[16px]">
						<p>Total</p>
						<p className="flex gap-[1rem] items-center">
							<FontAwesomeIcon icon={faEuro} />
							<span>{(Number('630.00') - Number('94.50')).toFixed(2)}</span>
						</p>
					</div>
					<hr className="border-dark/40" />
					<div className="flex justify-between gap-[1rem] font-semibold text-[16px]">
						<p>Promocode</p>
						<p>SQRS-KGIS-GGTD</p>
					</div>
					<hr className="border-dark/40 mt-auto" />
				</div>
			</div>
		</div>
	);
}
