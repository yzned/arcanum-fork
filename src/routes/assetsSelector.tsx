import { createFileRoute, useRouter } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { FindAsset } from "@/components/ui/findAsset";
import { PriceChange } from "@/components/ui/priceChange";
import CheckIcon from "@/icons/checkMark.svg?react";
import ChevronIcon from "@/icons/chevron.svg?react";
import LinkIcon from "@/icons/link.svg?react";
import { ARBITRUM_TOKENS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/assetsSelector")({
	component: RouteComponent,
});

const TOKEN = {
	name: "Bitcoin",
	symbol: "BTC",
	address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
	priceFeedType: "UniswapV3",
	share: "9.6189",
	logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/23095.png",
	quantity: "178.94",
	targetShare: "4.9167",
	currentShare: "9.6189",
	price: "0.0723",
	tags: ["Tag1", "Tag2", "Tag3"],
	description:
		"Optimism (OP) is a layer-two blockchain on top of Ethereum.Optimism benefits from the security of the Ethereum mainnet and helps scale the Ethereum ecosystem by using optimistic rollups.That means transactions are trustlessly recorded on Optimism but ultimately secured on Ethereum",
};

const ORACLES = [
	{
		name: "AAA",
		percents: "0.1%",
		liquidity: "0.54",
		price: "0.54",
		"24h": "0.54",
	},
	{
		name: "UniswapV3",
		percents: "0.1%",
		liquidity: "0.54",
		price: "0.54",
		"24h": "0.54",
	},
	{
		name: "BEEE",
		percents: "0.1%",
		liquidity: "0.54",
		price: "0.54",
		"24h": "0.54",
	},
	{
		name: "BAAA",
		percents: "0.1%",
		liquidity: "0.54",
		price: "0.54",
		"24h": "0.54",
	},
	{
		name: "PUPUUPU",
		percents: "0.1%",
		liquidity: "0.54",
		price: "0.54",
		"24h": "0.54",
	},
	{
		name: "LALALA",
		percents: "0.1%",
		liquidity: "0.54",
		price: "0.54",
		"24h": "0.54",
	},
];
function RouteComponent() {
	const { t } = useTranslation(["main"]);

	const handleCopy = (value: string) => {
		navigator.clipboard
			.writeText(value)
			.catch((err) => console.error("Failed to copy : ", err));
	};

	const router = useRouter();

	const [selectedOracle, setSelectedOracle] = useState("AAA");
	return (
		<div className="flex h-[calc(100svh-74px)] w-full overflow-scroll ">
			<div className="h-full w-[516px] overflow-x-hidden overflow-y-scroll bg-fill-primary-900">
				<div className="flex justify-between px-4 pt-4">
					<Button variant={"tertiary"} onClick={() => router.history.back()}>
						<ChevronIcon className="-rotate-90 scale-80" />
						{t("back")}
					</Button>
					<span className="font-[600] font-namu text-[72px] text-white uppercase leading-[93px] ">
						{t("assets")}
					</span>
				</div>
				<span className="overflow-clip text-nowrap border-[#252627] border-t border-b py-px font-droid text-[10px] text-text-tertiary leading-[120%]">
					{`///////////////////////////////////
					///////// .- .-. -.-. .- -. ..- --`.repeat(9)}
				</span>
				<FindAsset
					assets={ARBITRUM_TOKENS}
					className="mt-6 h-[70%] px-4"
					onSelectAsset={(item) => {
						console.log(item);
					}}
					filters={["Tag1", "Tag2", "Tag3", "Tag4", "Tag5", "Tag6", "Tag7"]}
				/>
			</div>

			<div className="flex h-full grow flex-col justify-between border-r-[1px] border-r-fill-secondary bg-fill-primary-800">
				<div className="flex w-full flex-col gap-12 pt-8 pr-6 pl-8">
					<div className="flex items-center gap-8">
						<img
							src={TOKEN.logo}
							className="h-[72px] w-[72px] overflow-hidden rounded-full"
							alt="no-icon"
						/>
						<div>
							<div className="flex gap-4 font-[600] font-namu uppercase">
								<span className="text-[24px] text-text-primary">
									{TOKEN.symbol}
								</span>
								<span className="mt-[3px] text-[18px] text-text-tertiary">
									APY 20 %
								</span>
							</div>
							<span className="text-text-tertiary">{TOKEN.name}</span>
						</div>
					</div>

					<div className="flex flex-col gap-8">
						<div className="flex items-center gap-4">
							<span className="font-[600] font-namu text-[24px] text-text-primary">
								781.2 $
							</span>

							<PriceChange growing value="23.23" />
						</div>
						<span className="w-[400px] text-[14px] text-text-secondary 2xl:w-[600px]">
							{TOKEN.description}
						</span>
					</div>
				</div>

				<div className="flex flex-col gap-4 p-4">
					<div className="flex flex-wrap gap-2">
						{TOKEN.tags.map((tag) => (
							<div
								key={tag}
								className="flex h-8 w-fit items-center justify-center rounded-[4px] bg-fill-secondary px-2 text-[14px] text-text-primary"
							>
								{tag}
							</div>
						))}
					</div>
					<div className="flex flex-wrap gap-2">
						<button
							type="button"
							onClick={() => handleCopy(TOKEN.address)}
							className="flex h-8 cursor-pointer items-center gap-4 rounded-[4px] bg-fill-secondary px-3 text-[14px]"
						>
							<span className="text-text-primary ">{TOKEN.symbol}</span>
							<div className="flex items-center text-text-secondary">
								<span className="font-droid text-[12px]">{`${TOKEN.address.slice(0, 4)}...${TOKEN.address.slice(-4)}`}</span>
								<LinkIcon className="mb-[2px] scale-75" />
							</div>
						</button>
					</div>
				</div>
			</div>

			<div className="flex h-full w-[462px] flex-col overflow-hidden bg-fill-primary-800">
				<div className="flex h-full flex-col pt-8">
					<p className="px-8 pb-8 text-text-primary">{t("selectOracle")}</p>
					<div className="flex min-h-0 flex-grow flex-col gap-2 overflow-y-auto px-8 pb-1">
						{ORACLES.map((oracle) => (
							<button
								type="button"
								onClick={() => setSelectedOracle(oracle.name)}
								className={cn(
									"flex h-[140px] w-full cursor-pointer flex-col gap-6 rounded-[8px] border-[1px] border-fill-secondary p-4",
									selectedOracle === oracle.name &&
										"border-fill-secondary bg-fill-secondary",
								)}
								key={oracle.name}
							>
								<div className="flex items-center justify-between text-text-primary">
									<div className="flex items-center gap-4 ">
										<span className="">{oracle.name}</span>
										<span className="flex h-[24px] items-center rounded-[4px] bg-fill-secondary p-2 text-[12px]">
											{oracle.percents}
										</span>
									</div>
									{selectedOracle === oracle.name && (
										<CheckIcon className="scale-190 text-fill-brand-primary-700" />
									)}
								</div>
								<div className="flex flex-col gap-1">
									<div className="flex items-center justify-between text-[12px]">
										<span className="text-text-secondary">
											{t("currentPrice")}
										</span>
										<span className="text-text-primary ">
											{oracle.price}ETH{" "}
											<span className="text-text-secondary">($27,82)</span>
										</span>
									</div>
									<div className="flex items-center justify-between text-[12px]">
										<span className="text-text-secondary">
											{t("liquidity")}
										</span>
										<span className="text-text-primary ">
											{oracle.liquidity}ETH{" "}
											<span className="text-text-secondary">($27,82)</span>
										</span>
									</div>
									<div className="flex items-center justify-between text-[12px]">
										<span className="text-text-secondary">
											{t("24hVolume")}
										</span>
										<span className="text-text-primary ">
											{oracle["24h"]}ETH{" "}
											<span className="text-text-secondary">($27,82)</span>
										</span>
									</div>
								</div>
							</button>
						))}
					</div>
					<div className="border-t-[1px] border-t-fill-secondary p-4">
						<Button className="h-[42px] w-full">{t("useThisAsset")}</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
