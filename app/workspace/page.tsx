import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuRadioItem, DropdownMenuRadioGroup, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { CardContent, Card } from "@/components/ui/card"

import { EyeIcon, LockIcon, ChevronDownIcon, HeartIcon } from "@/components/icons"

export default function WorkspacePage() {
  return (
    <main className="container mx-auto py-2 px-4 md:px-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Button size="sm" variant="outline">
            <EyeIcon className="mr-2 h-4 w-4" />
            Public
          </Button>
          <Button size="sm" variant="outline">
            <LockIcon className="mr-2 h-4 w-4" />
            Private
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-500 dark:text-gray-400">Sort by:</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" variant="outline">
                <span>Newest</span>
                <ChevronDownIcon className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuRadioGroup value="newest">
                <DropdownMenuRadioItem value="newest">
                  Newest
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="oldest">
                  Oldest
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="popular">
                  Most Popular
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Card className="relative group overflow-hidden">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View room</span>
          </Link>
          <CardContent className="p-6 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-xl font-semibold">Cozy Cabin Retreat</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Escape to our peaceful mountain cabin, perfect for relaxation
                and adventure.
              </p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <Badge>Public</Badge>
              <Button
                className="group-hover:opacity-100 opacity-0 transition-opacity"
                size="icon"
                variant="ghost"
              >
                <HeartIcon className="w-5 h-5" />
                <span className="sr-only">Save room</span>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="relative group overflow-hidden">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View room</span>
          </Link>
          <CardContent className="p-6 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-xl font-semibold">Seaside Oasis</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Unwind by the ocean in our luxurious beachfront retreat.
              </p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <Badge>Public</Badge>
              <Button
                className="group-hover:opacity-100 opacity-0 transition-opacity"
                size="icon"
                variant="ghost"
              >
                <HeartIcon className="w-5 h-5" />
                <span className="sr-only">Save room</span>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="relative group overflow-hidden">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View room</span>
          </Link>
          <CardContent className="p-6 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-xl font-semibold">Exclusive Penthouse</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Experience luxury living in our private penthouse suite.
              </p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <Badge>Private</Badge>
              <Button
                className="group-hover:opacity-100 opacity-0 transition-opacity"
                size="icon"
                variant="ghost"
              >
                <HeartIcon className="w-5 h-5" />
                <span className="sr-only">Save room</span>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="relative group overflow-hidden">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View room</span>
          </Link>
          <CardContent className="p-6 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-xl font-semibold">Treehouse Hideaway</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Escape to a peaceful treehouse nestled in the forest.
              </p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <Badge>Private</Badge>
              <Button
                className="group-hover:opacity-100 opacity-0 transition-opacity"
                size="icon"
                variant="ghost"
              >
                <HeartIcon className="w-5 h-5" />
                <span className="sr-only">Save room</span>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="relative group overflow-hidden">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View room</span>
          </Link>
          <CardContent className="p-6 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-xl font-semibold">Urban Loft</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Experience city living in our modern and stylish loft.
              </p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <Badge>Public</Badge>
              <Button
                className="group-hover:opacity-100 opacity-0 transition-opacity"
                size="icon"
                variant="ghost"
              >
                <HeartIcon className="w-5 h-5" />
                <span className="sr-only">Save room</span>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="relative group overflow-hidden">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View room</span>
          </Link>
          <CardContent className="p-6 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-xl font-semibold">Rustic Farmhouse</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Unwind in the countryside at our charming farmhouse retreat.
              </p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <Badge>Public</Badge>
              <Button
                className="group-hover:opacity-100 opacity-0 transition-opacity"
                size="icon"
                variant="ghost"
              >
                <HeartIcon className="w-5 h-5" />
                <span className="sr-only">Save room</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
