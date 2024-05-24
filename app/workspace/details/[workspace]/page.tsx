"use client";

import {
  ServerIcon,
  TerminalIcon,
  PlayIcon,
  PauseIcon,
  TrashIcon,
  CpuIcon,
  MemoryStickIcon,
  ImageIcon,
  DockIcon,
  MonitorStopIcon,
  SearchIcon,
  UserIcon,
  ClockIcon,
} from "@/components/icons";

import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Listbox,
  ListboxItem,
  Input,
  ListboxSection,
} from "@nextui-org/react";

export default function DetailsPage() {
  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="ml-4">
                <h2 className="font-bold">Container Information</h2>
              </CardHeader>
              <CardBody className="grid gap-4 ml-4">
                <div className="flex items-center gap-2">
                  <ServerIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      IP Address
                    </p>
                    <p className="font-medium">192.168.1.100</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <CpuIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      CPU Usage
                    </p>
                    <p className="font-medium">75%</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MemoryStickIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      RAM Usage
                    </p>
                    <p className="font-medium">4GB / 8GB</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <ImageIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Image
                    </p>
                    <p className="font-medium">nginx:latest</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <DockIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Port
                    </p>
                    <p className="font-medium">80</p>
                  </div>
                </div>
              </CardBody>
            </Card>
            <div className="grid gap-4">
              <Card>
                <CardBody className="grid gap-4">
                  <Input
                    startContent={
                      <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    classNames={{
                      input: "text-sm",
                    }}
                    type="search"
                    placeholder="Enter a command..."
                  />
                  <Listbox>
                    <ListboxSection title="Suggested Commands">
                      <ListboxItem key={"example"}>
                        <div className="flex items-center">
                          <TerminalIcon className="mr-2 h-4 w-4" />
                          <span>docker ps</span>
                        </div>
                      </ListboxItem>
                      <ListboxItem key={"example"}>
                        <div className="flex items-center">
                          <TerminalIcon className="mr-2 h-4 w-4" />
                          <span>docker logs container-name</span>
                        </div>
                      </ListboxItem>
                      <ListboxItem key={"example"}>
                        <div className="flex items-center">
                          <TerminalIcon className="mr-2 h-4 w-4" />
                          <span>docker exec -it container-name bash</span>
                        </div>
                      </ListboxItem>
                    </ListboxSection>
                  </Listbox>
                  <Divider />
                  <Listbox>
                    <ListboxSection title="Container Actions">
                      <ListboxItem key={"example"}>
                        <div className="flex items-center">
                          <PlayIcon className="mr-2 h-4 w-4" />
                          <span>Start Container</span>
                        </div>
                      </ListboxItem>
                      <ListboxItem key={"example"}>
                        <div className="flex items-center">
                          <PauseIcon className="mr-2 h-4 w-4" />
                          <span>Pause Container</span>
                        </div>
                      </ListboxItem>
                      <ListboxItem key={"example"}>
                        <div className="flex items-center">
                          <MonitorStopIcon className="mr-2 h-4 w-4" />
                          <span>Stop Container</span>
                        </div>
                      </ListboxItem>
                      <ListboxItem key={"example"}>
                        <div className="flex items-center">
                          <TrashIcon className="mr-2 h-4 w-4" />
                          <span>Remove Container</span>
                        </div>
                      </ListboxItem>
                    </ListboxSection>
                  </Listbox>
                </CardBody>
              </Card>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-6">
            <Card>
              <CardBody>
                <div className="flex flex-col">
                  <main className="flex-1 overflow-auto p-4 md:p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <UserIcon className="h-4 w-4 text-gray-400" />
                          <span>user@host</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ClockIcon className="h-4 w-4 text-gray-400" />
                          <span>
                            {new Date().toLocaleDateString(undefined, {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <TerminalIcon className="h-4 w-4" />
                          <span>{`PS C:/Users/user/projects/my-app> dotnet run`}</span>
                        </div>
                      </div>
                    </div>
                  </main>
                  <div className="border-t border-gray-800 p-4 md:p-6">
                    <div className="flex items-center gap-2">
                      <TerminalIcon className="h-4 w-4 text-gray-400" />
                      <Input
                        className="flex-1 bg-transparent focus:outline-none"
                        placeholder="Enter command..."
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
