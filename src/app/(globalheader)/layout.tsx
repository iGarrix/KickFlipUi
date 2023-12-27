import { GlobalHeader } from '@/components/custom/globalheader/globalheader';

export default function GlobalHeaderLayout(props: {
	children: React.ReactNode;
}) {
	return (
		<div className="relative flex gap-[7vw]">
			<GlobalHeader />
			<div className="py-[5vh] w-full grow pl-[12rem]">{props.children}</div>
		</div>
	);
}
