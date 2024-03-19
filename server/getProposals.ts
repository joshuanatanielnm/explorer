import { Proposals } from "@/types/directory/proposal";

export const getProposals = async (url: string): Promise<Proposals> => {
  const res = await fetch(url);
  return res.json();
};
