import React from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ValidatorsEntity } from "@/types/directory/validators";
import Link from "next/link";
import { formatDecimalToPercentage } from "@/utils/format-percentage";
import { formatPrice } from "@/utils/format-price";

export interface TableValidators {
  validators: ValidatorsEntity[] | undefined;
}
export const TableValidators = ({ validators }: TableValidators) => {
  return (
    <Table>
      <TableCaption className="w-full">
        <Link href="/validators" className="w-full text-zinc-800 font-semibold">
          <div className="w-full transition delay-100 bg-orange-200 py-3 rounded-md shadow-xl sh hover:bg-orange-300">
            See more validators
          </div>
        </Link>
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Rank</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Delegator shares</TableHead>
          <TableHead className="text-right">Commission rates</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {validators?.map((validator) => (
          <TableRow key={validator.address}>
            <TableCell className="font-medium">{validator.rank}</TableCell>
            <TableCell className="font-medium w-[400px]">
              {validator.moniker}
            </TableCell>
            <TableCell>{validator.active ? "Active" : "Inactive"}</TableCell>
            <TableCell>
              {formatPrice(Number(validator.delegator_shares).toFixed())}
            </TableCell>
            <TableCell className="text-right">
              {formatDecimalToPercentage(
                validator.commission.commission_rates.rate
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
