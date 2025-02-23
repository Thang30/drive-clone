import { Upload } from "lucide-react";
import { Button } from "~/components/ui/button";

export function Header() {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <h1 className="text-2xl font-bold">Drive Clone</h1>
        <Button variant="outline" className="text-primary hover:bg-slate-400">
          <Upload className="mr-2 h-4 w-4" /> Upload
        </Button>
      </div>
    </header>
  );
}
