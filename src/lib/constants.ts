import type { Token } from "./types";

export type Chain = {
	logo: string;
	name: string;
	id: number;
	color: string;
};

// background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(99.46deg, #9731CE 1.22%, #7B3FE3 99.46%);

export const Chains: Array<Chain> = [
	{
		logo: "/icons/chains/ethereum.svg",
		name: "Ethereum",
		id: 1,
		color: "#627EEA",
	},
	{
		logo: "/icons/chains/arbitrum.svg",
		name: "Arbitrum",
		id: 42161,
		color: "#2D374B",
	},
	{
		logo: "/icons/chains/optimism.svg",
		name: "Optimism",
		id: 10,
		color: "#FF0420",
	},
	{
		logo: "/icons/chains/zkSync.svg",
		name: "zkSync",
		id: 324,
		color: "#1E68FF",
	},
	{
		logo: "/icons/chains/base.svg",
		name: "Base",
		id: 8453,
		color: "#0052FF",
	},
	{
		logo: "/icons/chains/bsc.svg",
		name: "BSC",
		id: 56,
		color: "#F0B90B",
	},
	{
		logo: "/icons/chains/polygon.svg",
		name: "Polygon",
		id: 137,
		color:
			"linear-gradient(99.46deg, #9731CE 1.22%, #7B3FE3 99.46%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
	},
	{
		logo: "/icons/chains/gnosis.svg",
		name: "Gnosis",
		id: 100,
		color: "#047A5B",
	},
	{
		logo: "/icons/chains/avalanche.svg",
		name: "Avalanche",
		id: 43114,
		color: "#E84142",
	},
	{
		logo: "/icons/chains/fantom.svg",
		name: "Fantom",
		id: 146,
		color: "#1969FF",
	},
	{
		logo: "/icons/chains/kaia.svg",
		name: "Kaia",
		id: 8217,
		color: "#BFF007",
	},
	{
		logo: "/icons/chains/aurora.svg",
		name: "Aurora",
		id: 1313161554,
		color: "#1A373D",
	},
];

export const ARBITRUM_TOKENS: Token[] = [
	{
		name: "Tether USDt",
		symbol: "USDT",
		logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
		address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
		priceFeedAddress: "0x3f3f5dF88dC9F13eac63DF89EC16ef6e7E25DdE7",
	},
	{
		name: "USDC",
		symbol: "USDC",
		logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png",
		address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
		priceFeedAddress: "0x50834F3163758fcC1Df9973b6e91f0F0F0434aD3",
	},
	{
		name: "Chainlink",
		symbol: "LINK",
		logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png",
		address: "0xf97f4df75117a78c1A5a0DBb814Af92458539FB4",
		priceFeedAddress: "0x86E53CF1B870786351Da77A57575e79CB55812CB",
	},
	{
		name: "Uniswap",
		symbol: "UNI",
		logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png",
		address: "0xFa7F8980b0f1E64A2062791cc3b0871572f1F7f0",
		priceFeedAddress: "0x9C917083fDb403ab5ADbEC26Ee294f6EcAda2720",
	},
	{
		name: "Ethena USDe",
		symbol: "USDe",
		logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/29470.png",
		address: "0x5d3a1ff2b6bab83b63cd9ad0787074081a52ef34",
		priceFeedAddress: "0x88AC7Bca36567525A866138F03a6F6844868E0Bc",
	},
	{
		name: "Dai",
		symbol: "DAI",
		logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/4943.png",
		address: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
		priceFeedAddress: "0xc5C8E77B397E531B8EC06BFb0048328B30E9eCfB",
	},
	{
		name: "Arbitrum",
		symbol: "ARB",
		logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/11841.png",
		address: "0x912CE59144191C1204E64559FE8253a0e49E6548",
		priceFeedAddress: "0xb2A824043730FE05F3DA2efaFa1CBbe83fa548D6",
	},
	{
		name: "Lido DAO",
		symbol: "LDO",
		logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/8000.png",
		address: "0x13Ad51ed4F1B7e9Dc168d8a00cB3f4dDD85EfA60",
		priceFeedAddress: "0xA43A34030088E6510FecCFb77E88ee5e7ed0fE64",
	},
	{
		name: "The Graph",
		symbol: "GRT",
		logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/6719.png",
		address: "0x9623063377AD1B27544C965cCd7342f7EA7e88C7",
		priceFeedAddress: "0x0F38D86FceF4955B705F35c9e41d1A16e0637c73",
	},
	// {
	// 	name: "Curve DAO Token",
	// 	symbol: "CRV",
	// 	logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/6538.png",
	// 	address: "0x11cDb42B0EB46D95f990BeDD4695A6e3fA034978",
	// },
	// {
	// 	name: "Wormhole",
	// 	symbol: "W",
	// 	logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/29587.png",
	// 	address: "0xB0fFa8000886e57F86dd5264b9582b2Ad87b2b91",
	// },
	// {
	// 	name: "Pendle",
	// 	symbol: "PENDLE",
	// 	logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/9481.png",
	// 	address: "0x0c880f6761f1af8d9aa9c466984b80dab9a8c9e8",
	// },
	// {
	// 	name: "Gnosis",
	// 	symbol: "GNO",
	// 	logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1659.png",
	// 	address: "0xa0b862f60edef4452f25b4160f177db44deb6cf1",
	// },
	// {
	// 	name: "Axelar",
	// 	symbol: "AXL",
	// 	logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/17799.png",
	// 	address: "0x23ee2343B892b1BB63503a4FAbc840E0e2C6810f",
	// },
	// {
	// 	name: "TrueUSD",
	// 	symbol: "TUSD",
	// 	logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/2563.png",
	// 	address: "0x4D15a3A2286D883AF0AA1B3f21367843FAc63E07",
	// },
	// {
	// 	name: "LayerZero",
	// 	symbol: "ZRO",
	// 	logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/26997.png",
	// 	address: "0x6985884c4392d348587b19cb9eaaf157f13271cd",
	// },
	// {
	// 	name: "ether.fi",
	// 	symbol: "ETHFI",
	// 	logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/29814.png",
	// 	address: "0x7189fb5B6504bbfF6a852B13B7B82a3c118fDc27",
	// },
	// {
	// 	name: "Animecoin",
	// 	symbol: "ANIME",
	// 	logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/35319.png",
	// 	address: "0x37a645648df29205c6261289983fb04ecd70b4b3",
	// },
	// {
	// 	name: "Aethir",
	// 	symbol: "ATH",
	// 	logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/30083.png",
	// 	address: "0xc87b37a581ec3257b734886d9d3a581f5a9d056c",
	// },
	// {
	// 	name: "SushiSwap",
	// 	symbol: "SUSHI",
	// 	logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/6758.png",
	// 	address: "0xd4d42f0b6def4ce0383636770ef773390d85c61a",
	// },
	// {
	// 	name: "WOO",
	// 	symbol: "WOO",
	// 	logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/7501.png",
	// 	address: "0xcafcd85d8ca7ad1e1c6f82f651fa15e33aefd07b",
	// },
	// {
	// 	name: "Ankr",
	// 	symbol: "ANKR",
	// 	logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/3783.png",
	// 	address: "0xAeAeeD23478c3a4b798e4ed40D8B7F41366Ae861",
	// },
];
