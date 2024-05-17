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
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Select,
  SelectItem,
  Textarea,
  Chip,
  Card,
  CardBody,
  Link,
} from "@nextui-org/react";

import { EyeIcon, LockIcon, PlusIcon } from "@/components/icons";

import toast, { Toaster } from "react-hot-toast";

import {
  getWorkspaces,
  createWorkspace,
} from "@/app/domain/usecase/workspace/workspaceService";
import { Workspace } from "@/app/domain/model/workspace/workspace";

export default function WorkspacePage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [workspace, setWorkspace] = useState("");
  const [description, setDescription] = useState("");
  const [workspaceType, setWorkspaceType] = useState("public");
  const [password, setPassword] = useState("");
  const [workspaces, setWorkspaces] = useState<Workspace[]>([]);
  const [selectedWorkspace, setSelectedWorkspace] = useState<Workspace>();
  const [enteredPassword, setEnteredPassword] = useState("");

  useEffect(() => {
    getWorkspaces().then((data) => setWorkspaces(data));
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    toast.promise(
      createWorkspace(workspace, description, password),
      {
        loading: "Creating...",
        success: (res) => {
          if (res.ok) {
            return "Workspace created successful";
          } else {
            throw new Error("Workspace created failed");
          }
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

  const handleJoin = (workspace: any) => {
    console.log("handleJoin called");
    setSelectedWorkspace(workspace);
    console.log(workspace);
    if (workspace.password) {
      onOpen();
    } else {
      window.location.href = "/workspace/intern";
    }
  };

  const handleJoinSubmit = (event: any) => {
    event.preventDefault();
    if (selectedWorkspace && selectedWorkspace.password === enteredPassword) {
      window.location.href = "/workspace/intern";
    } else {
      toast.error("Incorrect password");
    }
  };

  return (
    <main className="container mx-auto px-4 md:px-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Button variant="bordered" onPress={onOpen}>
            <PlusIcon className="mr-2 h-4 w-4" />
            Create Workspace
          </Button>
          <Button variant="bordered">
            <EyeIcon className="mr-2 h-4 w-4" />
            Public
          </Button>
          <Button variant="bordered">
            <LockIcon className="mr-2 h-4 w-4" />
            Private
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {workspaces.map((workspace) => (
          <Card className="relative group overflow-hidden" key={workspace.id}>
            <CardBody className="p-6 flex flex-col justify-between h-full">
              <div>
                <Link color="foreground" href={`workspace/details/${workspace.name}`}>
                  <h3 className="text-xl font-semibold">{workspace.name}</h3>
                </Link>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  {workspace.description}
                </p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <Chip>{workspace.password ? "Private" : "Public"}</Chip>
                <Button variant="bordered" onPress={onOpen}>
                  Join
                </Button>
              </div>
            </CardBody>
          </Card>
        ))}
        <Toaster />
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
                    label="Name workspace"
                    placeholder="Enter the name of your workspace"
                    variant="bordered"
                    value={workspace}
                    onChange={(e) => setWorkspace(e.target.value)}
                  />
                  <Textarea
                    id="description"
                    required
                    autoFocus
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
      <Modal>
        <ModalContent>
          {(onClose) => (
            <>
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
                  <Button color="danger" variant="light">
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
    </main>
  );
}
