"use client";
import { useEffect, useState } from "react";
import { ChainCard } from "../card/chain-card";

interface HomeChainData {
  name: string;
  image: string;
}
interface HomeProps {
  chainsData: HomeChainData[];
}

export default function Home({ chainsData }: HomeProps) {
  const [chains, setChains] = useState(chainsData);
  const [search, setSearch] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  useEffect(() => {
    const filterChains = () => {
      const regex = new RegExp(search, "i");
      const filteredChains = chainsData.filter((value: HomeChainData) =>
        regex.test(value.name)
      );
      setChains(filteredChains);
    };
    filterChains();
  }, [chainsData, search]);

  return (
    <>
      <input
        className="w-full h-12 rounded-lg px-6 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
        placeholder="Search chains"
        type="text"
        value={search}
        onChange={handleChange}
      />
      <div className="flex flex-wrap gap-8 pt-10">
        {chains.map((chain) => (
          <ChainCard
            chainName={chain.name}
            chainImage={chain.image}
            key={chain.name}
          />
        ))}
      </div>
    </>
  );
}
