import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatPrice } from "@/utils/format-price";
import { DecodedTxRaw } from "@cosmjs/proto-signing";
import { handleNullValue } from "@/utils/handle-null-value";

export interface TableTransactions {
  transactions?: DecodedTxRaw[];
}
export const TableTransactions = ({ transactions }: TableTransactions) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Amount</TableHead>
          <TableHead>Denom</TableHead>
          <TableHead>Granter</TableHead>
          <TableHead>Gas limit</TableHead>
          <TableHead className="text-right">Memo</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions?.map((transaction, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">
              {formatPrice(
                transaction.authInfo.fee?.amount[0]?.amount ?? "-"
              ) ?? "-"}
            </TableCell>
            <TableCell className="font-medium ">
              {transaction.authInfo.fee?.amount[0]?.denom ?? "-"}
            </TableCell>
            <TableCell className="font-medium ">
              {handleNullValue(transaction.authInfo.fee?.granter)}
            </TableCell>
            <TableCell>
              {formatPrice(
                transaction.authInfo.fee?.gasLimit
                  ? Number(transaction.authInfo.fee?.gasLimit)
                  : "-"
              )}
            </TableCell>
            <TableCell className="text-right w-30">
              {handleNullValue(transaction.body.memo)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
