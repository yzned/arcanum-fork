import { MainTable } from "@/components/mainPage/MainTable";
import { AssetCard } from "@/components/ui/assetCard";
import { Button } from "@/components/ui/button";
import { useExplorePortfolio } from "@/contexts/ExplorePortfolioContext";
import RoundedPlusIcon from "@/icons/plus-rounded.svg?react";
import { ARBITRUM_TOKENS } from "@/lib/constants";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	const navigate = useNavigate();

	const { t } = useTranslation(["main"]);
	const { portfolioTokens } = useExplorePortfolio();

	const isMobile = useMediaQuery("(max-width: 768px)");

	return (
		<div className="overflow-hidden">
			<div className="mb-[80px] flex flex-col gap-6 pt-10 md:mb-[56px] md:gap-10 md:px-5">
				<div className="flex w-full items-center justify-between ">
					<span className="mb-2 hidden font-[600] font-namu text-[72px] text-text-primary uppercase leading-[72px] md:block">
						{t("assets")}
					</span>

					<span className="block w-full pr-[14px] text-right font-[600] font-namu text-[58px] text-text-primary uppercase leading-[58px] md:hidden">
						{t("trendingAssets")}
					</span>

					<Button
						className="hidden h-10 md:flex"
						onClick={() => navigate({ to: "/create" })}
					>
						{t("createPortfolio")}
						<RoundedPlusIcon />
					</Button>
				</div>
				<div className=" flex w-full flex-col gap-1 overflow-y-hidden overflow-x-scroll pr-4 pl-[14px] md:gap-2 md:pr-0 md:pl-0">
					<div className="flex w-fit gap-1 md:w-full md:gap-2 ">
						<AssetCard
							variant={isMobile ? "special" : "default"}
							asset={ARBITRUM_TOKENS[6]}
							className="w-[316px] md:w-full "
						/>
						<AssetCard
							variant={isMobile ? "special" : "default"}
							asset={ARBITRUM_TOKENS[6]}
							className="w-[316px] md:w-full"
						/>
						<AssetCard
							variant={isMobile ? "special" : "default"}
							asset={ARBITRUM_TOKENS[6]}
							className="w-[316px] md:w-full"
						/>
						<AssetCard
							variant={isMobile ? "special" : "default"}
							asset={ARBITRUM_TOKENS[6]}
							className="w-[316px] md:w-full"
						/>
					</div>
					<div className="flex w-fit gap-1 md:w-full md:gap-2 ">
						<AssetCard
							variant={isMobile ? "special" : "default"}
							asset={ARBITRUM_TOKENS[6]}
							className="w-[316px] md:w-full"
						/>
						<AssetCard
							variant={isMobile ? "special" : "default"}
							asset={ARBITRUM_TOKENS[6]}
							className="w-[316px] md:w-full"
						/>
						<AssetCard
							variant={isMobile ? "special" : "default"}
							asset={ARBITRUM_TOKENS[6]}
							className="w-[316px] md:w-full"
						/>
						<AssetCard
							variant={isMobile ? "special" : "default"}
							asset={ARBITRUM_TOKENS[6]}
							className="w-[316px] md:w-full"
						/>
					</div>
				</div>
			</div>
			<span className="hidden overflow-clip text-nowrap border-[#252627] border-t border-b py-px font-droid text-[10px] text-text-tertiary leading-[120%] md:block">
				{`//////////////////////////////////////////////////////////////////////
					///////// .- .-. -.-. .- -. ..- --`.repeat(9)}
			</span>

			<div className="hidden md:block">
				<MainTable />
			</div>

			<span className="mb-6 block w-full pl-[14px] font-[600] font-namu text-[58px] text-text-primary uppercase leading-[58px] md:hidden">
				{t("all")}
			</span>
			<div className="block flex flex-col gap-1 px-[14px] md:hidden">
				{portfolioTokens.map((token) => (
					<AssetCard key={token.address} asset={token} className="w-full" />
				))}
			</div>
		</div>
	);
}
