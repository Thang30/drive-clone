import { File, Folder } from "lucide-react"

interface Item {
  name: string
  type: "file" | "folder"
  size?: string
  modified?: string
}

interface FileListProps {
  items: Item[]
  onFolderClick: (folderName: string) => void
}

export function FileList({ items, onFolderClick }: FileListProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
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
            <tr key={item.name} className="border-b border-gray-700 hover:bg-gray-700">
              <td className="px-4 py-2 flex items-center">
                {item.type === "folder" ? (
                  <button
                    onClick={() => onFolderClick(item.name)}
                    className="flex items-center text-blue-400 hover:underline"
                  >
                    <Folder className="h-4 w-4 mr-2" />
                    {item.name}
                  </button>
                ) : (
                  <a href="#" className="flex items-center text-gray-100 hover:underline">
                    <File className="h-4 w-4 mr-2" />
                    {item.name}
                  </a>
                )}
              </td>
              <td className="px-4 py-2">{item.size || "-"}</td>
              <td className="px-4 py-2">{item.modified || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

