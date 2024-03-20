import { ChainDetails } from "@/types/directory/chain";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Proposals as ProposalsType } from "@/types/directory/proposal";
import { getProposals } from "@/server/getProposals";

interface UseProposalInterface {
  chainData?: ChainDetails;
}

export const useProposal = ({ chainData }: UseProposalInterface) => {
  const [retryCount, setRetryCount] = useState(0);
  return useQuery({
    queryKey: ["USE_CHAIN_PROPOSAL", chainData?.chain.name],
    queryFn: async () => {
      const restUrl =
        chainData?.chain.best_apis.rest &&
        chainData?.chain.best_apis.rest.length >= retryCount
          ? `${chainData?.chain.best_apis.rest[retryCount].address}cosmos/gov/v1beta1/proposals?pagination.count_total=true&pagination.reverse=true`
          : "";
      try {
        const res: ProposalsType = await getProposals(restUrl);
        return res;
      } catch (error) {
        setRetryCount(retryCount + 1);
        throw error;
      }
    },
  });
};
