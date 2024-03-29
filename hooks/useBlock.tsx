import { getBlock } from "@/server/getBlock";
import { ChainDetails } from "@/types/directory/chain";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

interface UseBlockInterface {
  chainData?: ChainDetails;
}

export const useBlock = ({ chainData }: UseBlockInterface) => {
  const [refetchInterval, setRefetchInterval] = useState(5000);
  const [retryCount, setRetryCount] = useState(0);
  const retryLimit = chainData?.chain.best_apis.rest?.length ?? 5;
  return useQuery({
    queryKey: ["USE_BLOCK", chainData?.chain.name],
    queryFn: async () => {
      const restUrl = chainData?.chain.best_apis.rest
        ? `${chainData?.chain.best_apis.rest[retryCount].address}cosmos/base/tendermint/v1beta1/blocks/latest`
        : "";

      try {
        setRefetchInterval(5000);
        const res = await getBlock(restUrl);
        return { ...res, restUrl };
      } catch (error) {
        setRetryCount(retryCount + 1);
        // NOTE: RETRY TO FETCH 3 DIFFERENT REST API BEFORE STOP
        if (retryCount === retryLimit) {
          setRefetchInterval(0);
        }
        setRefetchInterval(1000);
        throw error;
      }
    },
    refetchInterval: refetchInterval,
  });
};
