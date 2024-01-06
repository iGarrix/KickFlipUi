'use client';

import {
	faBagShopping,
	faBolt,
	faCartPlus,
	faGlasses,
	faShirt,
	faShoePrints,
	faUser,
	faUserGear,
} from '@fortawesome/free-solid-svg-icons';
import { faShoelace } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { usePathname, useRouter } from 'next/navigation';

//import style from './scss.style.module.scss';

interface IGlobalHeaderProps {}

export const GlobalHeader: React.FC<IGlobalHeaderProps> = ({ ...props }) => {
	const router = useRouter();
	const pathname = usePathname();
	return (
		<header className="fixed top-0 left-0 h-screen flex flex-col items-center py-[5vh] whitespace-nowrap overflow-y-auto z-20 bg-light hidescrollbar xs:hidden lg:flex">
			<button
				onClick={() => {
					router.push('/');
				}}>
				<div className="bg-dark rounded-full leading-none flex items-center justify-center text-center font-spacemono font-black text-lg text-light min-w-[54px] min-h-[54px] shadow-xl shadow-dark/40">
					<FontAwesomeIcon icon={faShoelace} />
				</div>
			</button>
			<br />
			<br />
			<button
				className="flex flex-col items-center gap-[0.5rem] w-full px-[1rem] py-[1.5rem] transition-all hover:bg-dark/5"
				onClick={() => {
					router.push('/');
				}}>
				<FontAwesomeIcon icon={faBolt} />
				<p className="text-sm">In new</p>
			</button>
			<button
				className="flex flex-col items-center gap-[0.5rem] w-full px-[1rem] py-[1.5rem] transition-all hover:bg-dark/5"
				onClick={() => {
					router.push('/clothing');
				}}>
				<FontAwesomeIcon icon={faShirt} />
				<p className="text-sm">Clothing</p>
			</button>
			<button
				className="flex flex-col items-center gap-[0.5rem] w-full px-[1rem] py-[1.5rem] transition-all hover:bg-dark/5"
				onClick={() => {
					router.push('/shoes');
				}}>
				<FontAwesomeIcon icon={faShoePrints} />
				<p className="text-sm">Shoes</p>
			</button>
			<button
				className="flex flex-col items-center gap-[0.5rem] w-full px-[1rem] py-[1.5rem] transition-all hover:bg-dark/5"
				onClick={() => {
					router.push('/bags');
				}}>
				<FontAwesomeIcon icon={faBagShopping} />
				<p className="text-sm">Bags</p>
			</button>
			<button
				className="flex flex-col items-center gap-[0.5rem] w-full px-[1rem] py-[1.5rem] transition-all hover:bg-dark/5"
				onClick={() => {
					router.push('/accessories');
				}}>
				<FontAwesomeIcon icon={faGlasses} />
				<p className="text-sm">Accessories</p>
			</button>
			<hr className="w-full border-dark/20" />
			<button
				className="flex flex-col items-center gap-[0.5rem] w-full px-[1rem] py-[1.5rem] transition-all hover:bg-dark/5"
				onClick={() => {
					router.push('/account/cart');
				}}>
				<FontAwesomeIcon icon={faCartPlus} />
				<p className="text-sm">Cart</p>
			</button>
			<button
				className="flex flex-col items-center gap-[0.5rem] w-full px-[1rem] py-[1.5rem] transition-all hover:bg-dark/5"
				onClick={() => {
					router.push('/account');
				}}>
				<FontAwesomeIcon icon={faUserGear} />
				<p className="text-sm">Profile</p>
			</button>
		</header>
	);
};
