import { GlobalHeader } from '@/components/custom/globalheader/globalheader';
import { GlobalPhoneHeader } from '@/components/custom/globalphoneheader/globalphoneheader';
import { Fragment } from 'react';

export default function GlobalHeaderLayout(props: {
	children: React.ReactNode;
}) {
	return (
		<Fragment>
			<GlobalPhoneHeader />
			<div className="relative flex gap-[7vw] min-h-svh pt-[5vh] xs:pt-[2vh] lg:pt-[5vh]">
				<GlobalHeader />
				<div className="pb-[5vh] w-full grow pl-[12rem] xs:pl-0 lg:pl-[12rem]">
					{props.children}
					<div className="w-full h-[4rem] xs:block lg:hidden"></div>
				</div>
			</div>
		</Fragment>
	);
}
