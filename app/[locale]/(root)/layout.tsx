import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

import { TopNavigationBar } from "@/components/navigations/top-navigation-bar";

const inter = Inter({ subsets: ["latin"] });

const locales = ["en", "th"];

export const metadata: Metadata = {
	title: "PongPhat 101",
	description: "Project PongPhat 101",
};

type RootLayoutProps = {
	children: ReactNode;
	params: {
		locale: string;
	};
};

const RootLayout = ({ children, params: { locale } }: RootLayoutProps) => {
	if (!locales.includes(locale as any)) notFound();

	return (
		<div lang={locale}>
			<div className={inter.className}>
				{/* NAV */}
				<TopNavigationBar />
				{/* PAGE */}
				{children}
			</div>
		</div>
	);
};

export default RootLayout;
