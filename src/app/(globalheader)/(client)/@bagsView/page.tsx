'use client';

import { ItemCard } from '@/components/custom/cards/itemcard/itemcard';
import Link from 'next/link';

export default function BagsView() {
	return (
		<div className="w-[95%] mr-auto">
			<p className="font-semibold text-sm flex items-center gap-[0.5rem]">
				<span>Home</span>
				<span>{'>'}</span>
				<Link href={'/bags'}>Bags</Link>
				<span>{'>'}</span>
				<span>Latests</span>
				<span>{'>'}</span>
				<span>Recommended</span>
			</p>
			<br />
			<div className="w-full grid grid-cols-5 h-full border-2 border-dark/80 bg-dark/80 gap-[2px]">
				<ItemCard
					src={
						'https://www.shelfies.com/cdn/shop/products/blueberryinvasion_tshirt_preview_1000x.jpg?v=1578092372'
					}
					title={'Globe'}
					desc={'Classic - 38'}
					price={'230'}
				/>
				<ItemCard
					src={
						'https://www.shelfies.com/cdn/shop/products/blueberryinvasion_tshirt_preview_1000x.jpg?v=1578092372'
					}
					title={'Globe'}
					desc={'Classic - 38'}
					price={'230'}
				/>
				<ItemCard
					src={
						'https://www.shelfies.com/cdn/shop/products/blueberryinvasion_tshirt_preview_1000x.jpg?v=1578092372'
					}
					title={'Globe'}
					desc={'Classic - 38'}
					price={'230'}
				/>
				<ItemCard
					src={
						'https://www.shelfies.com/cdn/shop/products/blueberryinvasion_tshirt_preview_1000x.jpg?v=1578092372'
					}
					title={'Globe'}
					desc={'Classic - 38'}
					price={'230'}
				/>
				<ItemCard
					src={
						'https://www.shelfies.com/cdn/shop/products/blueberryinvasion_tshirt_preview_1000x.jpg?v=1578092372'
					}
					title={'Globe'}
					desc={'Classic - 38'}
					price={'230'}
				/>
			</div>
		</div>
	);
}
