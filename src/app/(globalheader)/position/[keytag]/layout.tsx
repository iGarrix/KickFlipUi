import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Position Detail, KickFlip',
	description: 'Position Detail, KickFlip',
};

export default function KeytagLayout(props: { children: React.ReactNode }) {
	return (
		<div>
			<div className="min-h-svh">{props.children}</div>
		</div>
	);
}
