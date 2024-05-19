"use client";

import React from "react";

import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Chip,
} from "@nextui-org/react";

import {
  ClockIcon,
  WorkflowIcon,
} from "@/components/icons";


import { Header } from "@/components/header";
import { Content } from "@/components/content";

export default function PipelinesPage() {

  return (
    <>
      <Header />
      <main className="px-6 py-6">
        <Content />
        <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8">
          <h3 className="text-lg font-semibold">Actions</h3>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <WorkflowIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                  <h4 className="text-sm font-medium">Build and Test</h4>
                </div>
                <Chip className="px-2 py-1 text-xs">Passing</Chip>
              </CardHeader>
              <CardBody>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Runs tests and builds the project on push and pull request.
                </p>
              </CardBody>
              <CardFooter>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <ClockIcon className="h-4 w-4" />
                  <span>Last run 2 minutes ago</span>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <WorkflowIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                  <h4 className="text-sm font-medium">Deploy to Production</h4>
                </div>
                <Chip className="px-2 py-1 text-xs">Passing</Chip>
              </CardHeader>
              <CardBody>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Deploys the project to production on merge to main branch.
                </p>
              </CardBody>
              <CardFooter>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <ClockIcon className="h-4 w-4" />
                  <span>Last run 1 hour ago</span>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <WorkflowIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                  <h4 className="text-sm font-medium">Release Drafter</h4>
                </div>
                <Chip className="px-2 py-1 text-xs">Passing</Chip>
              </CardHeader>
              <CardBody>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Drafts a new release based on merged pull requests.
                </p>
              </CardBody>
              <CardFooter>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <ClockIcon className="h-4 w-4" />
                  <span>Last run 3 days ago</span>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <WorkflowIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                  <h4 className="text-sm font-medium">Stale Issue Closer</h4>
                </div>
                <Chip className="px-2 py-1 text-xs">Passing</Chip>
              </CardHeader>
              <CardBody>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Automatically closes stale issues after 30 days of inactivity.
                </p>
              </CardBody>
              <CardFooter>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <ClockIcon className="h-4 w-4" />
                  <span>Last run 1 week ago</span>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <WorkflowIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                  <h4 className="text-sm font-medium">Labeler</h4>
                </div>
                <Chip className="px-2 py-1 text-xs">Passing</Chip>
              </CardHeader>
              <CardBody>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Automatically labels pull requests based on file changes.
                </p>
              </CardBody>
              <CardFooter>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <ClockIcon className="h-4 w-4" />
                  <span>Last run 2 days ago</span>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <WorkflowIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                  <h4 className="text-sm font-medium">Dependabot</h4>
                </div>
                <Chip className="px-2 py-1 text-xs">Passing</Chip>
              </CardHeader>
              <CardBody>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Automatically opens pull requests to update dependencies.
                </p>
              </CardBody>
              <CardFooter>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <ClockIcon className="h-4 w-4" />
                  <span>Last run 4 days ago</span>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <WorkflowIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                  <h4 className="text-sm font-medium">Lighthouse</h4>
                </div>
                <Chip className="px-2 py-1 text-xs">Passing</Chip>
              </CardHeader>
              <CardBody>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Runs Lighthouse performance audits on pull requests.
                </p>
              </CardBody>
              <CardFooter>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <ClockIcon className="h-4 w-4" />
                  <span>Last run 6 hours ago</span>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <WorkflowIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                  <h4 className="text-sm font-medium">Semantic Release</h4>
                </div>
                <Chip className="px-2 py-1 text-xs">Passing</Chip>
              </CardHeader>
              <CardBody>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Automatically generates release notes and publishes new
                  versions.
                </p>
              </CardBody>
              <CardFooter>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <ClockIcon className="h-4 w-4" />
                  <span>Last run 2 weeks ago</span>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}
