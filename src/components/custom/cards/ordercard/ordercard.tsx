'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { faSpinner, faEuro, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//import style from './scss.style.module.scss';

interface IOrderCardProps {
	src: string;
	title: string;
	desc: string;
	size: string;
	quantity: number;
	total: string;
	shipping: string;
	onViewDetail?: () => void;
	onDelete?: () => void;
}

export const OrderCard: React.FC<IOrderCardProps> = ({ ...props }) => {
	return (
		<div className="border-2 border-dark/80 font-spacemono">
			<aside className="border-b-2 border-b-dark/80 test-sm p-[1rem] py-[0.2rem] font-semibold flex items-center justify-between">
				<span>Shipping from {props.shipping}</span>
				<div className="flex gap-[1rem] items-center">
					<button onClick={props.onViewDetail}>View details</button>
					{props.onDelete && (
						<button onClick={props.onDelete}>
							<FontAwesomeIcon
								icon={faTrash}
								className="transition-all hover:text-rose-500"
							/>
						</button>
					)}
				</div>
			</aside>
			<aside className="flex p-[1rem] items-center gap-[2rem]">
				<Avatar className="w-[90px] h-[90px] border-2 border-dark/80">
					<AvatarImage
						className="w-full h-full bg-cover bg-center"
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
					<h3 className="text-2xl font-semibold">{props.title}</h3>
					<p className="text-sm font-semibold">{props.desc}</p>
				</div>
				<div className="">
					<h3 className="font-semibold">
						Size: <span className="uppercase">{props.size}</span>
					</h3>
					<p className="font-semibold">Quantity: {props.quantity}</p>
				</div>
				<p className="flex gap-[1rem] items-center font-semibold text-2xl ml-auto">
					<FontAwesomeIcon icon={faEuro} />
					<span>{Number(props.total).toFixed(2)}</span>
				</p>
			</aside>
		</div>
	);
};
