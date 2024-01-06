'use client';

import { faEuro } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Stepper } from '@/components/custom/Stepper/stepper';

export default function Checkout() {
	const onSubmit = () => {
		console.log('Submit');
	};

	return (
		<div className="flex gap-[2.5rem] pr-[10vw]">
			<Stepper
				selectedKey={0}
				items={[
					{
						status: 'still',
						title: 'Select positions',
						children: (
							<div className="py-[1rem]">
								<span>Test checkout step 1 [added new feature or fix]</span>{' '}
								<span>from checkout 2 to main</span>
							</div>
						),
					},
					{
						status: 'noview',
						title: 'Promocodes',
						children: <div className="py-[1rem]">Test checkout step 2</div>,
					},
					{
						status: 'noview',
						title: 'Checkout',
						children: <div className="py-[1rem]">54121254548</div>,
					},
				]}
			/>
			<div className="w-[30%] h-min max-h-[60vh] bg-gold sticky top-[10vh] font-spacemono flex flex-col flex-wrap gap-[1rem] p-[1.5rem] rounded-sm">
				<h2 className="text-2xl font-black">Checkout</h2>
				<div className="flex justify-between gap-[1rem] font-semibold text-[16px]">
					<p>Total2</p>
					<p className="flex gap-[1rem] items-center">
						<FontAwesomeIcon icon={faEuro} />
						<span>{Number('200').toFixed(2)}</span>
					</p>
				</div>
				<hr className="border-dark/40 mt-auto" />
			</div>
		</div>
	);
}
