'use client';

import { useMediaQuery } from '@uidotdev/usehooks';

const useDevice = () => {
	const isMobile = useMediaQuery('only screen and (max-width : 767px)');

	return isMobile;
};

export default useDevice;
