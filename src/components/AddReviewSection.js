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
            className="min-h-[100px] selection:bg-warmOrange focus-visible:ring-warmOrange"
            required
          />
          <div className="flex items-center space-x-2">
            <Checkbox id="anonymous" name="anonymous" className="h-7 w-7" />
            <label
              htmlFor="anonymous"
              className="select-none text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Submit anonymously
            </label>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            className="bg-warmOrange/90 hover:bg-warmOrange/60 active:bg-warmOrange"
          >
            Submit Review
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default AddReviewSection;
