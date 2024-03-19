import { Block } from "@/types/rest/block";

export const getBlock = async (url: string): Promise<Block> => {
  const res = await fetch(url);
  return res.json();
};
