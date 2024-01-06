import { AuthProvider } from '@/components/Providers/AuthProvider/AuthProvider';
import type { Metadata } from 'next';
import AuthLoading from '../account/loading';
import SignIn from '../account/@signin/page';

export const metadata: Metadata = {
	title: 'Checkout',
	description: 'Checkout KickFlip',
};

export default function CheckoutLayout(props: { children: React.ReactNode }) {
	return (
		<AuthProvider unauthorized={<SignIn />} loading={<AuthLoading />}>
			{props.children}
		</AuthProvider>
	);
}
