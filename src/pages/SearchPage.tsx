import { Input } from "@/components/ui/input"
import { Search as SearchIcon } from "lucide-react"

const SearchPage = () => {
  return (
    <div className="space-y-8">
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input 
          placeholder="What do you want to listen to?" 
          className="pl-10 text-lg p-6 rounded-full" 
        />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Browse all</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-40 rounded-lg bg-primary/80 p-4 flex items-end justify-start">
              <h3 className="text-xl font-bold text-primary-foreground">Category</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SearchPage