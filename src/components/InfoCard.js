import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

function InfoCard({ profile }) {
  const { id } = profile;
  const { name, institute, departments, courses, rating } = profile;

  return (
    <Link href={`/${id}`}>
      <Card className="mx-auto cursor-pointer hover:bg-blue-200 active:bg-blue-300">
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{institute}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{departments}</p>
          <p>{courses}</p>
          <p>{rating}</p>
        </CardContent>
      </Card>
    </Link>
  );
}

export default InfoCard;
