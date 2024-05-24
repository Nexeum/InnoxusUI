"use client";

import {
  Button,
  Image,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
} from "@nextui-org/react";

import React, { useEffect, useState } from "react";

import { GitBranchIcon } from "@/components/icons";

import { usePathname } from "next/navigation";
import { Bucket } from "@/app/domain/model/bucket/bucket";

import { getBucket } from "@/app/domain/usecase/bucket/bucketService";

export const Header = () => {
  const pathname = usePathname();
  const [data, setData] = useState<Bucket[]>([]);
  const [selectedBranch, setSelectedBranch] = useState("Main");

  const segments = pathname.split("/");
  const name = segments[3] || "default";

  useEffect(() => {
    getBucket(name)
      .then(setData)
      .catch((error) => console.error("Error fetching data: ", error));
  }, [name]);

  return (
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
        <Link color="foreground" href={`/bucket/details/${name}`}>
          Code
        </Link>
        <Link color="foreground" href={`/bucket/details/${name}/pipelines`}>
          Pipelines
        </Link>
        <Dropdown>
          <DropdownTrigger>
            <Button variant="bordered">
              <GitBranchIcon className="h-4 w-4" />
              {selectedBranch}
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            {data[0]?.branches ? (
              data[0].branches.map((branch, index) => (
                <DropdownItem
                  key={index}
                  onClick={() => setSelectedBranch(branch)}
                >
                  {branch}
                </DropdownItem>
              ))
            ) : (
              <DropdownItem onClick={() => setSelectedBranch("Main")}>
                Main
              </DropdownItem>
            )}
          </DropdownMenu>
        </Dropdown>
      </nav>
    </header>
  );
};
