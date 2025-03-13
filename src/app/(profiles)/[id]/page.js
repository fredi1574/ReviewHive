import AddReviewSection from "@/components/AddReviewSection";
import Rating from "@/components/AverageRating";
import RatingDistribution from "@/components/RatingDistribution";
// import ReportButton from "@/components/ReportButton";
import ReviewsSection from "@/components/ReviewsSection";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getProfileById, getReviewsByProfileId } from "@/lib/databaseFunctions";
import { ArrowLeft, BookOpen, Building2 } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

export default async function Profile({ params }) {
  const { id } = await params;

  const profile = await getProfileById(id);

  if (!profile) {
    return <ProfileNotFound />;
  }
  const { name, institute, departments, courses, averageRating } = profile;

  const reviews = await getReviewsByProfileId(id);
  const ratingCounts = countRatings(reviews);

  return (
    <Suspense fallback={<LoadingState />}>
      <div className="container mx-auto px-4 py-8">
        <Card className="bg-orange-50">
          <div className="flex justify-between rounded-t-md bg-lightOrange">
            <Link
              href="/"
              className="m-2 flex items-center gap-2 rounded-md px-2 py-4 text-sm font-medium text-muted-foreground transition-colors hover:bg-warmOrange hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              All profiles
            </Link>
            {/* <ReportButton /> */}
          </div>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">{name}</CardTitle>
            <CardDescription className="flex items-center text-base">
              <Building2 className="mr-2 h-5 w-5" />
              {institute}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 font-semibold">Departments</h3>
                <div className="flex flex-wrap gap-2">
                  {departments.split(",").map((department, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-warmOrange hover:cursor-pointer hover:bg-warmOrange/80"
                    >
                      {department.trim()}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Courses</h3>
                <p className="flex items-center text-sm">
                  <BookOpen className="mr-2 h-4 w-4" />
                  {courses}
                </p>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Ratings & Reviews</h3>
                <div className="flex items-center gap-4">
                  <Rating />
                  <div className="flex items-center">
                    <span className="text-2xl font-bold">
                      {averageRating?.toFixed(1)}
                    </span>
                    <span className="ml-1 text-sm text-muted-foreground">
                      / 5
                    </span>
                  </div>
                </div>
              </div>
              <RatingDistribution ratingCounts={ratingCounts} />
            </div>

            <Separator />

            <AddReviewSection profileId={id} />

            <Separator />

            <ReviewsSection profileId={id} />
          </CardContent>
        </Card>
      </div>
    </Suspense>
  );
}

function LoadingState() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-primary" />
    </div>
  );
}

function ProfileNotFound() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle className="text-2xl text-red-500">
            Profile Not Found
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            We couldn&apos;t find the profile you&apos;re looking for.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-primary bg-warmOrange px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-warmOrange/70"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Profiles
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}

function countRatings(reviews) {
  const ratingCounts = reviews.reduce((accumulator, review) => {
    const rating = review.rating;
    accumulator[rating] = (accumulator[rating] || 0) + 1;
    return accumulator;
  }, {});

  return ratingCounts;
}
