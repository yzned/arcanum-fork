import ChevronIcon from "@/icons/chevron.svg?react";
import FallIcon from "@/icons/fall.svg?react";
import RiseIcon from "@/icons/rise.svg?react";
import { useEffect, useRef, useState } from "react";

import { ARBITRUM_TOKENS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import { FindAsset } from "../ui/findAsset";
import { PriceChange } from "../ui/priceChange";

import CandlesIcon from "@/icons/candles.svg?react";
import LinearIcon from "@/icons/linear.svg?react";
import SettingsIcon from "@/icons/settings.svg?react";
import { Link } from "@tanstack/react-router";
import { BottomSheet } from "react-spring-bottom-sheet";
import { Toggle } from "../ui/toggle";
import { BalancesTable } from "./tables/BalanceTable";
import { HistoryTable } from "./tables/HistoryTable";
import { PortfolioTable } from "./tables/PortfolioTable";
import { PositionsTable } from "./tables/PositionsTable";
import { CandleChart } from "@/components/ui/Charts/CandleChart";
import { LinearChart } from "@/components/ui/Charts/LinearChart";

export const ExploreMobile = () => {
	const tokenSelectorRef = useRef<HTMLDivElement>(null);

	const [isOpenSettingsSheet, setIsOpenSettingsSheet] = useState(false);

	const [isOpenTokenSelector, setIsOpenTokenSelector] = useState(false);
	const [currentGraph, setCurrentGraph] = useState<
		"candles" | "linear" | "portfolio"
	>("candles");

	const [currentBottomTable, setCurrentBottomTable] = useState<
		"balances" | "positions" | "history"
	>("balances");

	const { t } = useTranslation(["main"]);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				tokenSelectorRef.current &&
				!tokenSelectorRef.current.contains(event.target as Node)
			) {
				setIsOpenTokenSelector(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className="overflow-hidden bg-bg-floor-0 pt-4">
			<div className="mb-[48px] px-[14px]">
				<div ref={tokenSelectorRef} className="relative">
					<button
						onClick={() => {
							setIsOpenTokenSelector(!isOpenTokenSelector);
						}}
						type="button"
						className=" flex h-[64px] w-full cursor-pointer items-center justify-between rounded-[2px] bg-bg-floor-2 p-3 pr-5"
					>
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
						<ChevronIcon
							className={cn(
								"h-4 w-4 transition-all duration-300",
								isOpenTokenSelector && "rotate-0 text-fill-brand-secondary-500",
								!isOpenTokenSelector && " rotate-180 text-text-primary",
							)}
						/>
					</button>
					<div className="absolute top-full right-0 left-0 z-40 mt-2 overflow-hidden bg-bg-floor-2">
						<div
							className={cn(
								"transition-all duration-300 ",
								isOpenTokenSelector ? "h-[70svh]" : "h-0",
							)}
						>
							<FindAsset
								assets={ARBITRUM_TOKENS}
								className="h-[60svh] w-full bg-floor-2 px-4 pt-6"
							/>
						</div>
					</div>
				</div>
				<div className="my-20 flex flex-col justify-center">
					<span className="text-center text-[32px] text-text-primary">
						$1999.5531
					</span>
					<span className="text-center text-[14px] text-text-secondary">
						{t("tvl")} $1999.5531
					</span>
				</div>
				<div className="flex flex-col gap-1">
					<div className="flex gap-1">
						<div className="flex h-[63px] w-full flex-col justify-center rounded-[2px] bg-bg-floor-2 px-4">
							<div className="flex justify-between">
								<p className="text-[12px] text-text-secondary">
									{t("24hHigh")}
								</p>
								<RiseIcon />
							</div>
							<span className="text-text-primary">$1798.5531</span>
						</div>
						<div className="flex h-[63px] w-full flex-col justify-center rounded-[2px] bg-bg-floor-2 px-4">
							<div className="flex justify-between">
								<p className="text-[12px] text-text-secondary">{t("24hLow")}</p>
								<FallIcon />
							</div>
							<span className="text-text-primary">$1798.5531</span>
						</div>
					</div>
					<div className="flex h-[40px] w-full items-center justify-between rounded-[2px] bg-bg-floor-2 px-4 py-2 text-[12px] transition-colors group-hover:bg-bg-floor-3">
						<span className="text-text-secondary ">{t("24HChange")}</span>
						<div className="flex items-center gap-2">
							<PriceChange
								growing
								value="2244.525"
								unit="dollars"
								className="text-[12px] "
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="mb-[48px] rounded-[16px] border-fill-secondary border-t px-[14px] pt-5">
				<p className="font-[600] font-namu text-[24px] text-text-primary uppercase leading-[24px]">
					{t("analytics")}
				</p>
				<div className="mt-4 flex gap-1 text-[14px]">
					<Button
						variant={"tab"}
						data-active={currentGraph === "candles"}
						className="h-10 w-full"
						onClick={() => setCurrentGraph("candles")}
					>
						<CandlesIcon className="mb-[2px] scale-85" />
						<span>{t("candles")}</span>
					</Button>

					<Button
						variant={"tab"}
						className="h-10 w-full"
						data-active={currentGraph === "linear"}
						onClick={() => setCurrentGraph("linear")}
					>
						<LinearIcon className="mb-[2px] scale-85" />
						<span>{t("line")}</span>
					</Button>
				</div>

				<div className="mt-8 flex gap-1">
					<Button
						className="w-full"
						data-active={true}
						size="M"
						variant="selector"
					>
						{t("1m")}
					</Button>
					<Button className="w-full" size="M" variant="selector">
						{t("15m")}
					</Button>
					<Button className="w-full" size="M" variant="selector">
						{t("30m")}
					</Button>
					<Button className="w-full" size="M" variant="selector">
						{t("1h")}
					</Button>
					<Button className="w-full" size="M" variant="selector">
						{t("12h")}
					</Button>
					<Button className="w-full" size="M" variant="selector">
						{t("1d")}
					</Button>
					<Button className="w-full" size="M" variant="selector">
						{t("1w")}
					</Button>
				</div>
				<div className="mt-4">
					{currentGraph === "candles" && <CandleChart height={443} />}
					{currentGraph === "linear" && <LinearChart height={443} />}
				</div>
			</div>

			<div className="mb-[48px] flex flex-col gap-8 rounded-[16px] border-fill-secondary border-t pt-5">
				<div className="flex items-center justify-between px-[14px]">
					<p className="font-[600] font-namu text-[24px] text-text-primary uppercase leading-[24px]">
						{t("porfolio")}
					</p>
					<Link to="/portfolio/$id" params={{ id: "arb" }}>
						<Button variant={"tertiary"}>{t("viewAll")}</Button>
					</Link>
				</div>
				<PortfolioTable />
			</div>

			<div className="bg-bg-floor-1">
				<span className="overflow-clip text-nowrap border-[#252627] border-t border-b py-px font-droid text-[10px] text-text-tertiary leading-[120%]">
					{`///////////////////////////////////
					///////// .- .-. -.-. .- -. ..- --`.repeat(9)}
				</span>

				<div className="pt-[24px]">
					<div className="px-[14px]">
						<div className="flex h-[160px] w-full flex-col justify-between rounded-[8px] bg-fill-primary-800">
							<div className="flex items-center justify-between gap-8 pt-3 pl-4">
								<span className="mb-1 font-[600] font-namu text-[18px] text-text-primary uppercase">
									{t("pnl")}
								</span>
								<Button
									variant={"ghost"}
									onClick={() => {
										setIsOpenSettingsSheet(true);
									}}
									className="w-fit"
								>
									<SettingsIcon
										data-open={isOpenSettingsSheet}
										className="text-text-primary transition-colors data-[open=true]:text-fill-brand-secondary-500"
									/>
								</Button>
							</div>
							<div className="flex flex-col items-center gap-1">
								<PriceChange growing value="23.23" />
								<div className="flex items-center gap-1 text-[14px]">
									<span className="text-text-primary">0.54 ETH</span>
									<span className="text-text-secondary">($37,623)</span>
								</div>
							</div>

							<div className="flex w-full items-center gap-4 px-4 pb-2">
								<div className="flex w-full gap-1">
									<Button className="w-full" size="M" variant="selector">
										{t("day")}
									</Button>
									<Button className="w-full" size="M" variant="selector">
										{t("week")}
									</Button>
									<Button className="w-full" size="M" variant="selector">
										{t("month")}
									</Button>
									<Button className="w-full" size="M" variant="selector">
										{t("year")}
									</Button>
									<Button className="w-full" size="M" variant="selector">
										{t("allTime")}
									</Button>
								</div>
							</div>
						</div>
						<div className="mt-6 mb-4 flex gap-1">
							<Button
								variant={"tab"}
								data-active={currentBottomTable === "balances"}
								className="h-10 w-full"
								onClick={() => setCurrentBottomTable("balances")}
							>
								<span>{t("balances")}</span>
							</Button>

							<Button
								variant={"tab"}
								data-active={currentBottomTable === "positions"}
								className="h-10 w-full"
								onClick={() => setCurrentBottomTable("positions")}
							>
								<span>{t("positions")}</span>
							</Button>

							<Button
								variant={"tab"}
								data-active={currentBottomTable === "history"}
								className="h-10 w-full"
								onClick={() => setCurrentBottomTable("history")}
							>
								<span>{t("history")}</span>
							</Button>
						</div>
					</div>
				</div>

				<div>
					{currentBottomTable === "balances" && <BalancesTable />}
					{currentBottomTable === "positions" && <PositionsTable />}
					{currentBottomTable === "history" && <HistoryTable />}
				</div>
			</div>
			<BottomSheet
				open={isOpenSettingsSheet}
				onDismiss={() => setIsOpenSettingsSheet(false)}
			>
				<div className="px-4 pb-[56px]">
					<div className=" flex flex-col gap-6 pb-6">
						<span className="text-[14px] text-text-secondary ">
							PNL settings
						</span>
					</div>
					<div className="flex flex-col gap-4">
						<div>
							<span className="text-[12px] text-text-primary">
								{t("includeNewTransfers")}
							</span>
							<Toggle
								label={t("include")}
								size="small"
								className="mt-2 flex items-center "
							/>
						</div>
						<span className="text-[12px] text-text-secondary">
							{t("markSending")}
						</span>
					</div>
				</div>
			</BottomSheet>
		</div>
	);
};
