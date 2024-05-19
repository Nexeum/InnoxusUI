"use client";

import React, { useEffect, useState } from "react";

import { Table, TableColumn, TableHeader, TableBody, TableRow, TableCell} from "@nextui-org/react";

import { FolderIcon, FileIcon } from "@/components/icons";

import { usePathname } from "next/navigation";

import { Bucket } from "@/app/domain/model/bucket/bucket";
import { getBucket } from "@/app/domain/usecase/bucket/bucketService";
import { Header } from "@/components/header";
import { Content } from "@/components/content";

export default function DetailsPage() {
  const pathname = usePathname();

  const [data, setData] = useState<Bucket[]>([]);

  const name = pathname.split("/").pop() || "default";

  useEffect(() => {
    getBucket(name)
      .then(setData)
      .catch((error) => console.error("Error fetching data: ", error));
  }, [name]);

  console.log(data);

  return (
    <>
      <Header />
      <main className="px-6 py-6">
        <Content />
        <div className="mt-4 border-t pt-4">
          <h3 className="text-lg font-semibold">Files</h3>
          <div className="mt-4 grid grid-cols-1 gap-4">
            <Table>
              <TableHeader>
                  <TableColumn>Name</TableColumn>
                  <TableColumn>Type</TableColumn>
                  <TableColumn>Size</TableColumn>
                  <TableColumn>Last Modified</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <FolderIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                      <span>components</span>
                    </div>
                  </TableCell>
                  <TableCell>Folder</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>2023-04-25</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <FileIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                      <span>README.md</span>
                    </div>
                  </TableCell>
                  <TableCell>File</TableCell>
                  <TableCell>12.5 KB</TableCell>
                  <TableCell>2023-04-22</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <FileIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                      <span>package.json</span>
                    </div>
                  </TableCell>
                  <TableCell>File</TableCell>
                  <TableCell>2.3 KB</TableCell>
                  <TableCell>2023-04-25</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <FileIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                      <span>tsconfig.json</span>
                    </div>
                  </TableCell>
                  <TableCell>File</TableCell>
                  <TableCell>1.8 KB</TableCell>
                  <TableCell>2023-04-22</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <FolderIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                      <span>styles</span>
                    </div>
                  </TableCell>
                  <TableCell>Folder</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>2023-04-25</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <FileIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                      <span>LICENSE</span>
                    </div>
                  </TableCell>
                  <TableCell>File</TableCell>
                  <TableCell>1.2 KB</TableCell>
                  <TableCell>2023-04-22</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
    </>
  );
}
