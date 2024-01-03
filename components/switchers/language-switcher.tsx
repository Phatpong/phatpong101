"use client";

import { Icon } from "@iconify/react";
import { LanguagesIcon } from "lucide-react";
import { useLocale } from "next-intl";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const locales = ["en", "th"];
const { useRouter, usePathname } = createSharedPathnamesNavigation({ locales });

type LanguageSwitcherProps = {};

const LanguageSwitcher = (props: LanguageSwitcherProps) => {
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();

	function setLanguage(language: "en" | "th") {
		router.push(pathname, { locale: language });
	}

	return (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						variant="ghost"
						size="icon">
						<LanguagesIcon className="h-5 w-5" />
						<span className="sr-only">Change Language</span>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem
						disabled={locale === "en"}
						onClick={() => setLanguage("en")}>
						<Icon
							className="mr-2 h-5 w-5"
							icon="flag:us-4x3"
						/>
						English (US)
					</DropdownMenuItem>
					<DropdownMenuItem
						disabled={locale === "th"}
						onClick={() => setLanguage("th")}>
						<Icon
							className="mr-2 h-5 w-5"
							icon="flag:th-4x3"
						/>
						ภาษาไทย
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	);
};

export { LanguageSwitcher };
