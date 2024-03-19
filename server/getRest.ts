export const getRest = async (rpcUrl: string) => {
  const res = await fetch(rpcUrl, { next: { revalidate: 5000 } });
  return res.json();
};
