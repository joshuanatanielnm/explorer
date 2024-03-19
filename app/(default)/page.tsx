import Home from "@/components/sections/home";
import { getChains } from "@/server/getChains";
import Link from "next/link";

export default async function Page() {
  const chainsData = await getChains();
  const filteredChainsData = chainsData.filter(
    (chain, index, self) =>
      index === self.findIndex((c) => c.name === chain.name)
  );

  return (
    <div>
      <h1 className="text-3xl font-bold text-zinc-900 pb-2">Explorer</h1>
      <div className="pb-10">
        <p className="text-xl">
          Explorer dashboard for Cosmos-based Blockchains.
        </p>
        <p className="pt-2">
          This project was made with ❤️ by{" "}
          <Link
            href="http://joshuanatanielm.com/"
            className="text-orange-500 text-semibold"
          >
            Joshua Manuputty
          </Link>
        </p>
      </div>
      <Home chainsData={filteredChainsData} />
    </div>
  );
}
