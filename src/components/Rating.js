"use client";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { Star } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Rating = () => {
  const { id } = useParams();
  const [rating, setRating] = useState(0);
  const [numberOfRates, setNumberOfRates] = useState(0);

  useEffect(() => {
    const fetchRating = async () => {
      const docRef = doc(db, "profiles", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setRating(docSnap.data().rating);
        setNumberOfRates(docSnap.data().raters?.length || 0);
      }
    };
    fetchRating();
  }, [id]);

  return (
    <div className="flex">
      <p className="mr-2">Average Rating: {rating}</p>
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <Star
            key={starValue}
            className={
              starValue <= rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-400"
            }
          />
        );
      })}
      <p className="ml-1 text-gray-400">({numberOfRates} ratings)</p>
    </div>
  );
};

export default Rating;
