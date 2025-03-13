import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
// import ReportButton from "./ReportButton";
import ReviewRating from "./ReviewRating";

export default function Review({ review }) {
  const { author, body, rating, timestamp } = review;

  return (
    <Card className="my-4">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarFallback>{author[0].toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{author}</p>
            <p className="text-xs text-muted-foreground">
              {new Date(timestamp.seconds * 1000).toLocaleDateString()}
            </p>
          </div>
        </div>
        {/* <ReportButton /> */}
      </CardHeader>
      <CardContent>
        <p className="text-sm">{body}</p>
      </CardContent>
      <CardFooter>
        <ReviewRating rating={rating} />
      </CardFooter>
    </Card>
  );
}
