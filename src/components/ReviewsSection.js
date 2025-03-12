import { getReviewsByProfileId } from "@/lib/databaseFunctions";
import Review from "./Review";
import { Bookmark } from "lucide-react";

export default async function ReviewsSection({ profileId }) {
  const reviews = await getReviewsByProfileId(profileId);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Reviews</h3>
      {reviews.length > 0 ? (
        reviews.map((review) => <Review key={review.id} review={review} />)
      ) : (
        <div className="flex flex-col items-center gap-2">
          <Bookmark className="text-muted-foreground/40" />
          <p className="text-muted-foreground">
            No reviews yet. Be the first to leave a review!
          </p>
        </div>
      )}
    </div>
  );
}
