import { cn } from '@/lib/utils';

function Skeleton({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn('animate-pulse rounded-sm bg-neutral-300/50', className)}
			{...props}
		/>
	);
}

export { Skeleton };
