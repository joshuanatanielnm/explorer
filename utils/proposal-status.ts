export function proposalStatus(status: string) {
  if (status === "PROPOSAL_STATUS_DEPOSIT_PERIOD") {
    return "Deposit period";
  }
  if (status === "PROPOSAL_STATUS_VOTING_PERIOD") {
    return "Voting period";
  }
  if (status === "PROPOSAL_STATUS_PASSED") {
    return "Passed";
  }
  if (status === "PROPOSAL_STATUS_REJECTED") {
    return "Rejected";
  }
  if (status === "PROPOSAL_STATUS_FAILED") {
    return "Failed";
  } else {
    return "Failed";
  }
}
