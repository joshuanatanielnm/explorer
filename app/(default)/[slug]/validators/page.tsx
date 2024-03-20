"use client";
import { TableValidators } from "@/components/validators/table";
import { useValidators } from "@/hooks/useValidators";
import Link from "next/link";
interface Props {
  params: {
    slug: string;
  };
}
export default function Validators(props: Props) {
  const chainName = props.params.slug;
  const { data: validatorsData, isLoading, isError } = useValidators(chainName);
  const sortByRank = validatorsData?.validators?.sort((a, b) =>
    a.rank > b.rank ? 1 : b.rank > a.rank ? -1 : 0
  );

  if (isLoading)
    return (
      <div className="border-orange-100 h-20 w-20 animate-spin rounded-full border-8 border-t-orange-600" />
    );
  if (isError)
    return (
      <div>
        <h3 className="font-bold text-zinc-900">Proposal</h3>
        Validators not found
      </div>
    );

  return (
    <div>
      <div className="flex gap-4 pb-10">
        <Link href={`/${chainName}`} className="text-2xl">
          {"<-"}
        </Link>
        <div>
          <h2 className="text-2xl font-bold text-zinc-900 pb-3">
            {chainName} validators
          </h2>
        </div>
      </div>

      {sortByRank ? (
        <TableValidators validators={sortByRank} chainName={chainName} />
      ) : (
        "Validators not found"
      )}
    </div>
  );
}
