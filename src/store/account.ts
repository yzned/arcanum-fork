import { ARBITRUM_TOKENS } from "@/lib/constants";
import type { BalancesToken } from "@/lib/types";
import { makeAutoObservable } from "mobx";

export class AccountStore {
	name: string | undefined;
	balancesTokens: BalancesToken[];

	constructor() {
		makeAutoObservable(this, {}, { autoBind: true });
		this.name = "ABOBA";
		this.balancesTokens = ARBITRUM_TOKENS.map(
			({ logo, symbol, address, priceFeedAddress }) => ({
				logo,
				symbol,
				address,
				priceFeedAddress,
				quantity: undefined,
				price: undefined,
			}),
		);
	}
}
