import { ThemeProvider } from "@/components/providers/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

const locales = ["en", "th"];

export const metadata: Metadata = {
	title: "PongPhat 101",
	description: "Project PongPhat 101",
};

type LocaleLayout = {
	children: ReactNode;
	params: {
		locale: string;
	};
};

const LocaleLayout = ({ children, params: { locale } }: LocaleLayout) => {
	if (!locales.includes(locale as any)) notFound();
	return (
		<html lang={locale}>
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
};

export default LocaleLayout;
