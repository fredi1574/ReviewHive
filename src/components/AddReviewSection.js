import { addReview } from "@/app/(lecturers)/[id]/actions";
import SetRating from "./SetRating";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import Separator from "./ui/Separator";
import { Textarea } from "./ui/textarea";

const AddReviewSection = ({ profileId }) => {
  return (
    <form action={addReview}>
      <Separator title="Add a review" />
      <div className="flex flex-col gap-2 rounded-md bg-slate-100 p-2">
        <input type="hidden" name="profileId" value={profileId} />
        <SetRating name="rating" />
        <Textarea
          placeholder="Write your review here..."
          name="body"
          className="bg-sky-100"
        />
        <div className="flex w-max gap-2">
          <Checkbox className="my-3" name="anonymous" />
          <p className="text-md my-2">Submit anonymously</p>
        </div>
      </div>
      <Button className="my-2 self-start">Submit</Button>
    </form>
  );
};

export default AddReviewSection;
