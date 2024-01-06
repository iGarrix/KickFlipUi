import { Skeleton } from '@/components/ui/skeleton';

export default function AuthLoading() {
	return (
		<div className="flex flex-col gap-[2rem] w-[90%] h-full">
			<Skeleton className="w-full h-[3rem]" />
			<Skeleton className="w-full h-[3rem]" />
			<div className="grid grid-cols-3 gap-[1rem] w-full h-full">
				<div className="flex flex-col gap-[1rem] justify-between col-span-2">
					<Skeleton className="w-full h-full" />
					<Skeleton className="w-full h-full" />
					<Skeleton className="w-full h-full" />
					<Skeleton className="w-full h-full" />
					<Skeleton className="w-full h-full" />
				</div>
				<Skeleton className="w-full h-full" />
			</div>
		</div>
	);
}
