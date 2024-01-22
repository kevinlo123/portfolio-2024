"use client"
import React, { useState } from "react";
import Image from 'next/image'

export default function BlurImage({ image }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-600 xl:aspect-w-7 xl:aspect-h-8">
      <Image
        alt=""
        src={image}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        className={`
            duration-700 ease-in-out
            ${
              isLoading
                ? "scale-110 blur-2xl grayscale"
                : "scale-100 blur-0 grayscale-0"
            })`}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
}