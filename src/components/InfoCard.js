import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, BookOpen, Building2 } from "lucide-react";
import Link from "next/link";

function InfoCard({ profile }) {
  const { id, name, institute, departments, courses, averageRating } = profile;

  return (
    <Link href={`/${id}`}>
      <Card className="group h-full transition-all duration-300 hover:scale-105 hover:shadow-md">
        <CardHeader className="rounded-t-md bg-blue-50 duration-300 group-hover:bg-warmOrange">
          <CardTitle className="text-xl font-bold">{name}</CardTitle>
          <CardDescription className="flex items-center text-sm text-muted-foreground">
            <Building2 className="mr-1 h-4 w-4" />
            {institute}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mt-2 space-y-2">
            <div className="flex flex-wrap gap-2">
              {departments.split(",").map((dept, index) => (
                <Badge key={index} variant="secondary">
                  {dept.trim()}
                </Badge>
              ))}
            </div>
            <p className="flex items-center text-sm">
              <BookOpen className="mr-1 h-4 w-4" />
              {courses}
            </p>
            <div className="flex items-center">
              <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">{averageRating.toFixed(1)}</span>
              <span className="ml-1 text-sm text-muted-foreground">/ 5</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default InfoCard;
