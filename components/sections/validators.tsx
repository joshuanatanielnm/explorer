"use client";

import { useValidators } from "@/hooks/useValidators";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TableValidators } from "../validators/table";

interface ValidatorsProps {
  chainName: string;
}

export default function Validators({ chainName }: ValidatorsProps) {
  const { data: validatorsData, isLoading, isError } = useValidators(chainName);
  const activeValidators = validatorsData?.validators
    ?.filter((validator) => validator.active)
    .sort((a, b) => (a.rank > b.rank ? 1 : b.rank > a.rank ? -1 : 0))
    .slice(0, 5);
  const inActiveValidators = validatorsData?.validators
    ?.filter((validator) => validator.active !== true)
    .sort((a, b) => (a.rank > b.rank ? 1 : b.rank > a.rank ? -1 : 0))
    .slice(0, 5);

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
      <h3 className="font-bold text-zinc-900 pb-4">Validators</h3>
      <Tabs defaultValue="active" className="pt-2">
        <TabsList className="bg-orange-200 w-full">
          <TabsTrigger
            value="active"
            className="w-full focus-visible:bg-orange-400 data-[state=active]:bg-orange-400"
          >
            Active
          </TabsTrigger>
          <TabsTrigger
            value="inactive"
            className="w-full focus-visible:bg-orange-400 data-[state=active]:bg-orange-400"
          >
            Inactive
          </TabsTrigger>
        </TabsList>
        <TabsContent value="active">
          <TableValidators
            validators={activeValidators}
            chainName={chainName}
            showSeeMore
          />
        </TabsContent>
        <TabsContent value="inactive">
          <TableValidators
            validators={inActiveValidators}
            chainName={chainName}
            showSeeMore
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
