"use client";

import { useCallback, useEffect, useState } from "react";

import { Typography } from "@/components/typographies/typography";
import { Button } from "@/components/ui/button";
import { useRouter } from "@/lib/next-intl/navigation";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/siteconfig/site-config";
import { LaptopIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./command";

type CommandMenuProps = {};

const CommandMenu = ({}: CommandMenuProps) => {
	const $t = useTranslations();
	const router = useRouter();
	const [isOpen, setIsOpen] = useState(false);
	const { setTheme } = useTheme();

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
				if ((e.target instanceof HTMLElement && e.target.isContentEditable) || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
					return;
				}

				e.preventDefault();
				setIsOpen((isOpen) => !isOpen);
			}
		};

		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, []);

	const runCommand = useCallback((command: () => unknown) => {
		setIsOpen(false);
		command();
	}, []);

	return (
		<>
			<Button
				variant="outline"
				className={cn("relative h-8 w-full justify-start rounded-sm bg-background text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64")}
				onClick={() => setIsOpen(true)}>
				<Typography
					component="span"
					className="hidden lg:inline-flex">
					{$t("search documentation")}
				</Typography>
				<Typography
					component="span"
					className="inline-flex lg:hidden">
					{$t("search")}
				</Typography>
				<kbd className="pointer-events-none absolute right-1 top-1 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-medium opacity-100 sm:flex">
					<Typography
						component="span"
						className="text-xs">
						⌘
					</Typography>
					K
				</kbd>
			</Button>
			<CommandDialog
				open={isOpen}
				onOpenChange={setIsOpen}>
				<CommandInput placeholder={$t("type a command or search")} />
				<CommandList>
					<CommandEmpty>{$t("no result found")}</CommandEmpty>
					<CommandGroup heading={$t("main navigation")}>
						{siteConfig.mainNav.map((link, linkIndex) => (
							<CommandItem
								key={`${link.href} - ${linkIndex}`}
								value={link.title}
								onSelect={() => {
									runCommand(() => router.push(link.href as string));
								}}>
								{$t(link.title)}
							</CommandItem>
						))}
					</CommandGroup>
					<CommandGroup heading={$t("theme")}>
						<CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
							<SunIcon className="mr-2 h-4 w-4" />
							{$t("light")}
						</CommandItem>
						<CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
							<MoonIcon className="mr-2 h-4 w-4" />
							{$t("dark")}
						</CommandItem>
						<CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
							<LaptopIcon className="mr-2 h-4 w-4" />
							{$t("system")}
						</CommandItem>
					</CommandGroup>
				</CommandList>
			</CommandDialog>
		</>
	);
};

export { CommandMenu };
