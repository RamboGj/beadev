import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const skeletonClassname = tv({
	base: "relative bg-neutral700 flex shrink-0 rounded-lg overflow-hidden after:block after:absolute after:w-full after:h-full after:animate-skeleton after:-translate-x-[100%] after:bg-skeletonGradient",
	variants: {
		variant: {
			primary: "bg-neutral700 after:bg-skeletonGradient",
		},
	},
	defaultVariants: {
		variant: "primary",
	},
});

export type SkeletonProps = ComponentProps<"div"> &
	VariantProps<typeof skeletonClassname> & {
		width?: number | string;
		height?: number | string;
		borderRadius?: number | string;
	};

export function Skeleton({
	width,
	height,
	borderRadius = 8,
	className,
	variant,
	...rest
}: SkeletonProps) {
	const skeleton = skeletonClassname({ className, variant });

	return (
		<div
			className={skeleton}
			style={{ height, width, borderRadius }}
			{...rest}
		/>
	);
}
