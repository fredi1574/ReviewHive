import { Star } from "lucide-react";
import Separator from "./ui/Separator";

const RatingSection = () => {
  const numberOfRates = 100;
  return (
    <>
      <Separator title="Rating Distribution" />
      <div className="my-4 flex flex-col gap-2">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`fill-yellow-400 text-yellow-400 ${
                  i <= 4 - index ? "" : "opacity-20"
                }`}
              />
            ))}
            <span className="ml-2 text-gray-400"> - {numberOfRates}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default RatingSection;
