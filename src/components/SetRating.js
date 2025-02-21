"use client";
import { Star } from "lucide-react";
import { useState } from "react";

const SetRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex">
      <p className="mr-2">Your Rating:</p>
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <button
            key={starValue}
            type="button"
            onClick={() => {
              setRating(starValue);
            }}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(rating)}
          >
            <Star
              className={
                starValue <= (hover || rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }
            />
          </button>
        );
      })}
      <input type="hidden" name="rating" value={rating} />
      {rating != 0 && <span className="ml-2">({rating})</span>}
    </div>
  );
};

export default SetRating;
