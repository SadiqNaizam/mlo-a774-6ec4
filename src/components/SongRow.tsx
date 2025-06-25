import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Plus, Heart, ListMusic } from 'lucide-react';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { cn } from "@/lib/utils";

interface SongRowProps {
  track: {
    id: string;
    number: number;
    title: string;
    artist: string;
    artistId: string;
    album: string;
    albumId: string;
    duration: string;
    imageUrl: string;
  };
  isPlaying?: boolean;
}

const SongRow: React.FC<SongRowProps> = ({ track, isPlaying = false }) => {
  console.log('SongRow loaded for:', track.title);

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div
          className={cn(
            "group grid grid-cols-[32px_minmax(0,4fr)_minmax(0,2fr)_minmax(0,2fr)_auto] items-center gap-4 px-4 py-2 rounded-md transition-colors hover:bg-muted/50",
            { "bg-muted/50": isPlaying }
          )}
          aria-label={`Play ${track.title} by ${track.artist}`}
        >\n          {/* Column 1: Track Number / Play Button */}
          <div className="flex items-center justify-center text-muted-foreground">
            <span className={cn("group-hover:hidden", { "text-primary": isPlaying })}>\n              {track.number}
            </span>
            <button className="hidden group-hover:block" aria-label={`Play ${track.title}`}>\n              <Play className="h-5 w-5 fill-foreground text-foreground" />
            </button>
          </div>

          {/* Column 2: Title and Artist */}
          <div className="flex items-center gap-3 overflow-hidden">
            <img
              src={track.imageUrl || 'https://via.placeholder.com/40'}\n              alt={track.album}\n              className="h-10 w-10 rounded-sm"\n              width={40}\n              height={40}\n            />
            <div className="flex-1 overflow-hidden">
              <p className={cn("truncate font-medium", { "text-primary": isPlaying })}>\n                {track.title}
              </p>
              <Link
                to={`/artist?id=${track.artistId}`} // Using query param as no /artist/:id route exists
                className="truncate text-sm text-muted-foreground hover:underline"
                onClick={(e) => e.stopPropagation()}\n              >
                {track.artist}
              </Link>
            </div>
          </div>

          {/* Column 3: Album */}
          <div className="overflow-hidden">
            <Link
              to={`/playlist?id=${track.albumId}`} // Assuming albums are treated like playlists
              className="truncate text-sm text-muted-foreground hover:underline"
              onClick={(e) => e.stopPropagation()}\n            >
              {track.album}
            </Link>
          </div>
          
          {/* Column 4: Placeholder - for future use like Date Added */}
          <div className="hidden md:block text-sm text-muted-foreground">
            {/* e.g., "2 weeks ago" */}
          </div>

          {/* Column 5: Duration */}
          <div className="text-sm text-muted-foreground">
            {track.duration}
          </div>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuItem>
          <Plus className="mr-2 h-4 w-4" />
          Add to queue
        </ContextMenuItem>
        <ContextMenuItem>
          <Heart className="mr-2 h-4 w-4" />
          Save to Liked Songs
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <ListMusic className="mr-2 h-4 w-4" />
            Add to playlist
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>Pallet Town Radio</ContextMenuItem>
            <ContextMenuItem>Victory Road Mix</ContextMenuItem>
            <ContextMenuItem>Lofi Lavender Town</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default SongRow;