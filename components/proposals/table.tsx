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
import Link from "next/link";
import { ProposalsEntity } from "@/types/directory/proposal";
import { proposalStatus } from "@/utils/proposal-status";
import { formatDistanceToNow, isPast } from "date-fns";

export interface TableProposals {
  proposals: ProposalsEntity[] | undefined;
  chainName: string;
  showSeeMore?: boolean;
}
export const TableProposals = ({
  proposals,
  chainName,
  showSeeMore,
}: TableProposals) => {
  return (
    <div className="flex flex-col gap-5">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">End time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {proposals?.map((proposal) => {
            const endTime = formatDistanceToNow(
              new Date(proposal.voting_end_time)
            );
            const isEndTimePast = isPast(new Date(proposal.voting_end_time));
            const endTimeText = `${endTime}${isEndTimePast ? " ago" : ""}`;
            return (
              <TableRow key={proposal.proposal_id}>
                <TableCell className="font-medium">
                  {proposal.proposal_id}
                </TableCell>
                <TableCell className="font-medium">
                  {proposal.content.title ?? "-"}
                </TableCell>
                <TableCell>
                  {
                    //@ts-ignore
                    proposal.content["@type"].split(".").pop()
                  }
                </TableCell>
                <TableCell>{proposalStatus(proposal.status)}</TableCell>
                <TableCell className="text-right">{endTimeText}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      {proposals && proposals?.length >= 5 && showSeeMore && (
        <Link
          href={`/${chainName}/proposals`}
          className="w-full text-zinc-800 font-semibold"
        >
          <div className="w-full text-sm text-center transition delay-100 bg-orange-200 py-3 rounded-md sh hover:bg-orange-300">
            See more proposals
          </div>
        </Link>
      )}
    </div>
  );
};
