import { Btn } from '@/components/custom/Btn/btn';
import { ProfileHeader } from '@/components/custom/profileheader/profile.header';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Profile Kickflip',
	description: 'Profile Kickflip',
};

export default function ProfileLayout(props: { children: React.ReactNode }) {
	return (
		<div className="min-h-[100svh] px-[15vw] py-[10vh] flex flex-col gap-[1.5rem]">
			<div className="flex justify-between gap-[2vw] items-center">
				<h1 className="text-5xl font-spacemono font-black">
					👋 Hello John Terner
				</h1>
				<aside className="flex items-center space-x-[1rem]">
					<Link href={'/'} className="text-blue-500">
						<FontAwesomeIcon icon={faArrowLeft} className="text-sm" /> Back to
						main
					</Link>
					<Btn>sign out</Btn>
				</aside>
			</div>
			<div>
				<ProfileHeader />
				<div className="flex gap-[1.5rem]">{props.children}</div>
			</div>
		</div>
	);
}
