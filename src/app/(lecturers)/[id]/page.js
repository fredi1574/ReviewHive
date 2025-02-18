import AddReviewSection from "@/components/AddReviewSection";
import Rating from "@/components/AverageRating";
import RatingDistribution from "@/components/RatingDistribution";
import ReportButton from "@/components/ReportButton";
import ReviewsSection from "@/components/ReviewsSection";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getProfileById } from "@/lib/databaseFunctions";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function Profile({ params }) {
  const { id } = await params;

  const profile = await getProfileById(id);
  if (!profile) {
    return (
      <div className="text-center text-2xl text-red-500">Profile not found</div>
    );
  }
  const { name, institute, departments, courses, averageRating } = profile;

  return (
    <Card className="m-4">
      <div className="flex justify-between px-4 pt-4">
        <Link
          href={"/"}
          className="flex items-center gap-2 rounded-md px-2 duration-300 hover:bg-sky-200 active:bg-sky-300"
        >
          <ArrowLeft className="size-6" />
          <p className="text-lg">All profiles</p>
        </Link>
        <ReportButton />
      </div>
      <CardHeader>
        <CardTitle className="text-3xl">{name}</CardTitle>
        <CardDescription>{institute}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{departments}</p>
        <p>{courses}</p>
        <div className="flex">
          <p className="mr-2">Average Rating: {averageRating}</p>
          <Rating />
          {/* <p className="ml-1 text-gray-400">({numberOfRates} ratings)</p> */}
        </div>
        <RatingDistribution />
        <AddReviewSection profileId={id} />
        <ReviewsSection profileId={id} />
      </CardContent>
    </Card>
  );
}
