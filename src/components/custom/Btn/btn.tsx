//import style from './scss.style.module.scss';

import { ButtonHTMLAttributes } from 'react';

interface IBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Btn: React.FC<IBtnProps> = ({ className, ...props }) => {
	return (
		<button
			className={`uppercase font-def bg-dark text-light py-[0.5rem] px-[1rem] text-center transition-all border-2 border-dark/0 hover:border-dark hover:bg-dark/0 hover:text-dark ${className}`}
			{...props}>
			{props.children}
		</button>
	);
};
