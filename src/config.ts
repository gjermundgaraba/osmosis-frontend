import { Bech32Address } from '@keplr-wallet/cosmos';
import { ChainInfoWithExplorer } from './stores/chain';

export const HideCreateNewPool: boolean = window.location.hostname.startsWith('app.');

export const PoolsPerPage = 10;
export const RewardEpochIdentifier = 'day';

/**
 * Determine the channel info per the chain.
 * Guide users to use the same channel for convenience.
 */
export const IBCAssetInfos: {
	counterpartyChainId: string;
	// Souce channel id based on the Osmosis chain
	sourceChannelId: string;
	// Destination channel id from Osmosis chain
	destChannelId: string;
	coinMinimalDenom: string;
}[] = [
	{
		counterpartyChainId: 'cosmoshub-4',
		sourceChannelId: 'channel-0',
		destChannelId: 'channel-141',
		coinMinimalDenom: 'uatom',
	},
	{
		counterpartyChainId: 'akashnet-2',
		sourceChannelId: 'channel-1',
		destChannelId: 'channel-9',
		coinMinimalDenom: 'uakt',
	},
	{
		counterpartyChainId: 'sentinelhub-2',
		sourceChannelId: 'channel-2',
		destChannelId: 'channel-0',
		coinMinimalDenom: 'udvpn',
	},
	{
		counterpartyChainId: 'core-1',
		sourceChannelId: 'channel-4',
		destChannelId: 'channel-6',
		coinMinimalDenom: 'uxprt',
	},
	{
		counterpartyChainId: 'irishub-1',
		sourceChannelId: 'channel-6',
		destChannelId: 'channel-3',
		coinMinimalDenom: 'uiris',
	},
	{
		counterpartyChainId: 'crypto-org-chain-mainnet-1',
		sourceChannelId: 'channel-5',
		destChannelId: 'channel-10',
		coinMinimalDenom: 'basecro',
	},
];

