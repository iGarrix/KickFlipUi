/* eslint-disable react/no-unescaped-entities */
'use client';

import {
	faAngleRight,
	faBagShopping,
	faBolt,
	faCartPlus,
	faGlasses,
	faHeart,
	faShirt,
	faShoePrints,
	faUser,
	faUserCircle,
	faUserGear,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Fragment, useState } from 'react';
import {
	Drawer,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer';
import { Btn } from '../Btn/btn';
import { useAuth } from '@/components/Providers/AuthProvider/AuthProvider';
import { Logout } from '@/lib/apis/auth/auth.controller';
import { toast } from 'sonner';
//import style from './scss.style.module.scss';

interface IGlobalPhoneHeaderProps {}

export const GlobalPhoneHeader: React.FC<IGlobalPhoneHeaderProps> = ({
	...props
}) => {
	const router = useRouter();
	const pathname = usePathname();

	const [drawer, setDrawer] = useState(false);
	const auth = useAuth();

	async function logout() {
		if (auth && auth.accessToken) {
			await Logout(auth.accessToken);
			auth.onSignIn(null);
			auth.onSignToken(null);
			toast('Authentication logout', {
				description: 'Log out of account successfully',
			});
		}
	}
	return (
		<Fragment>
			<ul className="fixed bottom-0 left-0 w-full grid grid-cols-4 h-[4rem] items-center whitespace-nowrap overflow-y-auto z-20 bg-light/90 border-t border-t-dark/20 rounded-t-md backdrop-blur hidescrollbar xs:grid lg:hidden">
				<Link href={'/'}>
					<li className="text-center py-[0.5rem] transition-all text-dark hover:text-yellow-500">
						<FontAwesomeIcon icon={faBolt} />
						<p className="text-sm">In New</p>
					</li>
				</Link>
				<Link href={'/account/liked'}>
					<li className="text-center py-[0.5rem] transition-all text-dark hover:text-yellow-500">
						<FontAwesomeIcon icon={faHeart} />
						<p className="text-sm">Liked</p>
					</li>
				</Link>
				<Link href={'/account/cart'}>
					<li className="text-center py-[0.5rem] transition-all text-dark hover:text-yellow-500">
						<FontAwesomeIcon icon={faCartPlus} />
						<p className="text-sm">Cart</p>
					</li>
				</Link>
				<Drawer open={drawer} onOpenChange={setDrawer}>
					<DrawerTrigger asChild>
						<li className="text-center py-[0.5rem] transition-all text-dark hover:text-yellow-500 cursor-pointer">
							<FontAwesomeIcon icon={faUser} />
							<p className="text-sm">Profile</p>
						</li>
					</DrawerTrigger>
					<DrawerContent className="bg-light pb-[2vh]">
						<DrawerHeader className="text-left">
							<DrawerTitle>Navigation menu</DrawerTitle>
						</DrawerHeader>
						<ul className="px-[1rem] font-spacemono flex flex-col gap-[0.5rem]">
							{auth.user ? (
								<Link
									href={'/account'}
									onClick={() => {
										setDrawer(false);
									}}>
									<div className="rounded border w-full px-[3%] py-[0.5rem] flex gap-[1rem] transition-all hover:bg-lime-500/10 hover:shadow-xl hover:shadow-lime-500/10">
										<FontAwesomeIcon
											icon={faUserCircle}
											className="text-lime-500 w-[40px] h-[40px] text-center text-5xl"
										/>
										<div>
											<h3 className="font-semibold text-xl">Username</h3>
											<p className="text-sm text-neutral-500">user@gmail.com</p>
										</div>
									</div>
								</Link>
							) : (
								<div className="rounded border w-full px-[3%] py-[0.5rem] flex gap-[1rem] transition-all hover:bg-rose-500/10 hover:shadow-xl hover:shadow-rose-500/10">
									<FontAwesomeIcon
										icon={faUserCircle}
										className="text-rose-500 w-[40px] h-[40px] text-center text-5xl"
									/>
									<div>
										<h3 className="font-semibold text-xl">You aren't logged</h3>
										<p className="text-sm text-neutral-500">
											Sign in to purchase something
										</p>
									</div>
								</div>
							)}
							<Link
								href={'/clothing'}
								onClick={() => {
									setDrawer(false);
								}}>
								<li className="flex gap-[1rem] items-center justify-between px-[3%] py-[0.5rem] rounded border cursor-pointer transition-all hover:pr-[2%]">
									<div className="flex">
										<div className="w-[32px] text-center">
											<FontAwesomeIcon icon={faShirt} />
										</div>
										<span className="col-span-3">Clothing</span>
									</div>
									<FontAwesomeIcon icon={faAngleRight} />
								</li>
							</Link>
							<Link
								href={'/shoes'}
								onClick={() => {
									setDrawer(false);
								}}>
								<li className="flex gap-[1rem] items-center justify-between px-[3%] py-[0.5rem] rounded border cursor-pointer transition-all hover:pr-[2%]">
									<div className="flex">
										<div className="w-[32px] text-center">
											<FontAwesomeIcon icon={faShoePrints} />
										</div>
										<span className="col-span-3">Shoes</span>
									</div>
									<FontAwesomeIcon icon={faAngleRight} />
								</li>
							</Link>
							<Link
								href={'/bags'}
								onClick={() => {
									setDrawer(false);
								}}>
								<li className="flex gap-[1rem] items-center justify-between px-[3%] py-[0.5rem] rounded border cursor-pointer transition-all hover:pr-[2%]">
									<div className="flex">
										<div className="w-[32px] text-center">
											<FontAwesomeIcon icon={faBagShopping} />
										</div>
										<span className="col-span-3">Bags</span>
									</div>
									<FontAwesomeIcon icon={faAngleRight} />
								</li>
							</Link>
							<Link
								href={'/accessories'}
								onClick={() => {
									setDrawer(false);
								}}>
								<li className="flex gap-[1rem] items-center justify-between px-[3%] py-[0.5rem] rounded border cursor-pointer transition-all hover:pr-[2%]">
									<div className="flex">
										<div className="w-[32px] text-center">
											<FontAwesomeIcon icon={faGlasses} />
										</div>
										<span className="col-span-3">Accessories</span>
									</div>
									<FontAwesomeIcon icon={faAngleRight} />
								</li>
							</Link>
						</ul>
						<DrawerFooter>
							{auth.user ? (
								<Btn
									className="bg-rose-500 rounded hover:border-rose-500 hover:text-rose-500"
									onClick={async () => {
										await logout();
										setDrawer(false);
									}}>
									Log out
								</Btn>
							) : (
								<Btn
									className="bg-lime-500 rounded hover:border-lime-500 hover:text-lime-500"
									onClick={() => {
										router.push('/account');
										setDrawer(false);
									}}>
									Sign in
								</Btn>
							)}
						</DrawerFooter>
					</DrawerContent>
				</Drawer>
			</ul>
		</Fragment>
	);
};
