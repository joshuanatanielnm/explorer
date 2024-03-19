import { Validators } from "@/types/directory/validators";

export const getValidators = async (chain: string): Promise<Validators> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_COMOS_DIRECTORY_API_VALIDATORS}/${chain}`
  );
  return res.json();
};
