import React from "react";
import Separator from "./ui/Separator";
import Review from "./Review";
import { getReviewsByProfileId } from "@/lib/databaseFunctions";

export default async function ReviewsSection({ profileId }) {
  const reviews = await getReviewsByProfileId(profileId);

  return (
    <div>
      <Separator title="Reviews" />
      <div>
        {reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}
