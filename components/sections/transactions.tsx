import { decodeTxRaw } from "@cosmjs/proto-signing";
import { fromAscii, fromBase64, fromUtf8 } from "@cosmjs/encoding";
import { ChainDetails } from "@/types/directory/chain";
import { useBlock } from "@/hooks/useBlock";
import { useTransactions } from "@/hooks/useTransactions";
import { TableTransactions } from "../transactions/table";

interface TransactionsProps {
  chainData?: ChainDetails;
}

export default function Transactions({ chainData }: TransactionsProps) {
  const restUrl =
    chainData?.chain.best_apis.rest &&
    chainData?.chain.best_apis.rest.length > 0
      ? true
      : false;

  const {
    data: transactionsData,
    isLoading,
    isError,
  } = useTransactions({
    chainData,
  });

  if (!restUrl) return <div>Block data not available</div>;

  if (isLoading && restUrl)
    return (
      <div className="border-orange-100 h-20 w-20 animate-spin rounded-full border-8 border-t-orange-600" />
    );
  if (isError || !restUrl) return <div>Block data not available</div>;

  const data = transactionsData?.map((transaction) =>
    decodeTxRaw(fromBase64(transaction))
  );
  console.log(data);
  return (
    <div>
      <h3 className="font-bold text-zinc-900 pb-4">Transactions history</h3>
      <TableTransactions transactions={data} />
    </div>
  );
}
