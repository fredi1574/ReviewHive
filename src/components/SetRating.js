"use client";
import { updateRating } from "@/lib/databaseFunctions";
import { Star } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";

const SetRating = () => {
  const { id } = useParams();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const changeRating = async (newRating) => {
    setRating(newRating);
    await updateRating(id, newRating);
  };

  return (
    <div className="flex">
      <p className="mr-2">Your Rating:</p>
      {rating != 0 && <span className="mr-2">{rating}</span>}
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <button
            key={starValue}
            type="button"
            onClick={() => changeRating(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(rating)}
          >
            <Star
              className={
                starValue <= (hover || rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-400"
              }
            />
          </button>
        );
      })}
      <input type="hidden" name="rating" value={rating} />
    </div>
  );
};

export default SetRating;
