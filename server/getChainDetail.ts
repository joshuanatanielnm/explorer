import { ChainDetails } from "@/types/directory/chain";

export const getChainDetail = async (chain: string): Promise<ChainDetails> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_COMOS_DIRECTORY_API_CHAIN}/${chain}`
  );
  return res.json();
};
