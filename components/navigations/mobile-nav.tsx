"use client";
import { MenuIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { LinkProps } from "next/link";
import { useState } from "react";

import { Typography } from "@/components/typographies/typography";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useRouter } from "@/lib/next-intl/navigation";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/siteconfig/site-config";

type MobileNavProps = {};

const MobileNav = ({}: MobileNavProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const $t = useTranslations();

	return (
		<Sheet
			open={isOpen}
			onOpenChange={setIsOpen}>
			<SheetTrigger asChild>
				<Button
					variant="ghost"
					className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
					<MenuIcon className="h-5 w-5" />
					<Typography
						component="p"
						className="sr-only">
						Toggle Menu
					</Typography>
				</Button>
			</SheetTrigger>
			<SheetContent
				side="left"
				className="pr-0">
				<Link
					href="/"
					className="flex items-center">
					<Logo />
				</Link>
				<ScrollArea className="my-4 h-full pb-10 pl-6">
					<div className="flex flex-col space-y-3">
						{siteConfig.mainNav?.map(
							(link, linkIndex) =>
								link.href && (
									<MobileLink
										key={`${link.href} - ${linkIndex}`}
										href={link.href}
										onOpenChange={setIsOpen}>
										{$t(link.title)}
									</MobileLink>
								)
						)}
					</div>
				</ScrollArea>
			</SheetContent>
		</Sheet>
	);
};

interface MobileLinkProps extends LinkProps {
	onOpenChange?: (open: boolean) => void;
	children?: React.ReactNode;
	className?: string;
}

function MobileLink({ href, children, onOpenChange, className }: MobileLinkProps) {
	const router = useRouter();

	return (
		<Link
			href={href}
			onClick={() => {
				router.push(href.toString());
				onOpenChange?.(false);
			}}
			className={cn(className)}>
			{children}
		</Link>
	);
}

export { MobileNav };
