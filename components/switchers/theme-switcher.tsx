"use client";

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { LaptopIcon, MoonIcon, SunIcon } from "lucide-react";

type ThemeSwitcherProps = {};

const ThemeSwitcher = ({}: ThemeSwitcherProps) => {
	const $t = useTranslations();
	const { setTheme, theme } = useTheme();

	const themes = [
		{
			theme: "light",
			icon: SunIcon,
			disable: theme === "light",
			handleClick: () => setTheme("light"),
		},
		{
			theme: "dark",
			icon: MoonIcon,
			disable: theme === "dark",
			handleClick: () => setTheme("dark"),
		},
		{
			theme: "system",
			icon: LaptopIcon,
			disable: theme === "system",
			handleClick: () => setTheme("system"),
		},
	];

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="ghost"
					size="icon">
					<SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
					<MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="center">
				{themes.map((mode) => (
					<DropdownMenuItem
						key={mode.theme}
						disabled={mode.disable}
						onClick={mode.handleClick}>
						<mode.icon className="h-5 w-5 mr-2" />
						{$t(mode.theme)}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export { ThemeSwitcher };
