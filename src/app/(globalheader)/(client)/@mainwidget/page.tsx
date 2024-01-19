'use client';

import { useAuth } from '@/components/Providers/AuthProvider/AuthProvider';
import {
	faCartPlus,
	faHeart,
	faLock,
	faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MainWidgets() {
	const auth = useAuth();
	return (
		<div className="flex gap-[2vw] items-center flex-wrap w-[95%] xs:flex-col xs:items-stretch xs:mx-auto md:flex-row md:items-center lg:mx-0 lg:mr-auto">
			<div className="bg-dark/20 shadow-xl shadow-dark/5 p-[1rem] rounded-sm font-spacemono font-semibold cursor-pointer transition-all hover:bg-dark/30 hover:-translate-y-2">
				<h2 className="text-2xl">
					<FontAwesomeIcon icon={faCartPlus} /> Cart
				</h2>
				<p>You have 10 items in cart</p>
			</div>
			<div className="bg-rose-600/20 shadow-xl shadow-rose-500/5 p-[1rem] rounded-sm font-spacemono font-semibold text-rose-800 cursor-pointer transition-all hover:bg-rose/30 hover:-translate-y-2">
				<h2 className="text-2xl">
					<FontAwesomeIcon icon={faHeart} /> Likes
				</h2>
				<p>10 likes items</p>
			</div>
			{auth && auth.user ? (
				<div className="bg-green-600/20 shadow-xl shadow-green-500/5 p-[1rem] rounded-sm font-spacemono font-semibold text-green-700 cursor-pointer grow transition-all hover:bg-green/30 hover:-translate-y-2">
					<h2 className="text-2xl">
						<FontAwesomeIcon icon={faUser} /> You are authorized as{' '}
						{auth.user?.username}
						<p className="text-base">Purchase something or save it</p>
					</h2>
				</div>
			) : (
				<div className="bg-orange-600/20 shadow-xl shadow-orange-500/5 p-[1rem] rounded-sm font-spacemono font-semibold text-orange-700 cursor-pointer grow transition-all hover:bg-orange/30 hover:-translate-y-2">
					<h2 className="text-2xl">
						<FontAwesomeIcon icon={faLock} /> Authorization
					</h2>
					<p>You are not authorizated</p>
				</div>
			)}
		</div>
	);
}
