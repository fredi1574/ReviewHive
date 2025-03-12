import { getProfiles } from "@/lib/databaseFunctions";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";
import ProfileGrid from "./ProfileGrid";
import Search from "./Search";

export default async function CardsContainer({ searchParams }) {
  const params = await searchParams;
  const query = params.query || "";
  const category = params.category;

  const profiles = await getProfiles(query, category);

  return (
    <div className="container mx-auto px-4 py-8">
      <Search placeHolder={"Search profiles..."} />
      <Suspense key={`${query}-${category}`} fallback={<LoadingState />}>
        <ProfileGrid profiles={profiles} />
      </Suspense>
    </div>
  );
}

function LoadingState() {
  return (
    <div className="flex h-64 items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  );
}
