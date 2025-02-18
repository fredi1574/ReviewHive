import { Star } from "lucide-react";

const ReviewRating = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <Star
            key={starValue}
            className={
              starValue <= rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-400"
            }
          />
        );
      })}
    </div>
  );
};

export default ReviewRating;
