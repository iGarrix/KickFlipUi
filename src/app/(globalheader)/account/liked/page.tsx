'use client';

import { OrderCard } from '@/components/custom/cards/ordercard/ordercard';
import { GetPositionImage } from '@/lib/apis/positions/positions.types';
import usePositionStorage from '@/lib/zustand_hooks/cartStorage/cartStorage';
import { faEuro } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';
import { Fragment } from 'react';
import { toast } from 'sonner';

export default function LikedPage() {
	const liked = usePositionStorage();
	const router = useRouter();

	function getTotal() {
		let sum = 0;
		liked.cart?.forEach((f) => {
			sum += Number(f.price);
		});
		return sum;
	}

	return (
		<Fragment>
			<div className="grow border-2 border-dark/80 p-[1rem] flex flex-col gap-[1rem]">
				{!liked.liked ||
					(liked.liked.length === 0 && (
						<div className="w-full text-center h-full flex items-center justify-center font-spacemono text-2xl font-semibold">
							<h1>Liked list is empty</h1>
						</div>
					))}

				{liked.liked?.map((item, key) => (
					<OrderCard
						title={item.name}
						desc={item.description}
						total={item.price}
						key={key}
						src={GetPositionImage(item.image[0]?.src)}
						onDelete={() => {
							liked.onRemoveFromLiked(item.code);
							toast(item.name, {
								description: 'Position has been removed from liked',
							});
						}}
						onViewDetail={() => {
							router.push('/position/' + item.code);
						}}
						size={item.size}
						shipping={item.shipping}
					/>
				))}
			</div>
			<div className="w-[30%] h-min max-h-[60vh] bg-gold sticky top-[10vh] font-spacemono flex flex-col flex-wrap gap-[1rem] p-[1.5rem] rounded-sm">
				<h2 className="text-2xl font-black">Liked List Details</h2>
				<div className="flex justify-between gap-[1rem] font-semibold text-[16px]">
					<p>Total</p>
					<p className="flex gap-[1rem] items-center">
						<FontAwesomeIcon icon={faEuro} />
						<span>{Number(getTotal()).toFixed(2)}</span>
					</p>
				</div>
			</div>
		</Fragment>
	);
}
