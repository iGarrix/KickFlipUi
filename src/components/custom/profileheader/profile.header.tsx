'use client';

import { usePathname, useRouter } from 'next/navigation';

//import style from './scss.style.module.scss';

interface IProfileHeaderProps {}

export const ProfileHeader: React.FC<IProfileHeaderProps> = ({ ...props }) => {
	const router = useRouter();
	const pathname = usePathname();
	return (
		<header>
			<button
				className={`px-[1rem] py-[0.5rem] font-spacemono font-semibold outline-none ${
					pathname === '/account' &&
					'border-x-2 border-t-2 border-x-dark/80 border-t-dark/80 border-b-0'
				}`}
				onClick={() => {
					router.push('/account');
				}}>
				Orders & Returns
			</button>
			<button
				className={`px-[1rem] py-[0.5rem] font-spacemono font-semibold outline-none ${
					pathname.includes('cart') &&
					'border-x-2 border-t-2 border-x-dark/80 border-t-dark/80 border-b-0'
				}`}
				onClick={() => {
					router.push('/account/cart');
				}}>
				Cart
			</button>
			<button
				className={`px-[1rem] py-[0.5rem] font-spacemono font-semibold outline-none ${
					pathname.includes('liked') &&
					'border-x-2 border-t-2 border-x-dark/80 border-t-dark/80 border-b-0'
				}`}
				onClick={() => {
					router.push('/account/liked');
				}}>
				Liked
			</button>
			<button
				className={`px-[1rem] py-[0.5rem] font-spacemono font-semibold outline-none ${
					pathname.includes('create-item') &&
					'border-x-2 border-t-2 border-x-dark/80 border-t-dark/80 border-b-0'
				}`}
				onClick={() => {
					router.push('/account/create-item');
				}}>
				Add an item
			</button>
			<button
				className={`px-[1rem] py-[0.5rem] font-spacemono font-semibold outline-none ${
					pathname.includes('settings') &&
					'border-x-2 border-t-2 border-x-dark/80 border-t-dark/80 border-b-0'
				}`}
				onClick={() => {
					router.push('/account/settings');
				}}>
				Settings
			</button>
		</header>
	);
};
