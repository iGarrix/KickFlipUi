'use client';

import { useAuth } from '@/components/Providers/AuthProvider/AuthProvider';
import { Btn } from '@/components/custom/Btn/btn';
import { IBaseErrorState } from '@/lib/api_requests/common.fetches';
import { Logout } from '@/lib/apis/auth/auth.controller';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { toast } from 'sonner';

export default function HeaderProfile() {
	const { user, accessToken, onSignIn, onSignToken } = useAuth();

	async function onRevoke() {
		try {
			if (!accessToken) {
				throw {
					message: ['You are not authenticated'],
				};
			}
			await Logout(accessToken);
			onSignIn(null);
			onSignToken(null);
			toast('Authentication logout', {
				description: 'Log out of account successfully',
			});
		} catch (error) {
			console.log(error);
			const _err = error as IBaseErrorState;
			toast('Authentication logout', {
				description: _err.message.join(', '),
			});
		}
	}

	return (
		<div className="flex justify-between gap-[2vw] items-center">
			<h1 className="text-5xl font-spacemono font-black">
				👋 Hello {user?.username}
			</h1>
			<aside className="flex items-center space-x-[1rem]">
				<Link href={'/'} className="text-blue-500">
					<FontAwesomeIcon icon={faArrowLeft} className="text-sm" /> Back to
					main
				</Link>
				<Btn onClick={onRevoke}>sign out</Btn>
			</aside>
		</div>
	);
}