export const EmbedChainInfos: ChainInfoWithExplorer[] = [
	{
		rpc: 'https://rpc-osmosis.keplr.app',
		rest: 'https://lcd-osmosis.keplr.app',
		chainId: 'osmosis-1',
		chainName: 'Osmosis',
		stakeCurrency: {
			coinDenom: 'OSMO',
			coinMinimalDenom: 'uosmo',
			coinDecimals: 6,
			coinImageUrl: window.location.origin + '/public/assets/tokens/osmosis.svg',
		},
		walletUrl: 'https://wallet.keplr.app/#/osmosis/stake',
		walletUrlForStaking: 'https://wallet.keplr.app/#/osmosis/stake',
		bip44: {
			coinType: 118,
		},
		bech32Config: Bech32Address.defaultBech32Config('osmo'),
		currencies: [
			{
				coinDenom: 'OSMO',
				coinMinimalDenom: 'uosmo',
				coinDecimals: 6,
				coinImageUrl: window.location.origin + '/public/assets/tokens/osmosis.svg',
			},
			{
				coinDenom: 'ION',
				coinMinimalDenom: 'uion',
				coinDecimals: 6,
				coinImageUrl: window.location.origin + '/public/assets/tokens/ion.png',
			},
		],
		feeCurrencies: [
			{
				coinDenom: 'OSMO',
				coinMinimalDenom: 'uosmo',
				coinDecimals: 6,
				coinImageUrl: window.location.origin + '/public/assets/tokens/osmosis.svg',
			},
		],
		features: ['stargate', 'ibc-transfer'],
		explorerUrlToTx: 'https://osmosis.bigdipper.live/transactions/{txHash}',
	},
	{
		rpc: 'https://rpc-cosmoshub.keplr.app',
		rest: 'https://lcd-cosmoshub.keplr.app',
		chainId: 'cosmoshub-4',
		chainName: 'Cosmos',
		stakeCurrency: {
			coinDenom: 'ATOM',
			coinMinimalDenom: 'uatom',
			coinDecimals: 6,
			coinGeckoId: 'cosmos',
			coinImageUrl: window.location.origin + '/public/assets/tokens/cosmos.svg',
		},
		bip44: {
			coinType: 118,
		},
		bech32Config: Bech32Address.defaultBech32Config('cosmos'),
		currencies: [
			{
				coinDenom: 'ATOM',
				coinMinimalDenom: 'uatom',
				coinDecimals: 6,
				coinGeckoId: 'cosmos',
				coinImageUrl: window.location.origin + '/public/assets/tokens/cosmos.svg',
			},
		],
		feeCurrencies: [
			{
				coinDenom: 'ATOM',
				coinMinimalDenom: 'uatom',
				coinDecimals: 6,
				coinGeckoId: 'cosmos',
				coinImageUrl: window.location.origin + '/public/assets/tokens/cosmos.svg',
			},
		],
		coinType: 118,
		features: ['stargate', 'ibc-transfer'],
		explorerUrlToTx: 'https://cosmos.bigdipper.live/transactions/{txHash}',
	},
	{
		rpc: 'https://rpc-akash.keplr.app',
		rest: 'https://lcd-akash.keplr.app',
		chainId: 'akashnet-2',
		chainName: 'Akash',
		stakeCurrency: {
			coinDenom: 'AKT',
			coinMinimalDenom: 'uakt',
			coinDecimals: 6,
			coinGeckoId: 'akash-network',
			coinImageUrl: window.location.origin + '/public/assets/tokens/akt.svg',
		},
		bip44: {
			coinType: 118,
		},
		bech32Config: Bech32Address.defaultBech32Config('akash'),
		currencies: [
			{
				coinDenom: 'AKT',
				coinMinimalDenom: 'uakt',
				coinDecimals: 6,
				coinGeckoId: 'akash-network',
				coinImageUrl: window.location.origin + '/public/assets/tokens/akt.svg',
			},
		],
		feeCurrencies: [
			{
				coinDenom: 'AKT',
				coinMinimalDenom: 'uakt',
				coinDecimals: 6,
				coinGeckoId: 'akash-network',
				coinImageUrl: window.location.origin + '/public/assets/tokens/akt.svg',
			},
		],
		coinType: 118,
		features: ['stargate', 'ibc-transfer'],
		explorerUrlToTx: 'https://akash.bigdipper.live/transactions/{txHash}',
	},
	{
		rpc: 'https://rpc-sentinel.keplr.app',
		rest: 'https://lcd-sentinel.keplr.app',
		chainId: 'sentinelhub-2',
		chainName: 'Sentinel',
		stakeCurrency: {
			coinDenom: 'DVPN',
			coinMinimalDenom: 'udvpn',
			coinDecimals: 6,
			coinGeckoId: 'sentinel-group',
			coinImageUrl: window.location.origin + '/public/assets/tokens/dvpn.png',
		},
		bip44: { coinType: 118 },
		bech32Config: Bech32Address.defaultBech32Config('sent'),
		currencies: [
			{
				coinDenom: 'DVPN',
				coinMinimalDenom: 'udvpn',
				coinDecimals: 6,
				coinGeckoId: 'sentinel-group',
				coinImageUrl: window.location.origin + '/public/assets/tokens/dvpn.png',
			},
		],
		feeCurrencies: [
			{
				coinDenom: 'DVPN',
				coinMinimalDenom: 'udvpn',
				coinDecimals: 6,
				coinGeckoId: 'sentinel-group',
				coinImageUrl: window.location.origin + '/public/assets/tokens/dvpn.png',
			},
		],
		explorerUrlToTx: 'https://explorer.sentinel.co/transactions/{txHash}',
		features: ['stargate', 'ibc-transfer'],
	},
	{
		rpc: 'https://rpc.core.persistence.one',
		rest: 'https://rest.core.persistence.one',
		chainId: 'core-1',
		chainName: 'Persistence',
		stakeCurrency: {
			coinDenom: 'XPRT',
			coinMinimalDenom: 'uxprt',
			coinDecimals: 6,
			coinGeckoId: 'persistence',
			coinImageUrl: window.location.origin + '/public/assets/tokens/xprt.png',
		},
		bip44: {
			coinType: 750,
		},
		bech32Config: Bech32Address.defaultBech32Config('persistence'),
		currencies: [
			{
				coinDenom: 'XPRT',
				coinMinimalDenom: 'uxprt',
				coinDecimals: 6,
				coinGeckoId: 'persistence',
				coinImageUrl: window.location.origin + '/public/assets/tokens/xprt.png',
			},
		],
		feeCurrencies: [
			{
				coinDenom: 'XPRT',
				coinMinimalDenom: 'uxprt',
				coinDecimals: 6,
				coinGeckoId: 'persistence',
				coinImageUrl: window.location.origin + '/public/assets/tokens/xprt.png',
			},
		],
		features: ['stargate', 'ibc-transfer'],
		explorerUrlToTx: 'https://explorer.persistence.one/transactions/{txHash}',
	},
	{
		rpc: 'https://rpc-iris.keplr.app',
		rest: 'https://lcd-iris.keplr.app',
		chainId: 'irishub-1',
		chainName: 'IRISnet',
		stakeCurrency: {
			coinDenom: 'IRIS',
			coinMinimalDenom: 'uiris',
			coinDecimals: 6,
			coinGeckoId: 'iris-network',
			coinImageUrl: window.location.origin + '/public/assets/tokens/iris.svg',
		},
		bip44: {
			coinType: 118,
		},
		bech32Config: Bech32Address.defaultBech32Config('iaa'),
		currencies: [
			{
				coinDenom: 'IRIS',
				coinMinimalDenom: 'uiris',
				coinDecimals: 6,
				coinGeckoId: 'iris-network',
				coinImageUrl: window.location.origin + '/public/assets/tokens/iris.svg',
			},
		],
		feeCurrencies: [
			{
				coinDenom: 'IRIS',
				coinMinimalDenom: 'uiris',
				coinDecimals: 6,
				coinGeckoId: 'iris-network',
				coinImageUrl: window.location.origin + '/public/assets/tokens/iris.svg',
			},
		],
		features: ['stargate', 'ibc-transfer'],
		explorerUrlToTx: 'https://iris.bigdipper.live/transactions/{txHash}',
	},
	{
		rpc: 'https://rpc-crypto-org.keplr.app/',
		rest: 'https://lcd-crypto-org.keplr.app/',
		chainId: 'crypto-org-chain-mainnet-1',
		chainName: 'Crypto.org',
		stakeCurrency: {
			coinDenom: 'CRO',
			coinMinimalDenom: 'basecro',
			coinDecimals: 8,
			coinGeckoId: 'crypto-com-chain',
			coinImageUrl: window.location.origin + '/public/assets/tokens/cro.png',
		},
		bip44: {
			coinType: 394,
		},
		bech32Config: Bech32Address.defaultBech32Config('cro'),
		currencies: [
			{
				coinDenom: 'CRO',
				coinMinimalDenom: 'basecro',
				coinDecimals: 8,
				coinGeckoId: 'crypto-com-chain',
				coinImageUrl: window.location.origin + '/public/assets/tokens/cro.png',
			},
		],
		feeCurrencies: [
			{
				coinDenom: 'CRO',
				coinMinimalDenom: 'basecro',
				coinDecimals: 8,
				coinGeckoId: 'crypto-com-chain',
				coinImageUrl: window.location.origin + '/public/assets/tokens/cro.png',
			},
		],
		features: ['stargate', 'ibc-transfer'],
		explorerUrlToTx: 'https://crypto.org/explorer/tx/{txHash}',
	},
];
