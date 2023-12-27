'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';
import { faArrowRight, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ClientPage() {
	const brands = [
		'https://media.gq-magazine.co.uk/photos/633eab4246e9ddeb400c0d5e/master/pass/Nike-air-max.jpg',
		'https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/f/i/x/-original-imagfywbuenspqur-bb.jpeg?q=90',
		'https://cloud.sneakerdistrict.com/products/18267/centennial-85-low-clear-green-core-white-easy-yellow_phpdT7z1x-1600.jpg',
		'https://media.voguebusiness.com/photos/64ba82d8b340082dbcb8e39f/1:1/w_2000,h_2000,c_limit/GUCCI-MATERIAL-NFT-REWARD-voguebus-story.jpg',
		'https://i.pinimg.com/736x/64/89/11/64891131cbb8ddd51c9d0580aa13ac88.jpg',
		'https://media2.symbol.ua/aio-images/fe/ef/feef1aba3d94eb9f9d4eb1fa0368811a/6dda3259-0e0a-401f-8b52-04062bd37367.jpg',
		'https://www.prada.com/content/dam/pradanux/pradasphere/2023/fragrances/05/update_luna_rossa_ocean/mosaic/Card_1_DT.jpg',
		'https://i.etsystatic.com/20589992/r/il/8a6e51/2742452312/il_570xN.2742452312_h8aw.jpg',
		'https://img.eobuwie.cloud/eob_product_512w_512h(2/1/a/a/21aa2141079e63df7877988918cac7334543b1cd_0000198761851_1__az.jpg,jpg)/vzuttia-reebok-f-s-hi-2240-black.jpg',
		'https://www.emp.co.uk/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw2c616571/images/5/2/6/4/526464d3.jpg?sfrm=png',
		'https://ca-times.brightspotcdn.com/dims4/default/2f91540/2147483647/strip/true/crop/1296x864+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F94%2F4c%2Fa9b142624767b395c137a0e0685f%2Fla-ig-vans-iconic-styles-collaborations-web-lead-new-final.jpg',
		'https://affinity.com.pk/cdn/shop/products/image_5ee9da22-85bf-474b-a963-05a26b74b0ce.jpg?v=1639547741',
	];

	return (
		<div className="h-full w-full overflow-x-hidden">
			<div className="flex flex-col w-full">
				<h1 className="font-spacemono font-black text-3xl">
					Brands <FontAwesomeIcon icon={faArrowRight} className="-rotate-45" />
				</h1>
				<br />
				<div className="overflow-x-hidden pb-[2rem]">
					<Carousel
						opts={{
							align: 'start',
							loop: true,
							dragFree: true,
						}}
						className="w-full border-2 border-dark/80  bg-dark select-none">
						<CarouselContent className="flex bg-dark gap-[2px]">
							{brands.map((item, key) => (
								<CarouselItem key={key} className="bg-light px-[2rem]">
									<div className="w-[170px] h-[170px] rounded-full overflow-hidden translate-y-[1.5rem]">
										<Avatar>
											<AvatarImage
												className="w-full h-full object-cover object-center -rotate-[15deg]"
												src={item}
											/>
											<AvatarFallback className="w-full h-full flex justify-center items-center bg-dark text-light">
												<FontAwesomeIcon
													icon={faSpinner}
													className="animate-spin text-2xl"
												/>
											</AvatarFallback>
										</Avatar>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
				</div>
			</div>
		</div>
	);
}
