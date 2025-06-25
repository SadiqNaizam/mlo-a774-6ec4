import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Home, Search, Library, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

const LeftSidebar: React.FC = () => {
  console.log('LeftSidebar loaded');

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    cn(
      "flex items-center gap-4 px-4 py-2 rounded-md text-sm font-medium transition-colors",
      isActive
        ? 'text-sidebar-primary-foreground bg-sidebar-accent'
        : 'text-sidebar-foreground/80 hover:text-sidebar-foreground'
    );
  
  // Placeholder data for playlists
  const playlists = [
    'Favorite Pokémon', 'Celadon Game Corner', 'Ilex Forest Lo-fi', 'Elite Four Anthems', 'Team Rocket Radio',
    'Mt. Moon Hiking', 'Surfing with Lapras', 'Galar Region Hits', 'My Top 151',
    'Cycling Road', 'Champion Battle Mix'
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 bg-sidebar text-sidebar-foreground p-2 space-y-2">\n      <div className="bg-sidebar-accent/50 rounded-lg p-2 space-y-1">\n        <NavLink to="/" className={navLinkClasses}>\n          <Home className="h-5 w-5" />
          Home
        </NavLink>
        <NavLink to="/search" className={navLinkClasses}>\n          <Search className="h-5 w-5" />
          Search
        </NavLink>
      </div>
      <div className="bg-sidebar-accent/50 rounded-lg p-2 flex-1 flex flex-col">\n        <div className="flex items-center justify-between px-4 py-2">\n           <Link to="/library" className="flex items-center gap-4 text-sidebar-foreground/80 hover:text-sidebar-foreground transition-colors">\n            <Library className="h-5 w-5" />
            <span className="text-sm font-medium">Your Pokédex</span>
          </Link>
          <Button variant="ghost" size="icon" className="text-sidebar-foreground/80 hover:text-sidebar-foreground h-8 w-8">\n            <Plus className="h-4 w-4" />
            <span className="sr-only">Create Playlist</span>
          </Button>
        </div>
        <Separator className="bg-sidebar-border my-2" />
        <ScrollArea className="flex-1">\n          <div className="px-2 py-2 space-y-1">\n            {playlists.map((playlist, index) => (
              <Link
                key={index}
                to={`/playlist/${playlist.toLowerCase().replace(/\\s+/g, '-')}`}\n                className="block text-sidebar-foreground/70 hover:text-sidebar-foreground text-sm px-2 py-1.5 rounded"\n              >
                {playlist}
              </Link>
            ))}
          </div>
        </ScrollArea>
      </div>
    </aside>
  );
};

export default LeftSidebar;