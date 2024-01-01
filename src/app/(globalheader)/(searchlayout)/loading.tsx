import { Skeleton } from '@/components/ui/skeleton';
import { faHeart, faCartPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function LoadingSeachlayout() {
	return (
		<div className="w-[95%] mr-auto flex flex-col">
			<br />
			<Skeleton className="w-[20rem] h-[2rem]" />
			<br />
			<div className="flex flex-col gap-[1rem]">
				<Skeleton className="w-full h-[8rem]" />
				<Skeleton className="w-full h-[8rem]" />
				<Skeleton className="w-full h-[8rem]" />
				<Skeleton className="w-full h-[8rem]" />
				<Skeleton className="w-full h-[8rem]" />
			</div>
		</div>
	);
}
