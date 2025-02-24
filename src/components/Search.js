"use client";
import useDebounce from "@/hooks/useDebounce";
import { Search as SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function Search({ placeHolder }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [term, setTerm] = useState(searchParams.get("query") || "");
  const [category, setCategory] = useState(searchParams.get("category"));
  const debouncedTerm = useDebounce(term, 500);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (debouncedTerm) {
      params.set("query", debouncedTerm);
    } else {
      params.delete("query");
    }
    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }
    replace(`${pathname}?${params.toString()}`);
  }, [debouncedTerm, category, pathname, replace, searchParams]);

  return (
    <div className="my-4 flex items-center rounded-md border-2 border-gray-50 bg-white py-[9px] text-sm outline-2 focus-within:border-warmOrange">
      <SearchIcon className="mx-2 text-gray-500 peer-focus:text-gray-900" />
      <input
        id="search"
        className="peer w-full outline-none placeholder:text-gray-500"
        placeholder={placeHolder}
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <Select defaultValue="name" onValueChange={(value) => setCategory(value)}>
        <SelectTrigger className="w-1/4 rounded-none border border-y-0 border-r-0 border-l-gray-300 text-gray-500 focus:ring-0">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="name">Name</SelectItem>
          <SelectItem value="institute">Institute</SelectItem>
          <SelectItem value="departments">Department</SelectItem>
          <SelectItem value="courses">Course</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
