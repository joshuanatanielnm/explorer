"use client";
import { TableProposals } from "@/components/proposals/table";
import { useChainDetail } from "@/hooks/useChainDetail";
import { useProposal } from "@/hooks/useProposals";
import Link from "next/link";

interface Props {
  params: {
    slug: string;
  };
}
export default function Proposals(props: Props) {
  const chainName = props.params.slug;
  const { data: chainData } = useChainDetail(chainName);
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
      <div className="flex gap-4 pb-10">
        <Link href={`/${chainName}`} className="text-2xl">
          {"<-"}
        </Link>
        <div>
          <h2 className="text-2xl font-bold text-zinc-900 pb-3">
            {chainName} proposals
          </h2>
        </div>
      </div>
      {proposalData?.proposals && proposalData.proposals.length > 0 ? (
        <TableProposals
          proposals={proposalData?.proposals}
          chainName={chainName}
        />
      ) : (
        "No active proposal"
      )}
    </div>
  );
}
