export interface AbciInfo {
  jsonrpc: string;
  id: number;
  result: Result;
}
export interface Result {
  response: Response;
}
export interface Response {
  data: string;
  version: string;
  last_block_height: string;
  last_block_app_hash: string;
}
