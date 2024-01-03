import Image from "next/image";
import Link from "next/link";

import { Typography } from "@/components/typographies/typography";
import { phatPongConfig } from "@/siteconfig/site";

type LogoProps = {};

const Logo = ({}: LogoProps) => {
	return (
		<Link href="/">
			<div className="hidden md:flex mr-6 items-center gap-x-2 transition hover:opacity-75">
				<Image
					src="/favicon.ico"
					alt="logo"
					height={28}
					width={28}
				/>
				<Typography
					component="p"
					className="hidden font-bold sm:inline-block">
					{phatPongConfig.name}
				</Typography>
			</div>
		</Link>
	);
};

export { Logo };
