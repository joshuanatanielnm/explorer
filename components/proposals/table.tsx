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

export interface TableProposals {
  proposals: ProposalsEntity[] | undefined;
}
export const TableProposals = ({ proposals }: TableProposals) => {
  return (
    <Table>
      <TableCaption className="w-full">
        <Link href="/validators" className="w-full text-zinc-800 font-semibold">
          <div className="w-full transition delay-100 bg-orange-200 py-3 rounded-md shadow-xl sh hover:bg-orange-300">
            See more proposals
          </div>
        </Link>
      </TableCaption>
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
        {proposals?.map((proposal) => (
          <TableRow key={proposal.proposal_id}>
            <TableCell className="font-medium">
              {proposal.proposal_id}
            </TableCell>
            <TableCell className="font-medium">
              {proposal.content.title}
            </TableCell>
            <TableCell>
              {
                //@ts-ignore
                proposal.content["@type"].split(".").pop()
              }
            </TableCell>
            <TableCell>{proposalStatus(proposal.status)}</TableCell>
            <TableCell className="text-right">
              {String(new Date(proposal.voting_end_time))}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
