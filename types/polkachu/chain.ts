export interface ChainDetails {
  network: string;
  name: string;
  chain_id: string;
  description: string;
  twitter: string;
  github: string;
  symbol: string;
  denom: string;
  binary: string;
  folder: string;
  node_version: string;
  port_prefix: number;
  minimum_gas_price: string;
  logo: string;
  block_explorer: string;
  block_explorer_url: string;
  coingecko_id: string;
  token_price: string;
  staking_apr: string;
  polkachu_services: PolkachuServices;
}
export interface PolkachuServices {
  rpc: RpcOrApiOrGrpc;
  api: RpcOrApiOrGrpc;
  grpc: RpcOrApiOrGrpc;
  staking: StakingOrRestake;
  restake: StakingOrRestake;
  seed: Seed;
  addrbook: AddrbookOrGenesis;
  genesis: AddrbookOrGenesis;
  state_sync: StateSync;
  installation: InstallationOrCheatsheetOrNetworkScanOrValidatorDirectoryOrLivePeersOrSnapshot;
  cheatsheet: InstallationOrCheatsheetOrNetworkScanOrValidatorDirectoryOrLivePeersOrSnapshot;
  network_scan: InstallationOrCheatsheetOrNetworkScanOrValidatorDirectoryOrLivePeersOrSnapshot;
  validator_directory: InstallationOrCheatsheetOrNetworkScanOrValidatorDirectoryOrLivePeersOrSnapshot;
  live_peers: InstallationOrCheatsheetOrNetworkScanOrValidatorDirectoryOrLivePeersOrSnapshot;
  snapshot: InstallationOrCheatsheetOrNetworkScanOrValidatorDirectoryOrLivePeersOrSnapshot;
}
export interface RpcOrApiOrGrpc {
  active: boolean;
  url: string;
}
export interface StakingOrRestake {
  active: boolean;
  url: string;
  details: string;
}
export interface Seed {
  active: boolean;
  seed: string;
  details: string;
}
export interface AddrbookOrGenesis {
  active: boolean;
  download_url: string;
  details: string;
}
export interface StateSync {
  active: boolean;
  node: string;
  details: string;
}
export interface InstallationOrCheatsheetOrNetworkScanOrValidatorDirectoryOrLivePeersOrSnapshot {
  active: boolean;
  details: string;
}
