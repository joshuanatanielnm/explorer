export interface Validators {
  network: string;
  validators?: ValidatorsEntity[] | null;
}
export interface ValidatorsEntity {
  network: string;
  moniker: string;
  details: string;
  ranking: number;
  identity: string;
  status: string;
  bonded: boolean;
  website: string;
  security_contact: string;
  commission_rate: string;
  commission_max_rate: string;
  commission_max_change_rate: string;
  total_staked: string;
  total_staked_in_dollars: string;
  daily_commission_in_tokens: string;
  daily_commission_in_dollars: string;
  staking_url: string;
}
