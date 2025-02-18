import ReportButton from "./ReportButton";
import ReviewRating from "./ReviewRating";
import Separator from "./ui/Separator";

export default async function Review({ review }) {
  const { author, body, rating, timestamp } = review;

  return (
    <div>
      <div className="my-4 flex flex-col">
        <div className="flex justify-between">
          <p className="max-w-[95%]">{body}</p>
          <ReportButton />
        </div>
        <div className="flex gap-2">
          <ReviewRating rating={rating} />
          <p className="text-sm text-gray-400">|</p>
          <p className="text-sm italic text-gray-400">{author}</p>
          <p className="text-sm text-gray-400">|</p>
          <p className="text-sm text-gray-400">
            {new Date(timestamp.seconds * 1000).toLocaleDateString()}
          </p>
        </div>
      </div>
      <Separator />
    </div>
  );
}
