import { AuthProvider } from '@/components/Providers/AuthProvider/AuthProvider';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Fick Flip Dropshipping',
	description: 'Kick Flip Dropshipping Platform',
};

export default function ClientLayout(props: {
	children: React.ReactNode;
	clothesView: React.ReactNode;
	shoesView: React.ReactNode;
	bagsView: React.ReactNode;
	accessoriesView: React.ReactNode;
	mainwidget: React.ReactNode;
}) {
	return (
		<div className="flex flex-col gap-[3rem]">
			{props.children}
			<br />
			<AuthProvider unauthorized={props.mainwidget} loading={undefined}>
				{props.mainwidget}
			</AuthProvider>
			<h1 className="font-spacemono font-black text-3xl xs:w-[95%] lg:w-full mx-auto">
				Items shipping{' '}
				<FontAwesomeIcon icon={faArrowRight} className="-rotate-45" />
			</h1>
			{props.clothesView}
			{props.shoesView}
			{props.bagsView}
			{props.accessoriesView}
		</div>
	);
}
