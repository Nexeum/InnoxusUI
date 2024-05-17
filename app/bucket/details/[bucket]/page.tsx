"use client";

import React, { useEffect, useState } from "react";

import {
  Button,
  Link,
  Image,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

import {
  GitBranchIcon,
  LanguagesIcon,
  StarIcon,
  GitForkIcon,
  BugIcon,
  FolderIcon,
  FileIcon,
} from "@/components/icons";

import { usePathname } from "next/navigation";

import { Bucket } from "@/app/domain/model/bucket/bucket";
import { getBucket } from "@/app/domain/usecase/bucket/bucketService";

export default function DetailsPage() {
  const pathname = usePathname();

  const [data, setData] = useState<Bucket[]>([]);

  const name = pathname.split("/").pop() || "default";

  useEffect(() => {
    getBucket(pathname)
      .then(setData)
      .catch((error) => console.error("Error fetching data: ", error));
  }, [pathname]);

  console.log(data);

  return (
    <>
      <header className="flex items-center justify-between px-6">
        <div className="flex items-center space-x-4">
          <Link
            className="flex items-center space-x-2"
            color="foreground"
            href="#"
          >
            <Image
              alt="Owner Avatar"
              className="rounded-full"
              height={32}
              src="/placeholder.svg"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width={32}
            />
            <h1 className="text-lg font-semibold">shadcn/ui</h1>
          </Link>
        </div>
        <nav className="flex items-center space-x-4">
          <Link color="foreground" href="#">
            Code
          </Link>
          <Link color="foreground" href="#">
            Issues
          </Link>
          <Link color="foreground" href="#">
            Pull requests
          </Link>
          <Link color="foreground" href="#">
            Actions
          </Link>
          <Link color="foreground" href="#">
            Projects
          </Link>
          <Link color="foreground" href="#">
            Wiki
          </Link>
          <Link color="foreground" href="#">
            Security
          </Link>
          <Link color="foreground" href="#">
            Insights
          </Link>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered">
                <GitBranchIcon className="h-4 w-4" />
                Branch
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="new">Main</DropdownItem>
              <DropdownItem key="old">Develop</DropdownItem>
              <DropdownItem key="most">feature/new-component</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </nav>
      </header>
      <main className="px-6 py-8">
        <div className="grid grid-cols-[1fr_auto] items-start gap-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">
                Beautifully designed components
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                A collection of accessible, customizable, and unstyled UI
                components for your React applications.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <LanguagesIcon className="h-4 w-4" />
                <span>TypeScript</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <StarIcon className="h-4 w-4" />
                <span>20k</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <GitForkIcon className="h-4 w-4" />
                <span>2.5k</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <BugIcon className="h-4 w-4" />
                <span>150</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button className="px-4 py-2" variant="bordered">
              <StarIcon className="mr-2 h-4 w-4" />
              Star
            </Button>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8">
          <h3 className="text-lg font-semibold">Files</h3>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="flex items-center space-x-2 rounded-md bg-gray-100 px-4 py-2 text-sm dark:bg-gray-800">
              <FolderIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              <span>components</span>
            </div>
            <div className="flex items-center space-x-2 rounded-md bg-gray-100 px-4 py-2 text-sm dark:bg-gray-800">
              <FileIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              <span>README.md</span>
            </div>
            <div className="flex items-center space-x-2 rounded-md bg-gray-100 px-4 py-2 text-sm dark:bg-gray-800">
              <FileIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              <span>package.json</span>
            </div>
            <div className="flex items-center space-x-2 rounded-md bg-gray-100 px-4 py-2 text-sm dark:bg-gray-800">
              <FileIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              <span>tsconfig.json</span>
            </div>
            <div className="flex items-center space-x-2 rounded-md bg-gray-100 px-4 py-2 text-sm dark:bg-gray-800">
              <FolderIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              <span>styles</span>
            </div>
            <div className="flex items-center space-x-2 rounded-md bg-gray-100 px-4 py-2 text-sm dark:bg-gray-800">
              <FileIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              <span>LICENSE</span>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8">
          <h3 className="text-lg font-semibold">Recent Commits</h3>
          <div className="mt-4 space-y-4">
            <div className="flex items-start space-x-4">
              <Image
                alt="Commit Author"
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
                      committed 2 days ago
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    2023-04-25
                  </div>
                </div>
                <p className="text-sm">
                  Improve accessibility and add new components
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Image
                alt="Commit Author"
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
                      committed 5 days ago
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    2023-04-22
                  </div>
                </div>
                <p className="text-sm">Fix bugs and update documentation</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
