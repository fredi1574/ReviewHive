"use client";
import InfoCard from "@/components/InfoCard";
import { motion } from "motion/react";

export default function ProfileGrid({ profiles }) {
  if (!profiles || profiles.length === 0) {
    return <ErrorState />;
  }

  return (
    <motion.div
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.03 } },
      }}
    >
      {profiles.map((profile) => (
        <motion.div
          key={profile.id}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
          }}
        >
          <InfoCard profile={profile} />
        </motion.div>
      ))}
    </motion.div>
  );
}

function ErrorState() {
  return (
    <div className="rounded-lg bg-red-50 p-8 text-center">
      <h2 className="mb-2 text-2xl font-semibold text-red-600">
        No Profiles Found
      </h2>
      <p className="text-red-500">
        We couldn&apos;t find any profiles. Please try again.
      </p>
    </div>
  );
}
