import { Skeleton } from '@/components/ui/skeleton';

export default function LoadingKeytag() {
	return (
		<div className="w-[95%] mx-auto flex flex-col gap-[4rem]">
			<div className="font-semibold text-sm flex items-center gap-[0.5rem]">
				<Skeleton className="w-[5rem] h-[1.5rem]"></Skeleton>
				<span>{'>'}</span>
				<Skeleton className="w-[10rem] h-[1.5rem]"></Skeleton>
				<span>{'>'}</span>
				<Skeleton className="w-[10rem] h-[1.5rem]"></Skeleton>
				<span>{'>'}</span>
				<Skeleton className="w-[10rem] h-[1.5rem]"></Skeleton>
				<span>{'>'}</span>
				<Skeleton className="w-[8rem] h-[1.5rem]"></Skeleton>
			</div>
			<div className="flex gap-[4rem] justify-center">
				<div className="flex gap-[1rem]">
					<div className="flex flex-col gap-[1rem]">
						<Skeleton className="w-[100px] h-[100px]"></Skeleton>
						<Skeleton className="w-[100px] h-[100px]"></Skeleton>
						<Skeleton className="w-[100px] h-[100px]"></Skeleton>
						<Skeleton className="w-[100px] h-[100px]"></Skeleton>
					</div>
					<Skeleton className="w-[600px] h-[600px]"></Skeleton>
				</div>
				<div className="w-auto min-w-[30vw] font-semibold font-spacemono flex flex-col gap-[1rem]">
					<Skeleton className="w-[10rem] h-[1.5rem]"></Skeleton>
					<Skeleton className="w-[20rem] h-[4rem]"></Skeleton>
					<Skeleton className="w-[20rem] h-[4rem]"></Skeleton>
					<br />
					<Skeleton className="w-full h-[2rem]"></Skeleton>
					<Skeleton className="w-full h-[2rem]"></Skeleton>
					<div className="flex gap-[1rem]">
						<Skeleton className="w-full h-[4rem]"></Skeleton>
						<Skeleton className="w-[6rem] h-[4rem]"></Skeleton>
					</div>
					<Skeleton className="w-full h-[6rem] mt-auto"></Skeleton>
				</div>
			</div>
		</div>
	);
}
