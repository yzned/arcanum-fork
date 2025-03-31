import { PortfolioTable } from "@/components/explorePortfolio/tables/PortfolioTable";
import { Button } from "@/components/ui/button";
import ChevronIcon from "@/icons/chevron.svg?react";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/portfolio/$id")({
	component: RouteComponent,
});

function RouteComponent() {
	const router = useRouter();
	const { t } = useTranslation(["main"]);

	return (
		<div>
			<div className="mb-[8px] px-[14px]">
				<Button
					variant={"ghost"}
					className="my-4 text-fill-brand-secondary-500"
					onClick={() => router.history.back()}
				>
					<ChevronIcon className="-rotate-90 scale-80 text-fill-brand-secondary-500" />
					{t("back")}
				</Button>

				<div className="flex h-[64px] w-full cursor-pointer items-center justify-between rounded-[2px] bg-bg-floor-2 p-3 pr-5">
					<div className="flex items-center gap-4">
						<img
							src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
							className="h-8 w-8"
							alt="no-logo"
						/>
						<div className="flex max-w-[150px] flex-col gap-2">
							<span className="font-namu text-[24px] text-text-primary leading-[24px]">
								USDT
							</span>
							<span className="truncate font-droid text-[12px] text-text-secondary leading-[12px]">
								Tether USDt
							</span>
						</div>
					</div>
				</div>
			</div>
			<PortfolioTable />
		</div>
	);
}
