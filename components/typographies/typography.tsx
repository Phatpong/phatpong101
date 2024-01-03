import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const typographyVariants = cva("", {
	variants: {
		variant: {
			h1: "text-8xl font-light tracking-[-1.5px]",
			h2: "text-6xl font-light tracking-[-0.5px]",
			h3: "text-5xl font-normal tracking-normal",
			h4: "text-4xl font-normal tracking-[0.25px]",
			h5: "text-2xl font-normal tracking-normal",
			h6: "text-xl font-medium tracking-[0.15px]",
			large: "text-lg font-medium tracking-normal",
			subtitle1: "text-base font-normal tracking-[0.15px]",
			subtitle2: "text-sm font-medium tracking-[0.1px]",
			body1: "text-base font-normal tracking-[0.5px]",
			body2: "text-sm font-normal tracking-[0.25px]",
			caption: "text-xs font-normal tracking-[0.4px] text-muted",
			overline: "text-[10px] font-normal tracking-[1.5px] overline",
			blockquote: "border-l-2 pl-6 italic",
			"inline-code": "text-sm font-semibold font-mono px-[0.3rem] py-[0.2rem] bg-muted rounded w-fit",
		},
		textAlign: {
			left: "text-left",
			center: "text-center",
			right: "text-right",
			justify: "text-justify",
			start: "text-start",
		},
		textColor: {
			primary: "text-primary",
			secondary: "text-secondary",
			accent: "text-accent",
			neutral: "text-neutral",
			success: "text-success",
			warning: "text-warning",
			error: "text-destructive",
			link: "text-blue-500 dark:text-blue-600 cursor-pointer hover:underline hover:underline-offset-4",
			muted: "text-muted",
		},
		textItalic: {
			true: "italic",
			false: "not-italic",
		},
		textTransform: {
			lowercase: "lowercase",
			uppercase: "uppercase",
			capitalize: "capitalize",
			"normal-case": "normal-case",
		},
	},
	defaultVariants: {
		variant: "body1",
		textAlign: "left",
		textColor: "neutral",
		textItalic: false,
		textTransform: "normal-case",
	},
});

type TypographyProps = React.HTMLAttributes<HTMLElement> &
	VariantProps<typeof typographyVariants> & {
		component: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div" | "blockquote" | "code" | "a" | "pre";
	};

const Typography = ({
	// PROPS
	component,
	variant,
	textAlign,
	textColor,
	textItalic,
	textTransform,
	className,
	...props
}: TypographyProps) => {
	const Component = component;

	return (
		<Component
			className={cn(
				typographyVariants({
					// PROPS
					variant,
					textAlign,
					textColor,
					textItalic,
					textTransform,
					className,
				})
			)}
			{...props}
		/>
	);
};
Typography.displayName = "Typography";

export { Typography };
