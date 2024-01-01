'use client';

import { useRouter } from 'next/navigation';

//import style from './scss.style.module.scss';

export const Client_Keytag_2: React.FC<any> = ({ back, ...props }) => {
	const router = useRouter();
	return (
		<button
			onClick={() => {
				router.back();
			}}>
			{back}
		</button>
	);
};
