import { Btn } from '@/components/custom/Btn/btn';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { faEuro, faHeart, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function PositionDetailPage(props: {
	params: { keytag: string };
}) {
	return (
		<div className="w-[95%] mr-auto flex flex-col gap-[4rem]">
			<p className="font-semibold text-sm flex items-center gap-[0.5rem]">
				<span>Home</span>
				<span>{'>'}</span>
				<span>Position</span>
				<span>{'>'}</span>
				<span>Details</span>
				<span>{'>'}</span>
				<span>Power classic - 38</span>
			</p>
			<div className="flex gap-[4rem] justify-center">
				<div className="flex gap-[1rem]">
					<div className="flex flex-col gap-[1rem]">
						<div className="w-[100px] h-[100px]">
							<Avatar>
								<AvatarImage
									className="w-full h-full bg-cover bg-center border border-dark/80"
									src={
										'https://m.media-amazon.com/images/I/B1EryObaEWS._AC_CLa%7C2140%2C2000%7C814s77EhEQL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UY580_.png'
									}
								/>
								<AvatarFallback className="w-full h-full flex justify-center items-center border border-dark/80">
									<FontAwesomeIcon
										icon={faSpinner}
										className="animate-spin text-2xl"
									/>
								</AvatarFallback>
							</Avatar>
						</div>
						<div className="w-[100px] h-[100px]">
							<Avatar>
								<AvatarImage
									className="w-full h-full bg-cover bg-center border border-dark/80"
									src={
										'https://m.media-amazon.com/images/I/B1EryObaEWS._AC_CLa%7C2140%2C2000%7C814s77EhEQL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UY580_.png'
									}
								/>
								<AvatarFallback className="w-full h-full flex justify-center items-center border border-dark/80">
									<FontAwesomeIcon
										icon={faSpinner}
										className="animate-spin text-2xl"
									/>
								</AvatarFallback>
							</Avatar>
						</div>
						<div className="w-[100px] h-[100px]">
							<Avatar>
								<AvatarImage
									className="w-full h-full bg-cover bg-center border border-dark/80"
									src={
										'https://m.media-amazon.com/images/I/B1EryObaEWS._AC_CLa%7C2140%2C2000%7C814s77EhEQL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UY580_.png'
									}
								/>
								<AvatarFallback className="w-full h-full flex justify-center items-center border border-dark/80">
									<FontAwesomeIcon
										icon={faSpinner}
										className="animate-spin text-2xl"
									/>
								</AvatarFallback>
							</Avatar>
						</div>
						<div className="w-[100px] h-[100px]">
							<Avatar>
								<AvatarImage
									className="w-full h-full bg-cover bg-center border border-dark/80"
									src={
										'https://m.media-amazon.com/images/I/B1EryObaEWS._AC_CLa%7C2140%2C2000%7C814s77EhEQL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UY580_.png'
									}
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
					<div className="w-full h-full max-w-[600px] min-w-[600px]">
						<Avatar>
							<AvatarImage
								className="w-full h-full bg-cover bg-center border border-dark/80"
								src={
									'https://www.earthsunmoon.com/data/store/388-T01-B12_500.jpg'
								}
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
				<div className="w-auto min-w-[20vw] font-semibold font-spacemono flex flex-col gap-[1rem]">
					<p>Powler Classic - 38</p>
					<h1 className="text-5xl">Monokai</h1>
					<p className="flex items-center font-semibold text-2xl">
						<FontAwesomeIcon icon={faEuro} />
						<span>{Number('350').toFixed(2)}</span>
					</p>
					<br />
					<div className="bg-white py-[1.5rem] w-full"></div>
					<div className="bg-white py-[1.5rem] w-full"></div>
					<div className="flex gap-[1rem]">
						<Btn className="grow">Add to card</Btn>
						<button className="bg-white text-dark flex items-center justify-center p-[0.8rem] transition-all hover:bg-dark hover:text-light">
							<FontAwesomeIcon
								icon={faHeart}
								className="text-xl leading-none"
							/>
						</button>
					</div>
					<br />
					<div className="w-full p-[1rem] border-2 border-dark/80 flex flex-col items-center text-center mt-auto">
						<h2>Use promo</h2>
						<p>Shipping from Italy</p>
					</div>
				</div>
			</div>
		</div>
	);
}
