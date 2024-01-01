import { GetPositionByCode } from '@/serverside/apis/positions/positions.controller';
import NotFoundPosition from './not-found';
import { Client_Keytag_1 } from './client_keytag_1';
import { Client_Keytag_2 } from './client_keytag_2';
export default async function PositionDetailPage(props: {
	params: { keytag: string };
}) {
	const findPos = await GetPositionByCode(props.params.keytag);
	if (!findPos) {
		return <NotFoundPosition />;
	}
	return (
		<div className="w-[95%] mx-auto xs:w-[98%] lg:w-[95%] flex flex-col gap-[4rem]">
			<div className="font-semibold text-sm flex items-center gap-[0.5rem] flex-wrap">
				<span>Home</span>
				<span>{'>'}</span>
				<span>Position</span>
				<span>{'>'}</span>
				<span>Details</span>
				<span>{'>'}</span>
				<span>{findPos?.description}</span>
				<span>{'|'}</span>
				<Client_Keytag_2 back={'Back'} />
			</div>
			<Client_Keytag_1
				findPos={findPos}
				// Second variant
				// images={findPos.image.map((item) => {
				// 	return { src: GetPositionImage(item.src) };
				// })}
			/>
		</div>
	);
}
