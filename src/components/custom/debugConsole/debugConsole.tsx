/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useEffect, useState } from 'react';

//import style from './scss.style.module.scss';

interface IDebugConsoleProps {
	children: React.ReactNode;
}

export const DebugConsole: React.FC<IDebugConsoleProps> = ({
	children,
	...props
}) => {
	const [isDebug, setIsDebug] = useState(false);
	useEffect(() => {
		window.addEventListener('keydown', handle);

		return () => {
			window.removeEventListener('keydown', handle);
		};
	}, [handle, isDebug]);

	function handle(event: any) {
		if (event.key === '`') {
			setIsDebug(!isDebug);
		}
	}
	return isDebug && children;
};
