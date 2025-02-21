import { Suspense } from "react";
import InfoCard from "@/components/InfoCard";
import { getProfiles } from "@/lib/databaseFunctions";
import { Loader2 } from "lucide-react";
import Search from "./Search";

export default async function CardsContainer({ searchParams }) {
  const params = await searchParams;
  const query = params.query || "";

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-3xl font-bold">Profiles</h1>
      <Search placeHolder={"Search profiles..."} />
      <Suspense key={query} fallback={<LoadingState />}>
        <ProfileGrid query={query} />
      </Suspense>
    </div>
  );
}

async function ProfileGrid({ query }) {
  const profiles = await getProfiles(query);

  if (!profiles || profiles.length === 0) {
    return <ErrorState />;
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {profiles.map((profile) => (
        <InfoCard key={profile.id} profile={profile} />
      ))}
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

function ErrorState() {
  return (
    <div className="rounded-lg bg-red-50 p-8 text-center">
      <h2 className="mb-2 text-2xl font-semibold text-red-600">
        No Profiles Found
      </h2>
      <p className="text-red-500">
        We couldn&apos;t find any profiles. Please try again.
      </p>
    </div>
  );
}
