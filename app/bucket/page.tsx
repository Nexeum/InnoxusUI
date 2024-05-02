import React from "react";

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CardContent, Card } from "@/components/ui/card"

import { StarIcon, ForkIcon, LanguagesIcon } from "@/components/icons"
import Image from "next/image";

export default function BucketPage() {
  return (
    <>
      <section className="w-full py-3 md:py-6 lg:py-8 xl:py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Discover Trending GitHub Repositories
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Explore the latest and most popular open-source projects on GitHub. Find the tools and libraries you
                need to power your next big idea.
              </p>
            </div>
            <div className="w-full max-w-md">
              <form className="flex space-x-2">
                <Input className="flex-1" placeholder="Search for repositories..." type="search" />
                <Button type="submit">Search</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-6 md:py-12 lg:py-16">
        <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 xl:grid-cols-3">
          <Card>
            <CardContent className="py-6 grid grid-cols-[80px_1fr] gap-4">
              <Image
                alt="Repository thumbnail"
                className="aspect-square rounded-md object-cover"
                height="80"
                src="/placeholder.svg"
                width="80"
              />
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-medium">shadcn/ui</h3>
                  <Badge className="bg-gray-100 px-2 py-1 text-xs font-medium text-gray-900 dark:bg-gray-800 dark:text-gray-50">
                    Trending
                  </Badge>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  Beautifully designed components that you can copy and paste into your apps.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <StarIcon className="mr-1 h-4 w-4" />
                    20k
                  </div>
                  <div className="flex items-center">
                    <ForkIcon className="mr-1 h-4 w-4" />
                    1.2k
                  </div>
                  <div className="flex items-center">
                    <LanguagesIcon className="mr-1 h-4 w-4" />
                    TypeScript
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="py-6 grid grid-cols-[80px_1fr] gap-4">
              <Image
                alt="Repository thumbnail"
                className="aspect-square rounded-md object-cover"
                height="80"
                src="/placeholder.svg"
                width="80"
              />
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-medium">radix-ui/primitives</h3>
                  <Badge className="bg-gray-100 px-2 py-1 text-xs font-medium text-gray-900 dark:bg-gray-800 dark:text-gray-50">
                    Trending
                  </Badge>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  A set of unstyled, accessible components for building high-quality design systems and web apps.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <StarIcon className="mr-1 h-4 w-4" />
                    15k
                  </div>
                  <div className="flex items-center">
                    <ForkIcon className="mr-1 h-4 w-4" />
                    800
                  </div>
                  <div className="flex items-center">
                    <LanguagesIcon className="mr-1 h-4 w-4" />
                    TypeScript
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="py-6 grid grid-cols-[80px_1fr] gap-4">
              <Image
                alt="Repository thumbnail"
                className="aspect-square rounded-md object-cover"
                height="80"
                src="/placeholder.svg"
                width="80"
              />
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-medium">stitchesjs/stitches</h3>
                  <Badge className="bg-gray-100 px-2 py-1 text-xs font-medium text-gray-900 dark:bg-gray-800 dark:text-gray-50">
                    Trending
                  </Badge>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  Stitches is a CSS-in-JS library that lets you use the best bits of CSS in your JavaScript.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <StarIcon className="mr-1 h-4 w-4" />
                    12k
                  </div>
                  <div className="flex items-center">
                    <ForkIcon className="mr-1 h-4 w-4" />
                    600
                  </div>
                  <div className="flex items-center">
                    <LanguagesIcon className="mr-1 h-4 w-4" />
                    TypeScript
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="py-6 grid grid-cols-[80px_1fr] gap-4">
              <Image
                alt="Repository thumbnail"
                className="aspect-square rounded-md object-cover"
                height="80"
                src="/placeholder.svg"
                width="80"
              />
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-medium">vercel/next.js</h3>
                  <Badge className="bg-gray-100 px-2 py-1 text-xs font-medium text-gray-900 dark:bg-gray-800 dark:text-gray-50">
                    Trending
                  </Badge>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  The React Framework for Production - Build your next React application with the best developer
                  experience.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <StarIcon className="mr-1 h-4 w-4" />
                    90k
                  </div>
                  <div className="flex items-center">
                    <ForkIcon className="mr-1 h-4 w-4" />
                    10k
                  </div>
                  <div className="flex items-center">
                    <LanguagesIcon className="mr-1 h-4 w-4" />
                    JavaScript
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="py-6 grid grid-cols-[80px_1fr] gap-4">
              <Image
                alt="Repository thumbnail"
                className="aspect-square rounded-md object-cover"
                height="80"
                src="/placeholder.svg"
                width="80"
              />
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-medium">prisma/prisma</h3>
                  <Badge className="bg-gray-100 px-2 py-1 text-xs font-medium text-gray-900 dark:bg-gray-800 dark:text-gray-50">
                    Trending
                  </Badge>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  Prisma is a next-generation ORM that makes database access easy.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <StarIcon className="mr-1 h-4 w-4" />
                    25k
                  </div>
                  <div className="flex items-center">
                    <ForkIcon className="mr-1 h-4 w-4" />
                    1.5k
                  </div>
                  <div className="flex items-center">
                    <LanguagesIcon className="mr-1 h-4 w-4" />
                    TypeScript
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="py-6 grid grid-cols-[80px_1fr] gap-4">
              <Image
                alt="Repository thumbnail"
                className="aspect-square rounded-md object-cover"
                height="80"
                src="/placeholder.svg"
                width="80"
              />
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-medium">tailwind/tailwindcss</h3>
                  <Badge className="bg-gray-100 px-2 py-1 text-xs font-medium text-gray-900 dark:bg-gray-800 dark:text-gray-50">
                    Trending
                  </Badge>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  A utility-first CSS framework for rapidly building custom user interfaces.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <StarIcon className="mr-1 h-4 w-4" />
                    70k
                  </div>
                  <div className="flex items-center">
                    <ForkIcon className="mr-1 h-4 w-4" />
                    5k
                  </div>
                  <div className="flex items-center">
                    <LanguagesIcon className="mr-1 h-4 w-4" />
                    CSS
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
