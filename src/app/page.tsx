"use client"

import { useState } from "react"
import { Breadcrumbs } from "~/components/breadcrumbs"
import { FileList } from "~/components/file-list"
import { Header } from "~/components/header"
import { mockData, type FolderItem } from "~/lib/mock-data"

export default function DrivePage() {
  const [currentPath, setCurrentPath] = useState<string[]>([])

  const getCurrentFolder = (): FolderItem => {
    let current: FolderItem = { ...mockData }
    for (const folder of currentPath) {
      const found = current.contents.find((item): item is FolderItem => item.name === folder && item.type === "folder")
      if (found) {
        current = found
      } else {
        break
      }
    }
    return current
  }

  const handleFolderClick = (folderName: string) => {
    setCurrentPath([...currentPath, folderName])
  }

  const handleBreadcrumbClick = (index: number) => {
    setCurrentPath(currentPath.slice(0, index))
  }

  const currentFolder = getCurrentFolder()

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Breadcrumbs path={currentPath} onBreadcrumbClick={handleBreadcrumbClick} />
        <FileList items={currentFolder.contents} onFolderClick={handleFolderClick} />
      </main>
    </div>
  )
}

