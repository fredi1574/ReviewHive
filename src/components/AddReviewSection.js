import { addReview } from "@/app/(profiles)/[id]/actions";
import SetRating from "./SetRating";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Textarea } from "./ui/textarea";

const AddReviewSection = ({ profileId }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Add a Review</CardTitle>
      </CardHeader>
      <form action={addReview}>
        <CardContent className="space-y-4">
          <input type="hidden" name="profileId" value={profileId} />
          <SetRating />
          <Textarea
            placeholder="Write your review here..."
            name="body"
            className="min-h-[100px]"
            required
          />
          <div className="flex items-center space-x-2">
            <Checkbox id="anonymous" name="anonymous" />
            <label
              htmlFor="anonymous"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Submit anonymously
            </label>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit">Submit Review</Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default AddReviewSection;
