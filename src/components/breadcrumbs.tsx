import { ChevronRight, Home } from "lucide-react"
import { Button } from "~/components/ui/button"

interface BreadcrumbsProps {
  path: string[]
  onBreadcrumbClick: (index: number) => void
}

export function Breadcrumbs({ path, onBreadcrumbClick }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center space-x-2 mb-4">
      <Button variant="ghost" size="sm" onClick={() => onBreadcrumbClick(-1)}>
        <Home className="h-4 w-4" />
      </Button>
      {path.map((folder, index) => (
        <div key={index} className="flex items-center">
          <ChevronRight className="h-4 w-4 mx-1" />
          <Button variant="ghost" size="sm" onClick={() => onBreadcrumbClick(index)}>
            {folder}
          </Button>
        </div>
      ))}
    </nav>
  )
}

