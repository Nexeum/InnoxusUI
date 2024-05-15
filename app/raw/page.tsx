"use client";

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
  TrashIcon,
  SaveIcon,
  DeleteIcon,
  EyeIcon,
  ClockIcon
} from "@/components/icons";

export default function RawPage() {
  return (
    <>
      <header className="flex items-center justify-between px-6 py-2 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center space-x-4">
          <Link className="flex items-center space-x-2" href="#">
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
          <Link className="text-sm font-medium hover:underline" href="#">
            Code
          </Link>
          <Link className="text-sm font-medium hover:underline" href="#">
            Issues
          </Link>
          <Link className="text-sm font-medium hover:underline" href="#">
            Pull requests
          </Link>
          <Link className="text-sm font-medium hover:underline" href="#">
            Actions
          </Link>
          <Link className="text-sm font-medium hover:underline" href="#">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:underline" href="#">
            Wiki
          </Link>
          <Link className="text-sm font-medium hover:underline" href="#">
            Security
          </Link>
          <Link className="text-sm font-medium hover:underline" href="#">
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
              <h2 className="text-2xl font-bold">Editing README.md</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Make changes to the README file for the shadcn/ui project.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <LanguagesIcon className="h-4 w-4" />
                <span>Markdown</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <ClockIcon className="h-4 w-4" />
                <span>Last edited 2 days ago</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button className="px-4 py-2" variant="bordered">
              <SaveIcon className="mr-2 h-4 w-4" />
              Save
            </Button>
            <Button className="px-4 py-2" variant="bordered">
              <TrashIcon className="mr-2 h-4 w-4" />
              Delete
            </Button>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">README.md</h3>
            <div className="flex items-center space-x-4">
              <Button className="px-4 py-2" variant="bordered">
                <DeleteIcon className="mr-2 h-4 w-4" />
                Edit
              </Button>
              <Button className="px-4 py-2" variant="bordered">
                <EyeIcon className="mr-2 h-4 w-4" />
                Preview
              </Button>
            </div>
          </div>
          <div className="mt-4 rounded-md border border-gray-200 p-4 dark:border-gray-800 dark:border-gray-800">
            <div className="prose max-w-none dark:prose-invert">
              <h1>shadcn/ui</h1>
              <p>
                Beautifully designed components that you can copy and paste into
                your apps.
              </p>
              <h2>Installation</h2>
              <p>
                To install the components, run the following command in your
                terminal:
              </p>
              <pre>
                <code>npm install @shadcn/ui</code>
              </pre>
              <h2>Usage</h2>
              <p>
                To use the components, import them from the `@shadcn/ui`
                package:
              </p>
              <pre>
                <code />
              </pre>
              <p>Then, you can use the components in your JSX:</p>
              <pre>
                <code>
                  {`
                <Button>Click me</Button>
                <Input placeholder="Enter text" />
                          `}
                </code>
              </pre>
              <h2>Contributing</h2>
              <p>
                If youd like to contribute to the project, please read the
                <a href="#">contributing guidelines</a>.{"\n"}
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
