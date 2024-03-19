import { getChainDetail } from "@/server/getChainDetail";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const useChainDetail = (chainName: string) => {
  const [refetchInterval, setRefetchInterval] = useState(5000);
  return useQuery({
    queryKey: ["USE_CHAIN_DETAIL", chainName],
    queryFn: async () => {
      try {
        const res = await getChainDetail(chainName);
        return res;
      } catch (error) {
        setRefetchInterval(0);
        throw error;
      }
    },
    refetchInterval: refetchInterval,
  });
};
