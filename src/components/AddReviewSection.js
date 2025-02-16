import SetRating from "./SetRating";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import Separator from "./ui/Separator";
import { Textarea } from "./ui/textarea";

const AddReviewSection = () => {
  return (
    <div>
      <Separator title="Add a review" />
      <SetRating />
      <Textarea />
      <div className="flex gap-2">
        <Checkbox className="my-3" />
        <p className="text-md my-2">Submit anonymously</p>
      </div>
      <Button className="my-2">Submit</Button>
    </div>
  );
};

export default AddReviewSection;
