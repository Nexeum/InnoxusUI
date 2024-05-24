"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import toast, { Toaster } from "react-hot-toast";
import { LanguagesIcon, PlusIcon, SearchIcon } from "@/components/icons";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Pagination,
  useDisclosure,
  Card,
  CardBody,
  Link,
  Image,
  Skeleton,
} from "@nextui-org/react";
import { Bucket } from "@/app/domain/model/bucket/bucket";
import {
  getBuckets,
  createBucket,
} from "@/app/domain/usecase/bucket/bucketService";

import { useRouter } from "next/navigation";

export default function BucketPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [nameBucket, setNameBucket] = useState("");
  const [descriptionBucket, setDescriptionBucket] = useState("");
  const [search, setSearch] = useState("");
  const [data, setData] = useState<Bucket[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [owner, setOwner] = useState("");

  const router = useRouter();

  useEffect(() => {
    getBuckets()
      .then((buckets) => {
        setData(buckets);
        setTotalPages(Math.ceil(buckets.length / 6));
        setIsLoading(false);
        const storage = localStorage.getItem("email");
        setOwner(storage ? storage : "");
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
    }, []);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      toast.promise(
        createBucket(nameBucket, descriptionBucket, owner),
        {
          loading: "Creating...",
          success: () => {
            getBuckets()
              .then(setData)
              .catch((error) => console.error("Error fetching data: ", error));

            router.push("/bucket/details/" + nameBucket);
            return "Bucket created successful";
          },
          error: (err) => err.message,
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
    [nameBucket, descriptionBucket ,owner, router]
  );

  const filteredData = useMemo(
    () =>
      data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      ),
    [data, search]
  );

  return (
    <>
      <section className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Button variant="bordered" onPress={onOpen}>
              <PlusIcon className="mr-2 h-4 w-4" />
              Create Bucket
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <form className="flex space-x-2">
              <Input
                className="flex-1"
                placeholder="Search for buckets..."
                startContent={
                  <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
                }
                type="search"
                variant="bordered"
                classNames={{
                  inputWrapper: "bg-default-100",
                  input: "text-sm",
                }}
                labelPlacement="outside"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-6">
          {isLoading
            ? Array.from({ length: 3 }).map((_, index) => (
                <Card key={index} radius="lg">
                  <CardBody className="py-6 grid grid-cols-[80px_1fr] gap-4 overflow-auto">
                    <Skeleton className="aspect-square rounded-md object-cover">
                      <div className="h-20 w-20 rounded-md bg-default-300"></div>
                    </Skeleton>
                    <div className="space-y-2">
                      <Skeleton className="w-3/5 rounded-lg">
                        <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                      </Skeleton>
                      <Skeleton className="w-4/5 rounded-lg">
                        <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                      </Skeleton>
                      <Skeleton className="w-2/5 rounded-lg">
                        <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                      </Skeleton>
                    </div>
                  </CardBody>
                </Card>
              ))
            : filteredData
                .slice((currentPage - 1) * 6, currentPage * 6)
                .map((bucket) => (
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
                          <Link
                            color="foreground"
                            href={`bucket/details/${bucket.name}`}
                          >
                            <h3 className="text-lg font-medium">
                              {bucket.name}
                            </h3>
                          </Link>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400">
                          {bucket.description
                            ? bucket.description
                            : "No description"}
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
        <Pagination
          isCompact
          showControls
          total={totalPages}
          initialPage={1}
          onChange={(newPage) => setCurrentPage(newPage)}
        />
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
                  <Input
                    id="description"
                    required
                    label="Description bucket"
                    placeholder="Enter the description of your bucket"
                    variant="bordered"
                    value={descriptionBucket}
                    onChange={(e) => setDescriptionBucket(e.target.value)}
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
