'use client';
import { OrderCard } from '@/components/custom/cards/ordercard/ordercard';
import { faEuro } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment } from 'react';
import { Btn } from '@/components/custom/Btn/btn';

export default function CartPage() {
	return (
		<Fragment>
			<div className="grow border-2 border-dark/80 p-[1rem] flex flex-col gap-[1rem]">
				<OrderCard
					src={'https://content2.rozetka.com.ua/goods/images/big/218279819.jpg'}
					title={'Globe'}
					desc={'Classic - 40'}
					size={'xl'}
					quantity={2}
					total={'750'}
					shipping={'Italy'}
					onDelete={() => {}}
				/>
				<OrderCard
					src={'https://content2.rozetka.com.ua/goods/images/big/218279819.jpg'}
					title={'Globe'}
					desc={'Classic - 40'}
					size={'xl'}
					quantity={2}
					total={'750'}
					shipping={'Italy'}
					onDelete={() => {}}
				/>
				<OrderCard
					src={'https://content2.rozetka.com.ua/goods/images/big/218279819.jpg'}
					title={'Globe'}
					desc={'Classic - 40'}
					size={'xl'}
					quantity={2}
					total={'750'}
					shipping={'Italy'}
					onDelete={() => {}}
				/>
				<OrderCard
					src={'https://content2.rozetka.com.ua/goods/images/big/218279819.jpg'}
					title={'Globe'}
					desc={'Classic - 40'}
					size={'xl'}
					quantity={2}
					total={'750'}
					shipping={'Italy'}
					onDelete={() => {}}
				/>
				<OrderCard
					src={'https://content2.rozetka.com.ua/goods/images/big/218279819.jpg'}
					title={'Globe'}
					desc={'Classic - 40'}
					size={'xl'}
					quantity={2}
					total={'750'}
					shipping={'Italy'}
					onDelete={() => {}}
				/>
			</div>
			<div className="w-[30%] h-min max-h-[60vh] bg-gold sticky top-[22vh] font-spacemono flex flex-col flex-wrap gap-[1rem] p-[1.5rem] rounded-sm">
				<h2 className="text-2xl font-black">Cart Details</h2>
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
				<Btn>Go to checkout</Btn>
			</div>
		</Fragment>
	);
}
