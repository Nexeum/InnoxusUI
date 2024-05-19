"use client";

import React, { useEffect, useState } from "react";

import {
  Link,
  Button,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

import { FolderIcon, FileIcon, GitBranchIcon, PlusIcon, ReplyIcon, CheckIcon } from "@/components/icons";

import { usePathname } from "next/navigation";

import { Bucket } from "@/app/domain/model/bucket/bucket";
import { getBucket } from "@/app/domain/usecase/bucket/bucketService";
import { Header } from "@/components/header";
import { Content } from "@/components/content";
import Image from "next/image";

export default function DetailsPage() {
  const pathname = usePathname();

  const [data, setData] = useState<Bucket[]>([]);

  const name = pathname.split("/").pop() || "default";

  useEffect(() => {
    getBucket(name)
      .then(setData)
      .catch((error) => console.error("Error fetching data: ", error));
  }, [name]);

  console.log(data);

  return (
    <>
      <Header />
      <main className="px-6 py-8">
        <div className="grid grid-cols-[1fr_auto] items-start gap-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Pull Requests</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Review and manage pull requests for the shadcn/ui project.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Button className="px-4 py-2" variant="bordered">
                <PlusIcon className="mr-2 h-4 w-4" />
                New pull request
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="space-y-4">
            <div className="flex items-start space-x-4 border-b border-gray-200 dark:border-gray-800 pb-4">
              <Image
                alt="Pull Request Author"
                className="rounded-full"
                height={32}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "32/32",
                  objectFit: "cover",
                }}
                width={32}
              />
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <h4 className="text-sm font-medium">Shadcn</h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      opened 2 days ago
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <GitBranchIcon className="h-4 w-4" />
                    <span>feature/new-component</span>
                  </div>
                </div>
                <Link className="text-sm font-medium text-primary" href="#">
                  Improve accessibility and add new components
                </Link>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <ReplyIcon className="h-4 w-4" />
                  <span>12 comments</span>
                  <CheckIcon className="h-4 w-4" />
                  <span>2 checks</span>
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-4 border-b border-gray-200 dark:border-gray-800 pb-4">
              <Image
                alt="Pull Request Author"
                className="rounded-full"
                height={32}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "32/32",
                  objectFit: "cover",
                }}
                width={32}
              />
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <h4 className="text-sm font-medium">Shadcn</h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      opened 5 days ago
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <GitBranchIcon className="h-4 w-4" />
                    <span>fix/bugs</span>
                  </div>
                </div>
                <Link className="text-sm font-medium text-primary" href="#">
                  Fix bugs and update documentation
                </Link>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <ReplyIcon className="h-4 w-4" />
                  <span>6 comments</span>
                  <CheckIcon className="h-4 w-4" />
                  <span>1 check</span>
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-4 border-b border-gray-200 dark:border-gray-800 pb-4">
              <Image
                alt="Pull Request Author"
                className="rounded-full"
                height={32}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "32/32",
                  objectFit: "cover",
                }}
                width={32}
              />
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <h4 className="text-sm font-medium">Shadcn</h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      opened 1 week ago
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <GitBranchIcon className="h-4 w-4" />
                    <span>refactor/codebase</span>
                  </div>
                </div>
                <Link className="text-sm font-medium text-primary" href="#">
                  Refactor codebase and improve performance
                </Link>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <ReplyIcon className="h-4 w-4" />
                  <span>20 comments</span>
                  <CheckIcon className="h-4 w-4" />
                  <span>3 checks</span>
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-4 border-b border-gray-200 dark:border-gray-800 pb-4">
              <Image
                alt="Pull Request Author"
                className="rounded-full"
                height={32}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "32/32",
                  objectFit: "cover",
                }}
                width={32}
              />
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <h4 className="text-sm font-medium">Shadcn</h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      opened 2 weeks ago
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <GitBranchIcon className="h-4 w-4" />
                    <span>feat/new-ui-kit</span>
                  </div>
                </div>
                <Link className="text-sm font-medium text-primary" href="#">
                  Add new UI kit components
                </Link>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <ReplyIcon className="h-4 w-4" />
                  <span>30 comments</span>
                  <CheckIcon className="h-4 w-4" />
                  <span>5 checks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
