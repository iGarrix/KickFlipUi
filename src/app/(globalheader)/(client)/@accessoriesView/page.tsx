import { ItemCard } from '@/components/custom/cards/itemcard/itemcard';
import { GetPositions } from '@/serverside/apis/positions/positions.controller';
import { GetPositionImage } from '@/serverside/apis/positions/positions.types';
import Link from 'next/link';

export default async function AccessoriesView() {
	const data = await GetPositions({
		take: 5,
		page: 1,
		ca: 'Accessories',
	});
	return (
		<div className="w-[95%] xs:flex-col xs:items-stretch xs:mx-auto md:flex-row md:items-center lg:mx-0 lg:mr-auto">
			<p className="font-semibold text-sm flex items-center gap-[0.5rem] flex-wrap">
				<span>Home</span>
				<span>{'>'}</span>
				<Link href="/accessories">Accessories</Link>
				<span>{'>'}</span>
				<span>Latests</span>
				<span>{'>'}</span>
				<span>Recommended</span>
			</p>
			<br />
			<div className="w-full grid grid-cols-5 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 h-full border-2 border-dark/80 bg-dark/80 gap-[2px]">
				{data &&
					data.data.map((item, key) => (
						<ItemCard
							key={key}
							code={item.code}
							src={GetPositionImage(item.image[0]?.src)}
							title={item.name}
							desc={item.description}
							price={item.price}
						/>
					))}
			</div>
		</div>
	);
}
