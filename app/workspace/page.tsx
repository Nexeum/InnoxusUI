"use client";

import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  useDisclosure,
  Select,
  SelectItem,
  Textarea,
  Chip,
  Card,
  CardBody,
  Pagination,
  Skeleton,
} from "@nextui-org/react";

import { EyeIcon, LockIcon, PlusIcon } from "@/components/icons";

import toast, { Toaster } from "react-hot-toast";

import {
  getWorkspaces,
  createWorkspace,
} from "@/app/domain/usecase/workspace/workspaceService";
import { Workspace } from "@/app/domain/model/workspace/workspace";

import { useRouter } from "next/navigation";

export default function WorkspacePage() {
  const createWorkspaceModal = useDisclosure();
  const openModalPassword = useDisclosure();
  const [workspace, setWorkspace] = useState("");
  const [description, setDescription] = useState("");
  const [workspaceType, setWorkspaceType] = useState("public");
  const [password, setPassword] = useState("");
  const [workspaces, setWorkspaces] = useState<Workspace[]>([]);
  const [selectedWorkspace, setSelectedWorkspace] = useState<Workspace>();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [filter, setFilter] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    getWorkspaces()
      .then((data) => {
        setWorkspaces(data);
        setTotalPages(Math.ceil(data.length / 8));
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const handleFilterChange = (type: string | null) => {
    setFilter(type);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newWorkspace: Workspace = {
      name: workspace,
      description: description,
      password: password,
    };

    toast.promise(
      createWorkspace(newWorkspace),
      {
        loading: "Creating...",
        success: () => {
          getWorkspaces()
            .then(setWorkspaces)
            .catch((error) => console.error("Error fetching data: ", error));
          return "Workspace created successful";
        },
        error: "Workspace created failed",
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
  };

  const handleJoinSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      selectedWorkspace?.password &&
      selectedWorkspace?.password === enteredPassword
    ) {
      router.push(`/workspace/details/${selectedWorkspace.name}`);
    } else {
      toast.error("Incorrect password");
    }
  };

  return (
    <main className="container mx-auto px-4 md:px-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Button variant="bordered" onPress={createWorkspaceModal.onOpen}>
            <PlusIcon className="mr-2 h-4 w-4" />
            Create Workspace
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="bordered"
            onClick={() => handleFilterChange("public")}
          >
            <EyeIcon className="mr-2 h-4 w-4" />
            Public
          </Button>
          <Button
            variant="bordered"
            onClick={() => handleFilterChange("private")}
          >
            <LockIcon className="mr-2 h-4 w-4" />
            Private
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => (
              <Card
                key={`skeleton-card-${index}`}
                className="relative group overflow-hidden"
              >
                <CardBody className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-xl font-semibold">
                      <Skeleton>
                        <div className="h-6 bg-default-300"></div>
                      </Skeleton>
                    </h3>
                    <Skeleton>
                      <div className="h-4 bg-default-300 mt-2 text-gray-500 dark:text-gray-400"></div>
                    </Skeleton>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <Skeleton>
                      <div className="h-4 w-20 bg-default-300"></div>
                    </Skeleton>
                    <Skeleton>
                      <div className="h-8 w-20 bg-default-300"></div>
                    </Skeleton>
                  </div>
                </CardBody>
              </Card>
            ))
          : workspaces
              .filter(
                (workspace) =>
                  filter === null ||
                  (workspace.password ? "private" : "public") === filter
              )
              .slice((currentPage - 1) * 6, currentPage * 6)
              .map((workspace) => (
                <Card
                  className="relative group overflow-hidden"
                  key={workspace.id}
                >
                  <CardBody className="p-6 flex flex-col justify-between h-full">
                    <div>
                      <h3 className="text-xl font-semibold">
                        {workspace.name}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 mt-2">
                        {workspace.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <Chip>{workspace.password ? "Private" : "Public"}</Chip>
                      <Button
                        variant="bordered"
                        onPress={() => {
                          if (workspace.password) {
                            setSelectedWorkspace(workspace);
                            openModalPassword.onOpen();
                          } else {
                            router.push(`/workspace/details/${workspace.name}`);
                          }
                        }}
                      >
                        Join
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              ))}
        <Toaster />
      </div>

      <Modal
        isOpen={createWorkspaceModal.isOpen}
        onOpenChange={createWorkspaceModal.onOpenChange}
      >
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
                    label="Name workspace"
                    placeholder="Enter the name of your workspace"
                    variant="bordered"
                    value={workspace}
                    onChange={(e) => setWorkspace(e.target.value)}
                  />
                  <Textarea
                    id="description"
                    required
                    label="Description workspace"
                    placeholder="Enter the description of your workspace"
                    variant="bordered"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <Select
                    id="workspaceType"
                    label="Workspace Type"
                    value={workspaceType}
                    onChange={(e) => setWorkspaceType(e.target.value)}
                  >
                    <SelectItem key="public" value="public">
                      Public
                    </SelectItem>
                    <SelectItem key="private" value="private">
                      Private
                    </SelectItem>
                  </Select>
                  {workspaceType === "private" && (
                    <Input
                      id="password"
                      type="password"
                      required
                      label="Password"
                      placeholder="Enter password for private workspace"
                      variant="bordered"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  )}
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="danger"
                    variant="light"
                    onPress={createWorkspaceModal.onClose}
                  >
                    Close
                  </Button>
                  <Button
                    color="primary"
                    type="submit"
                    onPress={createWorkspaceModal.onClose}
                  >
                    Create
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
      <Modal
        isOpen={openModalPassword.isOpen}
        onOpenChange={openModalPassword.onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Enter Password
              </ModalHeader>
              <form onSubmit={handleJoinSubmit}>
                <ModalBody>
                  <Input
                    id="password"
                    type="password"
                    required
                    label="Password"
                    placeholder="Enter password for private workspace"
                    variant="bordered"
                    value={enteredPassword}
                    onChange={(e) => setEnteredPassword(e.target.value)}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="danger"
                    variant="light"
                    onPress={openModalPassword.onClose}
                  >
                    Close
                  </Button>
                  <Button color="primary" type="submit">
                    Join
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
      <div className="mt-6 flex justify-center items-center">
        <Pagination
          isCompact
          showControls
          total={totalPages}
          initialPage={1}
          onChange={(newPage) => setCurrentPage(newPage)}
        />
      </div>
    </main>
  );
}
