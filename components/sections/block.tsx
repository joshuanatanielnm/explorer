"use client";
import { ChainDetails } from "@/types/directory/chain";
import { formatPrice } from "@/utils/format-price";
import { useBlock } from "@/hooks/useBlock";
import Link from "next/link";

interface BlockProps {
  chainData?: ChainDetails;
}

export default function Block({ chainData }: BlockProps) {
  const {
    data: blockData,
    isLoading,
    isError,
  } = useBlock({
    chainData,
  });

  if (isLoading)
    return (
      <div className="border-orange-100 h-20 w-20 animate-spin rounded-full border-8 border-t-orange-600" />
    );
  if (isError) return <div>Block data not available</div>;
  return (
    <div>
      <div className="pb-4">
        <div className="pb-4">
          <h3 className="font-semibold text-zinc-900">Block time</h3>
          <p className="pb-1">
            {`${
              blockData?.block.header.time
                ? String(new Date(blockData?.block.header.time))
                : "Unavailable"
            }.`}
          </p>
          <p className="text-xs">
            {`The block data below will be automatically updated every 5 seconds. I can't update it every second due to API limits.`}
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-1/2 bg-amber-100 p-6 text-center rounded-lg">
            <h3 className="text-xl font-semibold pb-2 text-zinc-900">
              {formatPrice(blockData?.block.header.height ?? 0)}
            </h3>
            <p>Current Block Height</p>
          </div>
          <div className="md:w-1/2 bg-amber-100 p-6 text-center rounded-lg">
            <h3 className="text-xl font-semibold pb-2 text-zinc-900">
              {blockData?.block.header.chain_id}
            </h3>
            <p>Chain ID</p>
          </div>
        </div>
      </div>

      <Link
        href={`/${chainData?.chain.chain_name}/block`}
        className="w-full text-zinc-800 font-semibold"
      >
        <div className="w-full text-sm text-center transition delay-100 bg-orange-200 py-3 rounded-md sh hover:bg-orange-300">
          See historical data
        </div>
      </Link>
    </div>
  );
}
