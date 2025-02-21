"use client";
import useDebounce from "@/hooks/useDebounce";
import { Search as SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Search({ placeHolder }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [term, setTerm] = useState(searchParams.get("query") || "");
  const debouncedTerm = useDebounce(term, 500);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (debouncedTerm) {
      params.set("query", debouncedTerm);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, [debouncedTerm, pathname, replace, searchParams]);

  return (
    <div className="my-4 flex rounded-md border-2 border-gray-50 bg-white py-[9px] text-sm outline-2 focus-within:border-warmOrange">
      <SearchIcon className="mx-2 h-[18px] w-[18px] text-gray-500 peer-focus:text-gray-900" />
      <input
        id="search"
        className="peer block w-full outline-none placeholder:text-gray-500"
        placeholder={placeHolder}
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
    </div>
  );
}
