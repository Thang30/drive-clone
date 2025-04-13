"use client";

import { useState, useEffect } from "react"; // Import useEffect
import { Breadcrumbs } from "~/components/breadcrumbs";
import { FileList } from "~/components/file-list";
import { Header } from "~/components/header";
import { mockData, type FolderItem, type DriveItem } from "~/lib/mock-data";

export default function DrivePage() {
  const [currentPathIds, setCurrentPathIds] = useState<string[]>([]);
  const [currentFolder, setCurrentFolder] = useState<FolderItem>(mockData);

  useEffect(() => {
    const newCurrentFolder = getCurrentFolder(currentPathIds);
    setCurrentFolder(newCurrentFolder);
  }, [currentPathIds]);

  const getCurrentFolder = (pathIds: string[]): FolderItem => {
    let current: FolderItem = { ...mockData };
    for (const folderId of pathIds) {
      const found = current.contents.find(
        (item): item is FolderItem =>
          item.id === folderId && item.type === "folder",
      );
      if (found) {
        current = found;
      } else {
        // Handle case where a folder in the path no longer exists
        console.warn(
          `Folder with ID "${folderId}" not found in the current structure.`,
        );
        return current; // Or potentially reset the path
      }
    }
    return current;
  };

  const handleFolderClick = (folderId: string) => {
    setCurrentPathIds([...currentPathIds, folderId]);
  };

  const handleBreadcrumbClick = (index: number) => {
    setCurrentPathIds(currentPathIds.slice(0, index));
  };

  // We no longer need to call getCurrentFolder here directly as useEffect will handle it

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Breadcrumbs
          path={currentPathIds
            .map((id) => {
              // Find the name based on the ID for display in breadcrumbs
              const folder = findItemById(mockData, id);
              return folder ? folder.name : "";
            })
            .filter((name) => name !== "")}
          onBreadcrumbClick={handleBreadcrumbClick}
        />
        <FileList
          items={currentFolder.contents}
          onFolderClick={handleFolderClick}
        />
      </main>
    </div>
  );
}

// Helper function to find an item (folder or file) by its ID recursively
function findItemById(root: FolderItem, id: string): DriveItem | undefined {
  if (root.id === id) {
    return root;
  }
  for (const item of root.contents) {
    if (item.id === id) {
      return item;
    }
    if (item.type === "folder") {
      const found = findItemById(item, id);
      if (found) {
        return found;
      }
    }
  }
  return undefined;
}
