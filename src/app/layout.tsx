import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Mono } from 'next/font/google';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;
const inter = Inter({ subsets: ['latin'], variable: '--inter' });
const sm = Space_Mono({
	weight: ['400', '700'],
	subsets: ['latin'],
	variable: '--sm',
});

export const metadata: Metadata = {
	title: 'Fick Flip Dropshipping',
	description: 'Fick Flip Dropshipping Platform',
};

export default function RootLayout(props: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${inter.className} ${inter.variable} ${sm.variable}`}>
				{props.children}
			</body>
		</html>
	);
}
