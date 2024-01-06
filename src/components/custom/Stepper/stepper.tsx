'use client';

import {
	faCircleCheck,
	faTriangleExclamation,
	faArrowsSpin,
	faCircle,
	faChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useState } from 'react';

export interface IStepper {
	selectedKey: number;
	items: Array<IStepItem>;
}
export interface IStepItem {
	status: 'success' | 'error' | 'still' | 'noview';
	title: string;
	children: React.ReactNode;
}

export const Stepper: React.FC<IStepper> = ({ ...props }) => {
	const [step, setStep] = useState<IStepper>(props);

	const formatNumberWithLeadingZero = useCallback((number: number) => {
		return number < 10 ? `0${number}` : `${number}`;
	}, []);

	const stepValid = useCallback(() => {
		try {
			props.items.forEach((f) => {
				if (f.status === 'error' || f.status === 'still') {
					throw `Not all steps has finished`;
				}
			});
			return true;
		} catch (error) {
			return false;
		}
	}, [props]);

	function getIcon(status: 'success' | 'error' | 'still' | 'noview') {
		switch (status) {
			case 'success':
				return faCircleCheck;
			case 'error':
				return faTriangleExclamation;
			case 'still':
				return faArrowsSpin;
			default:
				return faCircle;
		}
	}

	function onOpenBlock(key: number) {
		setStep({ ...step, selectedKey: key });
	}

	const setStateBlock = useCallback(
		(key: number, status: 'success' | 'error' | 'still' | 'noview') => {
			const newStep = step.items.map((item, key) => {
				if (step.selectedKey === key) {
					return {
						status: status,
						children: item.children,
						title: item.title,
					};
				}
				return item;
			});
			setStep({ ...step, items: newStep });
		},
		[step]
	);

	return (
		<div className="grow flex flex-col">
			{step.items.map((item, key) => (
				<div className="flex gap-[2rem]" key={key}>
					<div className="flex flex-col items-center text-dark/80">
						<FontAwesomeIcon icon={getIcon(item.status)} />
						<div className="h-full w-[1px] border-x border-x-dark/40 border-dashed"></div>
					</div>
					<div className="flex flex-col w-full">
						<aside
							className="font-spacemono font-black flex items-center justify-between w-full cursor-pointer transition-all hover:scale-[1.01]"
							onClick={() => {
								onOpenBlock(key);
							}}>
							<div>
								<p>Step {formatNumberWithLeadingZero(key + 1)}</p>
								<h3 className="text-3xl">{item.title}</h3>
							</div>
							<FontAwesomeIcon
								icon={faChevronUp}
								className={`${key === step.selectedKey && 'rotate-180'}`}
							/>
						</aside>
						<AnimatePresence>
							{step.selectedKey === key && (
								<motion.div
									initial={{ opacity: 0, height: 0 }}
									animate={{ opacity: 1, height: 'auto' }}
									exit={{ opacity: 0, height: 0 }}>
									{item.children}
								</motion.div>
							)}
						</AnimatePresence>
						{step.items.length - 1 !== key && <br />}
					</div>
				</div>
			))}
		</div>
	);
};
