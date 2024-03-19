export interface Validators {
  name: string;
  validators?: ValidatorsEntity[] | null;
}
export interface ValidatorsEntity {
  moniker: string;
  address: string;
  active: boolean;
  hex_address: string;
  operator_address: string;
  jailed: boolean;
  status: string;
  tokens: string;
  delegator_shares: string;
  description: Description;
  unbonding_height: string;
  unbonding_time: string;
  commission: Commission;
  min_self_delegation: string;
  unbonding_on_hold_ref_count: string;
  unbonding_ids?: (string | null)[] | null;
  validator_bond_shares: string;
  liquid_shares: string;
  rank: number;
  signing_info?: SigningInfo | null;
  mintscan_image?: string | null;
  delegations: Delegations;
  slashes?: (SlashesEntity | null)[] | null;
  services?: Services | null;
  image?: string | null;
  uptime: number;
  uptime_periods?: UptimePeriodsEntity[] | null;
  missed_blocks: number;
  missed_blocks_periods?: MissedBlocksPeriodsEntity[] | null;
  public_nodes: PublicNodes;
  path?: string | null;
  name?: string | null;
  identity?: string | null;
  keybase_image?: string | null;
  restake?: Restake | null;
  private_nodes?: PrivateNodes | null;
}

export interface Description {
  moniker: string;
  identity: string;
  website: string;
  security_contact: string;
  details: string;
}
export interface Commission {
  commission_rates: CommissionRates;
  update_time: string;
  rate: number;
}
export interface CommissionRates {
  rate: string;
  max_rate: string;
  max_change_rate: string;
}
export interface SigningInfo {
  address: string;
  start_height: string;
  index_offset: string;
  jailed_until: string;
  tombstoned: boolean;
  missed_blocks_counter: string;
}
export interface Delegations {
  total_tokens: string;
  total_count: number;
  total_tokens_display: number;
  total_usd: number;
}
export interface SlashesEntity {
  validator_period: string;
  fraction: string;
}
export interface Services {
  staking_rewards: StakingRewards;
}
export interface StakingRewards {
  name: string;
  verified: boolean;
  slug: string;
}
export interface UptimePeriodsEntity {
  blocks: number;
  uptime: number;
}
export interface MissedBlocksPeriodsEntity {
  blocks: number;
  missed: number;
}
export interface PublicNodes {
  rpc?: RpcEntityOrRestEntityOrGrpcEntity[] | null;
  rest?: RpcEntityOrRestEntityOrGrpcEntity[] | null;
  grpc?: RpcEntityOrRestEntityOrGrpcEntity[] | null;
}
export interface RpcEntityOrRestEntityOrGrpcEntity {
  address: string;
  provider: string;
}
export interface Restake {
  address: string;
  run_time?: string | string[] | null;
  minimum_reward: number;
}
export interface PrivateNodes {
  rpc?: boolean | null;
  rest?: boolean | null;
}
