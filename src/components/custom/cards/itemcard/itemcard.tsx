//import style from './scss.style.module.scss';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
	faCartPlus,
	faEye,
	faSpinner,
	faEuro,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IItemCardProps {
	title: string;
	desc: string;
	price: string;
	src: string;
	onAddToCard?: () => void;
	onView?: () => void;
}

export const ItemCard: React.FC<IItemCardProps> = ({ ...props }) => {
	return (
		<div className="bg-light font-spacemono font-semibold px-[1rem] py-[1rem] transition-all hover:scale-105 border-2 border-dark/0 hover:border-dark/80 hover:translate-x-3 hover:-translate-y-3">
			<div className="flex justify-center relative">
				<div className="absolute top-0 left-0 flex">
					<button
						className="rounded-none w-[32px] h-[32px] flex justify-center items-center transition-all hover:bg-dark/20 z-10"
						onClick={props.onAddToCard}>
						<FontAwesomeIcon
							icon={faCartPlus}
							className="leading-none text-center"
						/>
					</button>
					<button
						className="rounded-none w-[32px] h-[32px] flex justify-center items-center transition-all hover:bg-dark/20 z-10"
						onClick={props.onView}>
						<FontAwesomeIcon
							icon={faEye}
							className="leading-none text-center"
						/>
					</button>
				</div>
				<Avatar>
					<AvatarImage
						className="w-[250px] h-full object-contain object-center mix-blend-multiply"
						src={props.src}
						alt="img"
					/>
					<AvatarFallback className="w-[250px] h-[250px] flex justify-center items-center text-dark">
						<FontAwesomeIcon
							icon={faSpinner}
							className="animate-spin text-2xl"
						/>
					</AvatarFallback>
				</Avatar>
			</div>
			<br />
			<h2>{props.title}</h2>
			<p className="">{props.desc}</p>
			<h2 className="text-lg">
				<FontAwesomeIcon icon={faEuro} />{' '}
				<span>{Number(props.price).toFixed(2)}</span>
			</h2>
		</div>
	);
};
