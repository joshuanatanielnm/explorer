"use client";

import Link from "next/link";
import { TableValidators } from "../validators/table";
import { ChainDetails } from "@/types/directory/chain";
import { useQuery } from "@tanstack/react-query";
import { getProposals } from "@/server/getProposals";
import { Proposals } from "@/types/directory/proposal";
import { TableProposals } from "../proposals/table";
import { useState } from "react";

interface ValidatorsProps {
  chainData?: ChainDetails;
}

export default function Proposals({ chainData }: ValidatorsProps) {
  const [refetchInterval, setRefetchInterval] = useState(5000);
  const [retryCount, setRetryCount] = useState(0);
  const restUrl =
    chainData?.chain.best_apis.rest &&
    chainData?.chain.best_apis.rest.length > 0
      ? true
      : false;

  const {
    data: proposalData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["USE_CHAIN_PROPOSAL", chainData?.chain.name],
    queryFn: async () => {
      const restUrl =
        chainData?.chain.best_apis.rest &&
        chainData?.chain.best_apis.rest.length >= retryCount
          ? `${chainData?.chain.best_apis.rest[retryCount].address}cosmos/gov/v1beta1/proposals?pagination.limit=5&pagination.count_total=true&pagination.reverse=true`
          : "";
      try {
        const res: Proposals = await getProposals(restUrl);
        return res;
      } catch (error) {
        setRetryCount(retryCount + 1);

        // NOTE: RETRY TO FETCH 3 DIFFERENT REST API BEFORE STOP
        if (retryCount === 3) {
          setRefetchInterval(0);
        }
        throw error;
      }
    },
    refetchInterval: refetchInterval,
  });

  if (!restUrl)
    return (
      <div>
        <h3 className="font-bold text-zinc-900">Proposal</h3>
        No active proposal
      </div>
    );

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
      {proposalData?.proposals && (
        <TableProposals proposals={proposalData?.proposals} />
      )}
    </div>
  );
}
