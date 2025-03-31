import type BigNumber from "bignumber.js";
import type { Address } from "viem";

//after backend will be created change types to correct
export type Token = {
	name: string;
	symbol: string;
	address: Address;
	creationId?: string;
	priceFeedType?:
		| "UniswapV3"
		| "UniswapV2"
		| "Chainlink"
		| "FixedPrice"
		| "RedStone";
	share?: string;
	creationState?: "new" | "edited" | "readed";
	logo: string;
	quantity?: string;
	targetShare?: string;
	currentShare?: string;
	price?: string;
	txnLink?: string;
	tags?: string[];
	priceFeedAddress?: Address;
};

export type BalancesToken = {
	logo: string;
	symbol: string;
	quantity?: BigNumber;
	priceFeedAddress?: Address;
	price?: BigNumber;
	address: Address;
};

export interface PriceData {
	0: bigint; // roundId
	1: bigint; // answer
	2: bigint; // startedAt
	3: bigint; // updatedAt
	4: bigint; // answeredInRound
}
