import type { Token } from "@/lib/types";
import BigNumber from "bignumber.js";
import { makeAutoObservable } from "mobx";
import { v4 as uuidv4 } from "uuid";
import type { Address } from "viem";

export class CreatePortfolioStore {
	name: string | undefined;
	symbol: string | undefined;
	description: string | undefined;
	logo: string | undefined;

	tokens: Token[] = [
		{
			creationId: uuidv4(),
			name: "Tether USDt",
			symbol: "USDT",
			address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
			logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
			priceFeedType: "UniswapV3",
			creationState: "readed",
			share: "30",
		},
		{
			creationId: uuidv4(),
			name: "USDC",
			symbol: "USDC",
			logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png",
			address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
			priceFeedType: "UniswapV3",
			creationState: "readed",
			share: "30",
		},
		{
			creationId: uuidv4(),
			name: "Uniswap",
			symbol: "UNI",
			logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png",
			address: "0xFa7F8980b0f1E64A2062791cc3b0871572f1F7f0",
			priceFeedType: "UniswapV3",
			creationState: "readed",
			share: "30",
		},
	];

	initalLiquidityToken: Token | undefined;
	initalLiquidityAmount: BigNumber | undefined;

	managementFee: BigNumber | undefined;
	managementFeeRecipient: Address | undefined;

	baseFee: BigNumber | undefined;
	deviationLimit: BigNumber | undefined;
	deviationFee: BigNumber | undefined;
	cashbackFeeShare: BigNumber | undefined;

	constructor() {
		makeAutoObservable(this, {}, { autoBind: true });
	}

	setName(name: string) {
		this.name = name;
	}

	get sharePercentsSum() {
		const totalShare = this.tokens.reduce(
			(acc, token) => acc.plus(token?.share || 0),
			new BigNumber(0),
		);

		return totalShare;
	}

	deleteToken(id: string) {
		this.tokens = this.tokens.filter((token) => token.creationId !== id);
	}

	startEditToken(id: string) {
		this.tokens = this.tokens.map((token) =>
			token.creationId === id ? { ...token, creationState: "edited" } : token,
		);
	}

	confirmlEditToken({
		id,
		share,
		contractAddress,
		name,
		symbol,
		logo,
	}: {
		id: string;
		share: string;
		contractAddress: string;
		name: string;
		logo: string;
		symbol: string;
	}) {
		this.tokens = this.tokens.map((token) =>
			token.creationId === id
				? {
						...token,
						creationState: "readed",
						share,
						contractAddress,
						logo,
						name,
						symbol,
					}
				: token,
		);
	}

	cancelEditToken(id: string) {
		const token = this.tokens.find((t) => t.creationId === id);
		if (token?.creationState === "new") {
			this.deleteToken(id);
		} else {
			this.tokens = this.tokens.map((token) =>
				token.creationId === id ? { ...token, creationState: "readed" } : token,
			);
		}
	}

	addNewToken() {
		this.tokens.push({
			creationId: uuidv4(),
			address: "",
			name: "",
			creationState: "new",
			symbol: "",
		});
	}
}
