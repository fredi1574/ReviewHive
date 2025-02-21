"use client";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { Star } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Rating = () => {
  const { id } = useParams();
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const fetchRating = async () => {
      const docRef = doc(db, "profiles", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setAverageRating(docSnap.data().averageRating);
      }
    };
    fetchRating();
  }, [id]);

  const roundedAverage = Math.round(averageRating * 2) / 2;
  const fullStars = Math.floor(roundedAverage);
  const hasHalfStar = roundedAverage - fullStars === 0.5;

  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => {
        if (index < fullStars) {
          // Render a full star.
          return (
            <Star key={index} className="fill-yellow-400 text-yellow-400" />
          );
        } else if (index === fullStars && hasHalfStar) {
          // Render a half star.
          return (
            <div key={index} className="relative inline-block">
              <Star className="text-gray-300" />
              <div className="absolute left-0 top-0 w-1/2 overflow-hidden">
                <Star className="fill-yellow-400 text-yellow-400" />
              </div>
            </div>
          );
        } else {
          // Render an empty star.
          return <Star key={index} className="text-gray-300" />;
        }
      })}
    </div>
  );
};

export default Rating;
