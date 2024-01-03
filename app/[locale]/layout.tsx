import type { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import "../globals.css";

import { ThemeProvider } from "@/components/providers/theme-provider";

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
	const messages = useMessages();

	if (!locales.includes(locale as any)) notFound();

	return (
		<html lang={locale}>
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					<NextIntlClientProvider
						locale={locale}
						messages={messages}>
						{children}
					</NextIntlClientProvider>
				</ThemeProvider>
			</body>
		</html>
	);
};

export default LocaleLayout;
