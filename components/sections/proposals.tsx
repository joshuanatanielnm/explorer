"use client";

import { ChainDetails } from "@/types/directory/chain";
import { TableProposals } from "../proposals/table";
import { useProposal } from "@/hooks/useProposals";

interface ProposalProps {
  chainData?: ChainDetails;
}

export default function Proposals({ chainData }: ProposalProps) {
  const restUrl =
    chainData?.chain.best_apis.rest &&
    chainData?.chain.best_apis.rest.length > 0
      ? true
      : false;

  const { data: proposalData, isLoading, isError } = useProposal({ chainData });

  if (isLoading && restUrl)
    return (
      <div className="border-orange-100 h-20 w-20 animate-spin rounded-full border-8 border-t-orange-600" />
    );
  if (isError || !restUrl)
    return (
      <div>
        <h3 className="font-bold text-zinc-900">Proposal</h3>
        No active proposal
      </div>
    );

  return (
    <div>
      <h3 className="font-bold text-zinc-900 pb-4">Proposal</h3>
      {proposalData?.proposals && proposalData.proposals.length > 0 ? (
        <TableProposals
          proposals={proposalData?.proposals.slice(0, 5)}
          chainName={chainData?.chain.chain_name ?? ""}
          showSeeMore
        />
      ) : (
        " No active proposal"
      )}
    </div>
  );
}
