import Image from "next/image";
import Link from "next/link";

interface ChainCardProps {
  chainName: string;
  chainImage: string;
}

export function ChainCard({ chainName, chainImage }: ChainCardProps) {
  return (
    <Link
      href={`/${chainName}`}
      className="flex gap-3 bg-orange-100 w-full md:w-auto p-4 rounded-md hover:bg-orange-300 hover:text-zinc-900"
    >
      <Image
        src={chainImage}
        alt={`${chainName} logo`}
        width={40}
        height={40}
        className="rounded-full"
      />
      <h3 className="text-xl my-auto font-semibold">{chainName}</h3>
    </Link>
  );
}
