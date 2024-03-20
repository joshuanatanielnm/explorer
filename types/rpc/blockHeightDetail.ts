export interface BlockHeightDetail {
  jsonrpc: string;
  id: number;
  result: BlockResult;
}
export interface BlockResult {
  block_id: LastBlockIdOrBlockId;
  block: Block;
}
export interface LastBlockIdOrBlockId {
  hash: string;
  parts: Parts;
}
export interface Parts {
  total: number;
  hash: string;
}
export interface Block {
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
  block_id_flag: number;
  validator_address: string;
  timestamp: string;
  signature?: string | null;
}
