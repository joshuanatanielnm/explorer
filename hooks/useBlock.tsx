import { getBlock } from "@/server/getBlock";
import { ChainDetails } from "@/types/directory/chain";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

interface UseBlockInterface {
  chainData?: ChainDetails;
  interval: number;
}

export const useBlock = ({ chainData, interval }: UseBlockInterface) => {
  const [refetchInterval, setRefetchInterval] = useState(interval);
  const [retryCount, setRetryCount] = useState(0);
  return useQuery({
    queryKey: ["USE_BLOCK", chainData?.chain.name],
    queryFn: async () => {
      const restUrl =
        chainData?.chain.best_apis.rest &&
        chainData?.chain.best_apis.rest.length >= retryCount
          ? `${chainData?.chain.best_apis.rest[retryCount].address}cosmos/base/tendermint/v1beta1/blocks/latest`
          : "";
      try {
        const res = await getBlock(restUrl);
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
};
