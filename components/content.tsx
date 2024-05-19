"use client";

import React, { useEffect, useState } from "react";
import { Bucket } from "@/app/domain/model/bucket/bucket";
import { getBucket } from "@/app/domain/usecase/bucket/bucketService";

import { LanguagesIcon, StarIcon } from "@/components/icons";

import { usePathname } from "next/navigation";

export const Content = () => {
  const pathname = usePathname();
  const [data, setData] = useState<Bucket[]>([]);

  const segments = pathname.split("/");
  const name = segments[3] || "default";

  useEffect(() => {
    getBucket(name)
      .then(setData)
      .catch((error) => console.error("Error fetching data: ", error));
  }, [name]);

  return (
    <>
      <div className="grid grid-cols-[1fr_auto] items-start gap-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">{data[0]?.name || "default"}</h2>
            <p className="text-gray-500 dark:text-gray-400">
              {data[0]?.description || "default"}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <LanguagesIcon className="h-4 w-4" />
              <span>{data[0]?.language || "Unknown"}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <StarIcon className="h-4 w-4" />
              <span>20k</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
