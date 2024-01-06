'use client';

import { Btn } from '@/components/custom/Btn/btn';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
	IPosition,
	GetPositionImage,
} from '@/lib/apis/positions/positions.types';
import usePositionStorage from '@/lib/zustand_hooks/cartStorage/cartStorage';
import { faSpinner, faEuro, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

interface IClient_Keytag_1Props {
	findPos: IPosition;
}

export const Client_Keytag_1: React.FC<IClient_Keytag_1Props> = ({
	findPos,
	...props
}) => {
	const [selectedImage, setSelectedImage] = useState(
		GetPositionImage(findPos.image[0]?.src)
	);
	const storage = usePositionStorage();
	const router = useRouter();
	return (
		<div className="flex gap-[4rem] justify-center xs:flex-col 2xl:flex-row">
			<div className="flex gap-[1rem] xs:flex-col-reverse md:flex-row">
				<div className="flex flex-col gap-[1rem] xs:flex-row xs:flex-wrap md:flex-col">
					{findPos.image?.map((item, key) => (
						<div
							key={key}
							className="w-[130px] xs:w-[90px] lg:w-[130px] transition-all hover:scale-105 cursor-pointer"
							onClick={() => {
								setSelectedImage(GetPositionImage(item.src));
							}}>
							<Avatar>
								<AvatarImage
									className="w-full h-full object-contain bg-center border border-dark/80 rounded-sm"
									src={GetPositionImage(item.src)}
								/>
								<AvatarFallback className="w-full h-full py-[1rem] flex justify-center items-center border border-dark/80">
									<FontAwesomeIcon
										icon={faSpinner}
										className="animate-spin text-2xl"
									/>
								</AvatarFallback>
							</Avatar>
						</div>
					))}
				</div>
				<div className="w-full h-full max-w-[600px] min-w-[600px] xs:max-w-full xs:min-w-fit lg:max-w-[600px] lg:min-w-[600px] bg-white">
					<Avatar>
						<AvatarImage
							className="w-full h-full object-contain bg-center border border-dark/80"
							src={selectedImage}
						/>
						<AvatarFallback className="w-full h-full flex justify-center items-center border border-dark/80">
							<FontAwesomeIcon
								icon={faSpinner}
								className="animate-spin text-2xl"
							/>
						</AvatarFallback>
					</Avatar>
				</div>
			</div>
			<div className="w-auto min-w-[30vw] font-semibold font-spacemono flex flex-col gap-[1rem]">
				<p>{findPos?.description}</p>
				<h1 className="text-5xl">{findPos.name}</h1>
				<p className="flex items-center font-semibold text-2xl gap-[1rem]">
					<FontAwesomeIcon icon={faEuro} />
					<span>{Number(findPos.price).toFixed(2)}</span>
				</p>
				<br />
				<div className="bg-white py-[0.5rem] w-full flex items-center justify-between px-[1rem]">
					<p>Size</p>
					<p>{findPos.size}</p>
				</div>
				<div className="bg-white py-[0.5rem] w-full flex items-center justify-between px-[1rem]">
					<p>Code</p>
					<p>{findPos.code}</p>
				</div>
				<div className="flex gap-[1rem]">
					<Btn className="grow">Add to card</Btn>
					<button
						className="bg-white text-dark flex items-center justify-center p-[0.8rem] transition-all hover:bg-dark hover:text-light"
						onClick={() => {
							try {
								storage.onAddToLiked(findPos);
								toast(findPos.name, {
									description: 'Position has been added to liked list',
									action: {
										label: 'Go to liked list',
										onClick: () => {
											router.push('/account/liked');
										},
									},
									duration: 2000,
								});
							} catch (error) {
								toast(findPos.name, {
									description: error as string,
									action: {
										label: 'Go to liked list',
										onClick: () => {
											router.push('/account/liked');
										},
									},
									duration: 1000,
								});
							}
						}}>
						<FontAwesomeIcon icon={faHeart} className="text-xl leading-none" />
					</button>
				</div>
				<br />
				<div className="w-full p-[1rem] border-2 border-dark/80 flex flex-col items-center text-center mt-auto">
					{/* <h2>Use promo</h2> */}
					<p>Shipping from {findPos.shipping}</p>
				</div>
			</div>
		</div>
	);
};
