import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  role: string;
  image: string;
  review: string;
};

export default function ClientReviewCard({ name, role, image, review }: Props) {
  return (
    <div className="m-2">
      <Image
        src={image}
        width={60}
        height={60}
        alt="Image Not Found"
        className="rounded-full"
      />
      <p className="mt-6 text-base text-gray-200 font-medium">&quot;{review}&quot;</p>
      <h1 className="mt-6 text-xl font-bold text-cyan-200">{name}</h1>
      <p className="mt-1 text-white">{role}</p>
    </div>
  );
}
