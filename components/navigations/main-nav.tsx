"use client";

import { Link, usePathname } from "@/lib/next-intl/navigation";
import { useTranslations } from "next-intl";

import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";

type MainNavProps = {};

const MainNav = (props: MainNavProps) => {
	const $t = useTranslations();
	const pathname = usePathname();

	const locales = ["en", "th"];

	return (
		// LOGO
		// RESPONSIVE MD-2XL === FLEX
		<div className="mr-4 md:flex">
			<Logo />
			{/* RESPONSIVE SM-2XL === INLINE-BLOCK */}
			{/* PATHNAME */}
			<nav className="flex items-center gap-6 text-sm">
				{/* {siteConfig.mainNav?.map(
					(link, linkIndex) =>
						link.href && (
							<Link
							
								key={`${link.href} - ${linkIndex}`}
								href={link.href}>
								{$t(link.title)}
							</Link>
						)
				)} */}
				<Link
					href="/profile"
					className={cn("transition-colors hover:text-foreground/80", pathname === "/profile" ? "text-foreground" : "text-foreground/60")}>
					{$t("profile")}
				</Link>
				<Link
					href="/components"
					className={cn("transition-colors hover:text-foreground/80", pathname === "/components" ? "text-foreground" : "text-foreground/60")}>
					{$t("components")}
				</Link>
				<Link
					href="/examples"
					className={cn("transition-colors hover:text-foreground/80", pathname === "/examples" ? "text-foreground" : "text-foreground/60")}>
					{$t("examples")}
				</Link>
				<Link
					href="https://github.com/Phatpong"
					className={cn("transition-colors hover:text-foreground/60 text-foreground/60")}>
					{$t("github")}
				</Link>
			</nav>
		</div>
	);
};

export { MainNav };
