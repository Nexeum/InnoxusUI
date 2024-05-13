"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { LanguagesIcon, PlusIcon } from "@/components/icons";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Pagination,
  useDisclosure,
  Chip,
  Card,
  CardBody,
} from "@nextui-org/react";
import { Bucket } from "./model/bucket";
import { getBuckets, createBucket } from "./service/bucketService";

export default function BucketPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [nameBucket, setNameBucket] = useState("");
  const [search, setSearch] = useState("");
  const [data, setData] = useState<Bucket[]>([]);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      toast.promise(
        createBucket(nameBucket),
        {
          loading: "Creating...",
          success: (res) => {
            if (res.ok) {
              getBuckets()
                .then(setData)
                .catch((error) =>
                  console.error("Error fetching data: ", error)
                );
              return "Bucket created successful";
            } else {
              return "Bucket created failed";
            }
          },
          error: "Bucket created failed",
        },
        {
          success: {
            duration: 4000,
          },
          error: {
            duration: 4000,
          },
        }
      );
    },
    [nameBucket]
  );

  useEffect(() => {
    getBuckets()
      .then(setData)
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const filteredData = useMemo(
    () =>
      data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      ),
    [data, search]
  );

  return (
    <>
      <section className="w-full py-3 md:py-6 lg:py-8 xl:py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Discover Trending Buckets
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Explore the latest and most popular open-source projects on
                buckets. Find the tools and libraries you need to power your
                next big idea.
              </p>
            </div>
            <div className="w-full max-w-md">
              <form className="flex space-x-2">
                <Input
                  className="flex-1"
                  placeholder="Search for buckets..."
                  type="search"
                  variant="bordered"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <Button variant="bordered" type="submit">
                  Search
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto py-2 px-4 md:px-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Button variant="bordered" onPress={onOpen}>
              <PlusIcon className="mr-2 h-4 w-4" />
              Create Bucket
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500 dark:text-gray-400">Sort by:</span>
            <Dropdown>
              <DropdownTrigger>
                <Button variant="bordered">Newest</Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="new">Newest</DropdownItem>
                <DropdownItem key="old">Oldest</DropdownItem>
                <DropdownItem key="most">Most popular</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-6">
          {filteredData.map((bucket) => (
            <Card key={bucket.name}>
              <CardBody className="py-6 grid grid-cols-[80px_1fr] gap-4 overflow-auto">
                <Image
                  alt="Repository thumbnail"
                  className="aspect-square rounded-md object-cover"
                  height="80"
                  src="/placeholder.svg"
                  width="80"
                />
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Link href={`/intern/${bucket.name}`}>
                      <h3 className="text-lg font-medium">{bucket.name}</h3>
                    </Link>
                    <Chip className="px-2 py-1 text-xs">Trending</Chip>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    {bucket.description ? bucket.description : "No description"}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <LanguagesIcon className="mr-1 h-4 w-4" />
                      {bucket.language ? bucket.language : "Unknown"}
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
        <Toaster />
      </section>
      <div className="mt-6 flex justify-center items-center">
        <Pagination showControls total={5} initialPage={1} />
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Create Bucket
              </ModalHeader>
              <form onSubmit={handleSubmit}>
                <ModalBody>
                  <Input
                    id="name"
                    required
                    autoFocus
                    label="Name bucket"
                    placeholder="Enter the name of your bucket"
                    variant="bordered"
                    value={nameBucket}
                    onChange={(e) => setNameBucket(e.target.value)}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" type="submit" onPress={onClose}>
                    Create
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
