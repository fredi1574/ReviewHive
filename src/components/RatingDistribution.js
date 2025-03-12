import { Star } from "lucide-react";

const RatingDistribution = ({ ratingCounts }) => {
  return (
    <div className="my-4 flex flex-col gap-2">
      {[5, 4, 3, 2, 1].map((star) => (
        <div key={star} className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`fill-yellow-400 text-yellow-400 ${
                i < star ? "" : "opacity-20"
              }`}
            />
          ))}
          <span className="ml-2 text-gray-400">{` ${ratingCounts[star] !== undefined ? " - " + "(" + ratingCounts[star] + ")" : ""} `}</span>
        </div>
      ))}
    </div>
  );
};

export default RatingDistribution;
