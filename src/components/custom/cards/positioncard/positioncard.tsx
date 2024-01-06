'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { faSpinner, faEuro, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';
import { IPosition } from '@/lib/apis/positions/positions.types';

//import style from './scss.style.module.scss';

interface IPositionCardProps extends IPosition {
	src: string;
	onViewShortDetail?: () => void;
	onAddToCard?: () => void;
}

export const PositionCard: React.FC<IPositionCardProps> = ({ ...props }) => {
	const router = useRouter();

	return (
		<div className="border-2 border-dark/80 font-spacemono h-min">
			<aside className="border-b-2 border-b-dark/80 test-sm p-[1rem] py-[0.2rem] font-semibold flex items-center justify-between">
				<span>Shipping from {props.shipping}</span>
			</aside>
			<aside className="flex p-[1rem] items-center gap-[2rem] pr-[2rem]">
				<Avatar className="min-w-[150px] w-[150px] h-[150px]">
					<AvatarImage
						className="w-full h-full object-cover bg-cover bg-center"
						src={props.src}
					/>
					<AvatarFallback className="w-full h-full flex justify-center items-center">
						<FontAwesomeIcon
							icon={faSpinner}
							className="animate-spin text-2xl"
						/>
					</AvatarFallback>
				</Avatar>
				<div className="grow">
					<h3 className="text-3xl font-semibold uppercase">{props.name}</h3>
					<p className="text-sm font-semibold text-neutral-500 line-clamp-3">
						{props.description}
					</p>
					<br />
					<div className="flex items-start gap-[1rem] font-semibold text-sm">
						<button
							className="text-blue-500 transition-all hover:text-indigo-600 outline-none"
							onClick={() => {
								router.push(`/position/${props.code}`);
							}}>
							more details
						</button>
						<button
							className="text-blue-500 transition-all hover:text-indigo-600 outline-none"
							onClick={props.onAddToCard}>
							add to cart
						</button>
						<button
							className="text-blue-500 transition-all hover:text-indigo-600 outline-none"
							onClick={props.onViewShortDetail}>
							short details
						</button>
					</div>
				</div>
				<div className="flex flex-col items-start whitespace-nowrap">
					<p className="flex items-center font-semibold text-2xl">
						<FontAwesomeIcon icon={faEuro} />
						<span>{Number(props.price).toFixed(2)}</span>
					</p>
					<br />
					<h3 className="font-semibold">
						Size: <span className="uppercase">{props.size}</span>
					</h3>
				</div>
			</aside>
		</div>
	);
};
