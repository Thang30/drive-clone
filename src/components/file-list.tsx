import { File, Folder } from "lucide-react";
import type { DriveItem, FileItem } from "~/lib/mock-data";

interface FileListProps {
  items: DriveItem[];
  onFolderClick: (folderId: string) => void;
}

function isFileItem(item: DriveItem): item is FileItem {
  return item.type === "file";
}

export function FileList({ items, onFolderClick }: FileListProps) {
  return (
    <div className="overflow-hidden rounded-lg bg-gray-800">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-700">
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Size</th>
            <th className="px-4 py-2 text-left">Modified</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr
              key={item.id}
              className="border-b border-gray-700 hover:bg-gray-700"
            >
              <td className="flex items-center px-4 py-2">
                {item.type === "folder" ? (
                  <button
                    onClick={() => onFolderClick(item.id)}
                    className="flex items-center text-blue-400 hover:underline"
                  >
                    <Folder className="mr-2 h-4 w-4" />
                    {item.name}
                  </button>
                ) : (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-100 hover:underline"
                  >
                    <File className="mr-2 h-4 w-4" />
                    {item.name}
                  </a>
                )}
              </td>
              <td className="px-4 py-2">
                {isFileItem(item) ? item.size : "-"}
              </td>
              <td className="px-4 py-2">
                {isFileItem(item) ? item.modified : "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
