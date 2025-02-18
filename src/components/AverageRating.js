"use client";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { Star } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Rating = () => {
  const { id } = useParams();
  const [averageRating, setAverageRating] = useState(0);
  const [numberOfRates, setNumberOfRates] = useState(0);

  useEffect(() => {
    const fetchRating = async () => {
      const docRef = doc(db, "profiles", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setAverageRating(docSnap.data().averageRating);
        // setNumberOfRates(docSnap.data().raters?.length || 0);
      }
    };
    fetchRating();
  }, [id]);

  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <Star
            key={starValue}
            className={
              starValue <= averageRating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-400"
            }
          />
        );
      })}
    </div>
  );
};

export default Rating;
