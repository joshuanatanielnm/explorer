import { getChains } from "@/server/getChains";
import { useQuery } from "@tanstack/react-query";

export const useChains = () => {
  return useQuery({
    queryKey: ["USE_CHAINS"],
    queryFn: async () => {
      const res = await getChains();
      return res;
    },
    refetchInterval: 5000,
    refetchOnReconnect: true,
  });
};
