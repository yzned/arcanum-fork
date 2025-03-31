import { useAccountStore } from "@/contexts/AccountContext";
import ChainLinkPriceFeed from "@/lib/abi/ChainLinkPriceFeed";
import ERC20 from "@/lib/abi/ERC20";
import { ARBITRUM_TOKENS } from "@/lib/constants";
import type { PriceData } from "@/lib/types";
import { useWallets } from "@privy-io/react-auth";
import BigNumber from "bignumber.js";
import { runInAction } from "mobx";
import { useEffect } from "react";
import { useReadContracts } from "wagmi";

export const useBalances = () => {
	const { balancesTokens } = useAccountStore();

	const { wallets } = useWallets();

	const { data: quantities } = useReadContracts({
		contracts: balancesTokens.map((token) => ({
			abi: ERC20,
			address: token.address,
			functionName: "balanceOf",
			args: [wallets[0]?.address],
		})),
	});

	const { data: prices } = useReadContracts({
		contracts: ARBITRUM_TOKENS.map((item) => ({
			abi: ChainLinkPriceFeed,
			address: item.priceFeedAddress,
			functionName: "latestRoundData",
		})),
	});

	useEffect(() => {
		if (!quantities) return;

		runInAction(() => {
			balancesTokens.forEach((token, index) => {
				const resultQuantities = quantities[index]?.result;
				if (prices) {
					const resultPrices = prices[index]?.result as PriceData;

					token.quantity = resultQuantities
						? new BigNumber(resultQuantities.toString())
						: new BigNumber(0);

					token.price = resultPrices[1]
						? new BigNumber(resultPrices[1].toString()).multipliedBy(10 ** -6)
						: new BigNumber(0);
				}
			});
		});
	}, [quantities, prices, balancesTokens]);

	return {};
};
