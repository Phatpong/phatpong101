"use client";

import { GithubIcon, HelpCircleIcon } from "lucide-react";

import { MainNav } from "@/components/navigations/main-nav";
import { MobileNav } from "@/components/navigations/mobile-nav";
import { LanguageSwitcher } from "@/components/switchers/language-switcher";
import { ThemeSwitcher } from "@/components/switchers/theme-switcher";
import { Button } from "@/components/ui/button";
import { CommandMenu } from "@/components/ui/command-menu";
import { Link } from "@/lib/next-intl/navigation";
import { phatPongConfig } from "@/siteconfig/site";

type TopNavigationBarProps = {};

const TopNavigationBar = ({}: TopNavigationBarProps) => {
	return (
		<header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-14 max-w-screen-2xl items-center">
				<MainNav />
				<MobileNav />
				<div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
					<div className="w-full flex-1 md:w-auto md:flex-none">
						<CommandMenu />
					</div>
					<nav className="flex items-center space-x-2">
						<Link
							href={phatPongConfig.links.github}
							target="_blank"
							rel="noreferrer">
							<Button
								variant="ghost"
								size="icon">
								<GithubIcon className="h-5 w-5" />
							</Button>
						</Link>
						<Button
							variant="ghost"
							size="icon">
							<HelpCircleIcon className="h-5 w-5" />
						</Button>
						<LanguageSwitcher />
						<ThemeSwitcher />
					</nav>
				</div>
			</div>
		</header>
	);
};

export { TopNavigationBar };
