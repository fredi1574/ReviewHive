import InfoCard from "@/components/InfoCard";
import { getProfiles } from "@/lib/databaseFunctions";

export default async function CardsContainer() {
  const profiles = await getProfiles();

  if (!profiles) {
    return (
      <div className="text-center text-2xl text-red-500">No profiles found</div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-x-2 gap-y-4 lg:grid-cols-4">
      {profiles.map((profile) => (
        <InfoCard key={profile.id} profile={profile} />
      ))}
    </div>
  );
}
