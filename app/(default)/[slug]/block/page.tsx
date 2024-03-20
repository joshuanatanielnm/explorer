"use client";
import { useBlock } from "@/hooks/useBlock";
import { useChainDetail } from "@/hooks/useChainDetail";
import { Block, BlockResult } from "@/types/rpc/blockHeightDetail";
import { formatPrice } from "@/utils/format-price";
import Link from "next/link";
import { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Transactions from "@/components/sections/transactions";
import { TableTransactions } from "@/components/transactions/table";
import { decodeTxRaw } from "@cosmjs/proto-signing";
import { fromBase64 } from "@cosmjs/encoding";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";

interface Props {
  params: {
    slug: string;
  };
}

interface BlockWithRestUrl extends BlockResult {
  restUrl: string;
}
export default function Block(props: Props) {
  const chainName = props.params.slug;
  const [blockHistoryData, setBlockHistoryData] = useState<BlockWithRestUrl[]>(
    []
  );
  const { data: chainData } = useChainDetail(chainName);
  const restUrl =
    chainData?.chain.best_apis.rest &&
    chainData?.chain.best_apis.rest.length > 0
      ? true
      : false;
  const getMainUrl = (url: string): string => {
    const urlParts = url.split("/");
    return urlParts[2];
  };

  const {
    data: blockData,
    isLoading,
    isError,
  } = useBlock({
    chainData,
  });

  console.log(blockHistoryData);
  useEffect(() => {
    if (blockData) {
      //@ts-ignore
      setBlockHistoryData((history) => [...history, blockData]);
    }
  }, [blockData]);

  if (isLoading && restUrl)
    return (
      <div className="border-orange-100 h-20 w-20 animate-spin rounded-full border-8 border-t-orange-600" />
    );
  if (isError || !restUrl) return <div>No block historical data</div>;

  return (
    <div>
      <div className="pb-10">
        <div className="flex gap-4">
          <Link href={`/${chainName}`} className="text-2xl">
            {"<-"}
          </Link>
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 pb-3">
              {chainName} block historical data
            </h2>
            <p className="text-xs hidden md:flex">
              {`The block data below will be automatically updated every 5 seconds. I can't update it every second due to API limits.`}
            </p>
          </div>
        </div>
        <p className="text-xs flex md:hidden">
          {`The block data below will be automatically updated every 5 seconds. I can't update it every second due to API limits.`}
        </p>
      </div>
      <p className="text-md pt-2 font-semibold text-zinc-900 md:px-10 pb-8">
        {`Click the card to see transactions detail.`}
      </p>
      <div className="flex flex-wrap gap-6 md:px-10">
        {blockHistoryData.length > 0 &&
          blockHistoryData
            .slice(1)
            .reverse()
            .map((value) => {
              const txsData = value.block.data.txs?.map((transaction) =>
                decodeTxRaw(fromBase64(transaction))
              );
              return (
                <Dialog key={value.block.header.app_hash}>
                  <DialogTrigger className="bg-orange-100 p-6 text-left rounded-lg w-full md:w-auto">
                    <div>
                      <div className="flex justify-between pb-2">
                        <p className="font-semibold text-zinc-900">
                          {formatPrice(value.block.header?.height)}
                        </p>
                        <p>{value.block.data.txs?.length} tsx</p>
                      </div>
                      <p>{getMainUrl(value.restUrl)}</p>
                      <p className="pt-6">
                        Updated{" "}
                        {formatDistanceToNow(new Date(value.block.header.time))}{" "}
                        ago
                      </p>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="overflow-scroll max-w-full max-h-full">
                    <DialogHeader>
                      <DialogTitle>Transactions detail</DialogTitle>
                      <DialogDescription>
                        {value.block.data.txs &&
                        value.block.data.txs?.length > 0 ? (
                          <TableTransactions transactions={txsData} />
                        ) : (
                          <h3>No transactions</h3>
                        )}
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="w-full">
                      <DialogClose asChild>
                        <Button
                          type="button"
                          variant="secondary"
                          className="w-full"
                        >
                          Close
                        </Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              );
            })}
      </div>
    </div>
  );
}
