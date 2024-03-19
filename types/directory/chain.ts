export interface ChainDetails {
  repository: Repository;
  chain: Chain;
}
export interface Repository {
  url: string;
  branch: string;
  commit: string;
  timestamp: number;
}
export interface Chain {
  $schema: string;
  chain_name: string;
  chain_id: string;
  website: string;
  pretty_name: string;
  status: string;
  network_type: string;
  bech32_prefix: string;
  daemon_name: string;
  node_home: string;
  key_algos?: string[] | null;
  slip44: number;
  fees: Fees;
  staking: Staking;
  codebase: Codebase;
  logo_URIs: ImagesEntityOrLogoURIs;
  description: string;
  peers: Peers;
  apis: Apis;
  explorers?: ExplorersEntity[] | null;
  images?: ImagesEntityOrLogoURIs[] | null;
  name: string;
  path: string;
  symbol: string;
  display: string;
  denom: string;
  decimals: number;
  coingecko_id: string;
  image: string;
  height: number;
  best_apis: BestApis;
  proxy_status: ProxyStatus;
  versions: Versions;
  params: Params;
  services: Services;
  prices: Prices;
  assets?: AssetsEntity[] | null;
}
export interface Fees {
  fee_tokens?: FeeTokensEntity[] | null;
}
export interface FeeTokensEntity {
  denom: string;
  fixed_min_gas_price: number;
  low_gas_price: number;
  average_gas_price: number;
  high_gas_price: number;
}
export interface Staking {
  staking_tokens?: StakingTokensEntity[] | null;
}
export interface StakingTokensEntity {
  denom: string;
}
export interface Codebase {
  git_repo: string;
  recommended_version: string;
  compatible_versions?: string[] | null;
  genesis: Genesis;
  versions?: VersionsEntity[] | null;
}
export interface Genesis {
  genesis_url: string;
}
export interface VersionsEntity {
  name: string;
  tag: string;
  recommended_version: string;
  compatible_versions?: string[] | null;
  cosmos_sdk_version: string;
  ibc_go_version: string;
  consensus: Consensus;
  height: number;
  next_version_name: string;
  proposal?: number | null;
}
export interface Consensus {
  type: string;
  version: string;
}
export interface ImagesEntityOrLogoURIs {
  png: string;
  svg: string;
}
export interface Peers {
  seeds?: SeedsEntity[] | null;
  persistent_peers?: PersistentPeersEntity[] | null;
}
export interface SeedsEntity {
  id: string;
  address: string;
  provider: string;
}
export interface PersistentPeersEntity {
  id: string;
  address: string;
  provider?: string | null;
}
export interface Apis {
  rpc?: RpcEntityOrRestEntityOrGrpcEntity[] | null;
  rest?: RpcEntityOrRestEntityOrGrpcEntity[] | null;
  grpc?: RpcEntityOrRestEntityOrGrpcEntity[] | null;
}
export interface RpcEntityOrRestEntityOrGrpcEntity {
  address: string;
  provider: string;
}
export interface ExplorersEntity {
  kind: string;
  url: string;
  tx_page?: string | null;
  account_page?: string | null;
}
export interface BestApis {
  rest?: RpcEntityOrRestEntityOrGrpcEntity[] | null;
  rpc?: RpcEntityOrRestEntityOrGrpcEntity[] | null;
}
export interface ProxyStatus {
  rest: boolean;
  rpc: boolean;
}
export interface Versions {
  application_version: string;
  cosmos_sdk_version: string;
  tendermint_version: string;
}
export interface Params {
  authz: boolean;
  actual_block_time: number;
  actual_blocks_per_year: number;
  current_block_height: string;
  unbonding_time: number;
  max_validators: number;
  staking: Staking1;
  slashing: Slashing;
  bonded_ratio: number;
  blocks_per_year: number;
  block_time: number;
  base_inflation: number;
  mint: Mint;
  community_tax: number;
  distribution: Distribution;
  estimated_apr: number;
  calculated_apr: number;
  bonded_tokens: string;
  total_supply: string;
  annual_provision: string;
}
export interface Staking1 {
  unbonding_time: string;
  max_validators: number;
  max_entries: number;
  historical_entries: number;
  bond_denom: string;
  validator_bond_factor: string;
  global_liquid_staking_cap: string;
  validator_liquid_staking_cap: string;
}
export interface Slashing {
  signed_blocks_window: string;
  min_signed_per_window: string;
  downtime_jail_duration: string;
  slash_fraction_double_sign: string;
  slash_fraction_downtime: string;
}
export interface Mint {
  mint_denom: string;
  inflation_rate_change: string;
  inflation_max: string;
  inflation_min: string;
  goal_bonded: string;
  blocks_per_year: string;
}
export interface Distribution {
  community_tax: string;
  base_proposer_reward: string;
  bonus_proposer_reward: string;
  withdraw_addr_enabled: boolean;
}
export interface Services {
  staking_rewards: StakingRewards;
}
export interface StakingRewards {
  name: string;
  slug: string;
  symbol: string;
}
export interface Prices {
  coingecko: Coingecko;
}
export interface Coingecko {
  atom: AtomOrCoingecko;
}
export interface AtomOrCoingecko {
  usd: number;
}
export interface AssetsEntity {
  name: string;
  description: string;
  symbol: string;
  denom: string;
  decimals: number;
  coingecko_id?: string | null;
  base: DenomUnitsEntityOrBase;
  display?: DenomUnitsEntityOrBaseOrDisplay | null;
  denom_units?: DenomUnitsEntityOrBase[] | null;
  logo_URIs: LogoURIs;
  image: string;
  prices?: Prices1 | null;
}
export interface DenomUnitsEntityOrBase {
  denom: string;
  exponent: number;
  aliases?: string[] | null;
}
export interface DenomUnitsEntityOrBaseOrDisplay {
  denom: string;
  exponent: number;
}
export interface LogoURIs {
  png?: string | null;
  svg: string;
}
export interface Prices1 {
  coingecko: AtomOrCoingecko;
}
