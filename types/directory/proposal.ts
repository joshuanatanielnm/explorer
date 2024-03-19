export interface Proposals {
  proposals?: ProposalsEntity[] | null;
  pagination: Pagination;
}
export interface ProposalsEntity {
  proposal_id: string;
  content: Content;
  status: string;
  final_tally_result: FinalTallyResult;
  submit_time: string;
  deposit_end_time: string;
  total_deposit?: TotalDepositEntity[] | null;
  voting_start_time: string;
  voting_end_time: string;
}
export interface Content {
  title: string;
  description: string;
}
export interface FinalTallyResult {
  yes: string;
  abstain: string;
  no: string;
  no_with_veto: string;
}
export interface TotalDepositEntity {
  denom: string;
  amount: string;
}
export interface Pagination {
  next_key?: null;
  total: string;
}
