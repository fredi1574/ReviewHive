import { getReviewsByProfileId } from "@/lib/databaseFunctions";
import Review from "./Review";

export default async function ReviewsSection({ profileId }) {
  const reviews = await getReviewsByProfileId(profileId);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Reviews</h3>
      {reviews.length > 0 ? (
        reviews.map((review) => <Review key={review.id} review={review} />)
      ) : (
        <p className="text-muted-foreground">
          No reviews yet. Be the first to leave a review!
        </p>
      )}
    </div>
  );
}
