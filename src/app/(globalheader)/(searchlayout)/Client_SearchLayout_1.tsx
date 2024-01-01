'use client';
import { Btn } from '@/components/custom/Btn/btn';
//import style from './scss.style.module.scss';

import { PositionCard } from '@/components/custom/cards/positioncard/positioncard';
import { Button } from '@/components/ui/button';
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
} from '@/components/ui/drawer';
import {
	GetPositionImage,
	IPosition,
} from '@/serverside/apis/positions/positions.types';
import { faEuro, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

interface Client_SearchLayoyt_1Props {
	data?: IPosition[];
}

export const Client_SearchLayoyt_1: React.FC<Client_SearchLayoyt_1Props> = ({
	data,
	...props
}) => {
	const [selectedItem, setSelectedItemKey] = useState<IPosition | null>(null);
	const isPhone = useMediaQuery({ query: '(max-width: 767px)' });
	return (
		data && (
			<div className="flex gap-[2rem]">
				<div className="grid grid-cols-1 gap-[1rem] grow">
					{data.map((item, key) => (
						<PositionCard
							key={key}
							src={GetPositionImage(item.image[0]?.src)}
							name={item.name}
							description={item.description}
							size={item.size}
							price={item.price}
							shipping={item.shipping}
							image={[]}
							code={item.code}
							onViewShortDetail={() => {
								setSelectedItemKey(item);
							}}
						/>
					))}
				</div>
				{selectedItem && !isPhone && (
					<div className="w-[30%] bg-gold h-max sticky top-[10vh] right-0 font-spacemono flex flex-col flex-wrap gap-[1rem] p-[1.5rem] rounded-sm">
						<h2 className="text-2xl font-black">Item Short Details</h2>
						<div className="flex justify-between gap-[1rem] font-semibold text-[16px]">
							<p>Code</p>
							<p>{selectedItem.code}</p>
						</div>
						<div className="flex justify-between gap-[1rem] font-semibold text-[16px]">
							<p>Name</p>
							<p>{selectedItem.name}</p>
						</div>
						<div className="flex justify-between gap-[1rem] font-semibold text-[16px]">
							<p>Details</p>
							<p>{selectedItem.description}</p>
						</div>
						<div className="flex justify-between gap-[1rem] font-semibold text-[16px]">
							<p>Size</p>
							<p>{selectedItem.size}</p>
						</div>
						<div className="flex justify-between gap-[1rem] font-semibold text-[16px]">
							<p>Price</p>
							<p className="flex gap-[1rem] items-center">
								<FontAwesomeIcon icon={faEuro} />
								<span>{Number(selectedItem.price).toFixed(2)}</span>
							</p>
						</div>
						<hr className="border-dark/40" />
						<div className="flex justify-between gap-[1rem] font-semibold text-[16px]">
							<p>Shipping from</p>
							<p>{selectedItem.shipping}</p>
						</div>
						<hr className="border-dark/40 mt-auto" />
						<div className="flex gap-[1rem]">
							<Btn className="grow">Add to card</Btn>
							<button className="bg-white text-dark flex items-center justify-center p-[0.8rem] transition-all hover:bg-dark hover:text-light">
								<FontAwesomeIcon
									icon={faHeart}
									className="text-xl leading-none"
								/>
							</button>
						</div>
					</div>
				)}
				{selectedItem && isPhone && (
					<Drawer
						open={selectedItem != null}
						onOpenChange={(e) => {
							if (e === false) {
								setSelectedItemKey(null);
							}
						}}>
						<DrawerContent className="bg-light">
							<DrawerHeader className="text-left">
								<DrawerTitle className="text-2xl font-black font-spacemono">
									Item Short Details
								</DrawerTitle>
							</DrawerHeader>
							<div className="font-spacemono px-[1rem] flex flex-col gap-[1rem] overflow-y-auto">
								<div>
									<div className="flex gap-[1rem] font-semibold text-[16px]">
										<p>Code: </p>
										<p>{selectedItem.code}</p>
									</div>
									<div className="flex gap-[1rem] font-semibold text-[16px]">
										<p>Name: </p>
										<p>{selectedItem.name}</p>
									</div>
									<div className="flex gap-[1rem] font-semibold text-[16px]">
										<p>Details</p>
										<p>{selectedItem.description}</p>
									</div>
									<div className="flex gap-[1rem] font-semibold text-[16px]">
										<p>Size: </p>
										<p>{selectedItem.size}</p>
									</div>
									<div className="flex gap-[1rem] font-semibold text-[16px]">
										<p>Price: </p>
										<p className="flex gap-[1rem] items-center">
											<FontAwesomeIcon icon={faEuro} />
											<span>{Number(selectedItem.price).toFixed(2)}</span>
										</p>
									</div>
								</div>
								<hr className="border-dark/40" />
								<div className="flex justify-between gap-[1rem] font-semibold text-[16px]">
									<p>Shipping from</p>
									<p>{selectedItem.shipping}</p>
								</div>
								<hr className="border-dark/40 mt-auto" />
								<div className="flex gap-[1rem]">
									<Btn className="grow">Add to card</Btn>
									<button className="bg-white text-dark flex items-center justify-center p-[0.8rem] transition-all hover:bg-dark hover:text-light">
										<FontAwesomeIcon
											icon={faHeart}
											className="text-xl leading-none"
										/>
									</button>
								</div>
							</div>
							<DrawerFooter className="pt-[5vh]">
								<DrawerClose asChild>
									<button>Cancel</button>
								</DrawerClose>
							</DrawerFooter>
						</DrawerContent>
					</Drawer>
				)}
			</div>
		)
	);
};
