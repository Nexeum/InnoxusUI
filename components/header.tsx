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

import { GitBranchIcon, StarIcon } from "@/components/icons";

import { usePathname } from "next/navigation";
export const Header = () => {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const name = segments[3] || "default";
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
          <Link color="foreground" href={`/bucket/details/${name}`}>
            Code
          </Link>
          <Link color="foreground" href={`/bucket/details/${name}/pulls`}>
            Pull requests
          </Link>
          <Link color="foreground" href={`/bucket/details/${name}/pipelines`}>
            Pipelines
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
          <Button className="px-4 py-2" variant="bordered">
            <StarIcon className="mr-2 h-4 w-4" />
            Star
          </Button>
        </nav>
      </header>
    </>
  );
};
