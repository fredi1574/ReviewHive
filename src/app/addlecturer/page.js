import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { addLecturer } from "./actions";

export default function AddLecturerPage() {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-10">
        <form action={addLecturer}>
          <Card className="mx-auto max-w-2xl">
            <CardHeader>
              <CardTitle>Add a Lecturer Profile</CardTitle>
              <CardDescription>
                Enter the details of the new lecturer below.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Lecturer Name..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="institute">Institute</Label>
                <Input
                  id="institute"
                  name="institute"
                  placeholder="Enter the lecturer's institute..."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="departments">Departments</Label>
                <Input
                  id="departments"
                  name="departments"
                  placeholder="Enter the lecturer's departments..."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="courses">Courses</Label>
                <Textarea
                  id="courses"
                  name="courses"
                  placeholder="Enter the lecturer's courses..."
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Add Lecturer</Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  );
}
