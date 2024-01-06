'use client';
import { OrderCard } from '@/components/custom/cards/ordercard/ordercard';
import { faEuro } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment } from 'react';
import { Btn } from '@/components/custom/Btn/btn';
import usePositionStorage from '@/lib/zustand_hooks/cartStorage/cartStorage';
import { toast } from 'sonner';
import { GetPositionImage } from '@/lib/apis/positions/positions.types';
import { useRouter } from 'next/navigation';

export default function CartPage() {
	const cart = usePositionStorage();
	const router = useRouter();

	function getTotal() {
		let sum = 0;
		cart.cart?.forEach((f) => {
			sum += Number(f.price);
		});
		return sum;
	}
	return (
		<Fragment>
			<div className="grow border-2 border-dark/80 p-[1rem] flex flex-col gap-[1rem]">
				{!cart.cart ||
					(cart.cart.length === 0 && (
						<div className="w-full text-center h-full flex items-center justify-center font-spacemono text-2xl font-semibold">
							<h1>Cart is empty</h1>
						</div>
					))}

				{cart.cart?.map((item, key) => (
					<OrderCard
						title={item.name}
						desc={item.description}
						total={item.price}
						key={key}
						src={GetPositionImage(item.image[0]?.src)}
						onDelete={() => {
							cart.onRemoveFromCart(item.code);
							toast(item.name, {
								description: 'Position has been removed from cart',
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
				<h2 className="text-2xl font-black">Cart Details</h2>
				<div className="flex justify-between gap-[1rem] font-semibold text-[16px]">
					<p>Total</p>
					<p className="flex gap-[1rem] items-center">
						<FontAwesomeIcon icon={faEuro} />
						<span>{Number(getTotal()).toFixed(2)}</span>
					</p>
				</div>
				<hr className="border-dark/40 mt-auto" />
				<Btn
					onClick={() => {
						router.push('checkout');
					}}>
					Go to checkout
				</Btn>
			</div>
		</Fragment>
	);
}
