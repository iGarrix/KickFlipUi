import { AuthProvider } from '@/components/Providers/AuthProvider/AuthProvider';
import { ProfileHeader } from '@/components/custom/profileheader/profile.header';
import type { Metadata } from 'next';
import { Fragment } from 'react';
import HeaderProfile from './Client_Account_1';
import AuthLoading from './loading';

export const metadata: Metadata = {
	title: 'Profile Kickflip',
	description: 'Profile Kickflip',
};

export default function ProfileLayout(props: {
	children: React.ReactNode;
	signin: React.ReactNode;
}) {
	return (
		<Fragment>
			<AuthProvider unauthorized={props.signin} loading={<AuthLoading />}>
				<div className="min-h-[100svh] pr-[10vw] flex flex-col gap-[1.5rem]">
					<HeaderProfile />
					<div>
						<ProfileHeader />
						<div className="flex gap-[1.5rem]">{props.children}</div>
					</div>
				</div>
			</AuthProvider>
		</Fragment>
	);
}
