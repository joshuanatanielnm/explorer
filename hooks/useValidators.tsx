import { getChainDetail } from "@/server/getChainDetail";
import { getValidators } from "@/server/getValidators";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const useValidators = (chainName: string) => {
  return useQuery({
    queryKey: ["USE_VALIDATORS", chainName],
    queryFn: async () => {
      try {
        const res = await getValidators(chainName);
        return res;
      } catch (error) {
        throw error;
      }
    },
    retry: false,
  });
};
