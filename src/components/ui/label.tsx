import { cn } from "@/lib/utils";
import type { FC, ReactNode } from "react";

export interface LabelProps {
	className?: string;
	text?: string;
	iconLeft?: ReactNode;
	iconRight?: ReactNode;
	isRequired?: boolean;
}
export const Label: FC<LabelProps> = ({
	className,
	text,
	iconLeft,
	iconRight,
	isRequired,
}) => {
	return (
		<div
			className={cn(
				"flex gap-2 font-droid text-[12px] text-text-primary",
				className,
			)}
		>
			{iconLeft}
			<div>
				<span>
					{text}
					{isRequired && (
						<span className="ml-[4px] text-negative-primary">*</span>
					)}
				</span>
			</div>
			{iconRight}
		</div>
	);
};
