"use client";

import Link from "next/link";
import { useChainDetail } from "@/hooks/useChainDetail";
import Validators from "@/components/sections/validators";
import Proposals from "@/components/sections/proposals";
import Block from "@/components/sections/block";

interface Props {
  params: {
    slug: string;
  };
}
export default function Chain(props: Props) {
  const chainName = props.params.slug;
  const { data: chainData, isLoading, isError } = useChainDetail(chainName);

  if (isLoading)
    return (
      <div className="border-orange-100 h-20 w-20 animate-spin rounded-full border-8 border-t-orange-600 absolute top-1/2 left-1/2 -ml-8 -mt-10" />
    );

  if (isError)
    return (
      <div className="flex gap-4">
        <Link href="/" className="text-2xl">
          {"<-"}
        </Link>
        <h3 className="text-2xl font-bold text-zinc-900">Chain not found</h3>
      </div>
    );

  if (chainData)
    return (
      <div>
        <div className="pb-12">
          <div className="flex gap-4 ">
            <Link href="/" className="text-2xl">
              {"<-"}
            </Link>
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 pb-3">
                {chainData.chain.pretty_name}
              </h2>
              <p className="hidden md:flex">{chainData.chain.description}</p>
            </div>
          </div>
          <p className="flex md:hidden">{chainData.chain.description}</p>
        </div>
        <div className="flex flex-col gap-10 md:px-9">
          <Block chainData={chainData} />
          <Validators chainName={chainName} />
          <Proposals chainData={chainData} />
        </div>
      </div>
    );
}
