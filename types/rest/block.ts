export interface Block {
  block_id: LastBlockIdOrBlockId;
  block: BlockOrSdkBlock;
  sdk_block: BlockOrSdkBlock;
}
export interface LastBlockIdOrBlockId {
  hash: string;
  part_set_header: PartSetHeader;
}
export interface PartSetHeader {
  total: number;
  hash: string;
}
export interface BlockOrSdkBlock {
  header: Header;
  data: Data;
  evidence: Evidence;
  last_commit: LastCommit;
}
export interface Header {
  version: Version;
  chain_id: string;
  height: string;
  time: string;
  last_block_id: LastBlockIdOrBlockId;
  last_commit_hash: string;
  data_hash: string;
  validators_hash: string;
  next_validators_hash: string;
  consensus_hash: string;
  app_hash: string;
  last_results_hash: string;
  evidence_hash: string;
  proposer_address: string;
}
export interface Version {
  block: string;
  app: string;
}
export interface Data {
  txs?: string[] | null;
}
export interface Evidence {
  evidence?: null[] | null;
}
export interface LastCommit {
  height: string;
  round: number;
  block_id: LastBlockIdOrBlockId;
  signatures?: SignaturesEntity[] | null;
}
export interface SignaturesEntity {
  block_id_flag: string;
  validator_address?: string | null;
  timestamp: string;
  signature?: string | null;
}
