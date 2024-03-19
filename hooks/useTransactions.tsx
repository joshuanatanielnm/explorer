import { getBlock } from "@/server/getBlock";
import { ChainDetails } from "@/types/directory/chain";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

interface UseTransactionsInterface {
  chainData?: ChainDetails;
}

export const useTransactions = ({ chainData }: UseTransactionsInterface) => {
  const [retryCount, setRetryCount] = useState(0);
  return useQuery({
    queryKey: ["USE_TRANSACTIONS", chainData?.chain.name],
    queryFn: async () => {
      const restUrl =
        chainData?.chain.best_apis.rest &&
        chainData?.chain.best_apis.rest.length >= retryCount
          ? `${chainData?.chain.best_apis.rest[retryCount].address}cosmos/base/tendermint/v1beta1/blocks/latest`
          : "";
      try {
        const res = await getBlock(restUrl);
        return res.block.data.txs;
      } catch (error) {
        setRetryCount(retryCount + 1);
        // NOTE: RETRY TO FETCH 3 DIFFERENT REST API BEFORE STOP
        throw error;
      }
    },
    refetchInterval: 0,
  });
};
