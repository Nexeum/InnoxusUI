"use client";

import React from "react";

import {
  Chip,
} from "@nextui-org/react";

import {
  GitCommitVerticalIcon,
} from "@/components/icons";

import { Header } from "@/components/header";

export default function RunsPage() {
  return (
    <>
      <Header />
      <main className="grid grid-cols-[1fr_2fr] gap-8 px-6 py-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Pipeline</h2>
            <p className="text-gray-500 dark:text-gray-400">
              View the status of your pipeline and the jobs that make it up.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="bg-gray-100 rounded-md p-4 dark:bg-gray-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <GitCommitVerticalIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  <span className="font-medium">Build</span>
                </div>
                <Chip className="bg-green-400 text-green-900 dark:bg-green-600 dark:text-green-50">
                  Passed
                </Chip>
              </div>
              <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Ran tests and built the application
              </div>
            </div>
            <div className="bg-gray-100 rounded-md p-4 dark:bg-gray-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <GitCommitVerticalIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  <span className="font-medium">Deploy</span>
                </div>
                <Chip className="bg-yellow-400 text-yellow-900 dark:bg-yellow-600 dark:text-yellow-50">
                  In Progress
                </Chip>
              </div>
              <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Deploying the application to production
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Runs</h2>
            <p className="text-gray-500 dark:text-gray-400">
              View the details of the latest run of your pipeline.
            </p>
          </div>
          <div className="bg-gray-100 rounded-md p-4 dark:bg-gray-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <GitCommitVerticalIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                <span className="font-medium">7671220432</span>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                2023-04-25
              </div>
            </div>
            <div className="mt-4 grid gap-4">
              <div className="bg-white rounded-md p-4 dark:bg-gray-950">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <GitCommitVerticalIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                    <span className="font-medium">Build</span>
                  </div>
                  <Chip className="bg-green-400 text-green-900 dark:bg-green-600 dark:text-green-50">
                    Passed
                  </Chip>
                </div>
                <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Ran tests and built the application
                </div>
                <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                  <pre>
                    <code>
                      {`
                                      $ npm run build
                                      > ui@0.1.0 build
                                      > next build
                  
                                      info  - Loaded env from /path/to/project/.env
                                      info  - Checking validity of types...
                                      info  - Creating an optimized production build...
                                      info  - Compiled successfully
                                      info  - Collecting page data...
                                      info  - Generating static pages (0/8)
                                      info  - Generating static pages (8/8)
                                      info  - Finalizing page optimization...
                                    `}
                    </code>
                  </pre>
                </div>
              </div>
              <div className="bg-white rounded-md p-4 dark:bg-gray-950">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <GitCommitVerticalIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                    <span className="font-medium">Deploy</span>
                  </div>
                  <Chip className="bg-yellow-400 text-yellow-900 dark:bg-yellow-600 dark:text-yellow-50">
                    In Progress
                  </Chip>
                </div>
                <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Deploying the application to production
                </div>
                <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                  <pre>
                    <code>
                      {`
                                      $ npm run deploy
                                      > ui@0.1.0 deploy
                                      > next build && next export
                  
                                      info  - Loaded env from /path/to/project/.env
                                      info  - Checking validity of types...
                                      info  - Creating an optimized production build...
                                      info  - Compiled successfully
                                      info  - Collecting page data...
                                      info  - Generating static pages (0/8)
                                      info  - Generating static pages (8/8)
                                      info  - Finalizing page optimization...
                                      info  - Exported successfully
                                      info  - Deploying to production...
                                    `}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
