import { cache } from "react";

export const getChains = cache(
  async (): Promise<{ name: string; image: string }[]> => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_COMOS_DIRECTORY_API_CHAIN}`
    );
    const { chains } = await res.json();
    return chains;
  }
);
