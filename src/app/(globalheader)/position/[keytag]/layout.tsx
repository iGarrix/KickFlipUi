import type { Metadata } from 'next';
import ClothesView from '../../(client)/@clothesView/page';
import BagsView from '../../(client)/@bagsView/page';
import ShoesView from '../../(client)/@shoesView/page';
import AccessoriesView from '../../(client)/@accessoriesView/page';

export const metadata: Metadata = {
	title: 'Position Detail, KickFlip',
	description: 'Position Detail, KickFlip',
};

export default function KeytagLayout(props: { children: React.ReactNode }) {
	return (
		<div>
			<div className="min-h-svh">{props.children}</div>
			<div className="flex flex-col gap-[4rem]">
				<ClothesView />
				<ShoesView />
				<BagsView />
				<AccessoriesView />
			</div>
		</div>
	);
}
