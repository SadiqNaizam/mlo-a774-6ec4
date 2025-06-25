import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Home, Search, Library, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

const LeftSidebar: React.FC = () => {
  console.log('LeftSidebar loaded');

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-4 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? 'text-sidebar-accent-foreground bg-sidebar-accent'
        : 'text-muted-foreground hover:text-sidebar-foreground'
    }`;
  
  // Placeholder data for playlists
  const playlists = [
    'Liked Songs', 'Pallet Town Radio', 'Victory Road Mix', 'Celadon Game Corner', 'Team Rocket\'s Hideout',
    'Elite Four Battle', 'Lofi Lavender Town', 'Surfing with Lapras', 'Safari Zone Beats', 'My Top Kanto',
    'Cycling Road', 'Cerulean Gym'
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 bg-sidebar text-sidebar-foreground p-2 space-y-2">
      <div className="bg-card rounded-lg p-2 space-y-1">
        <NavLink to="/" className={navLinkClasses}>
          <Home className="h-5 w-5" />
          Home
        </NavLink>
        <NavLink to="/search" className={navLinkClasses}>
          <Search className="h-5 w-5" />
          Search
        </NavLink>
      </div>
      <div className="bg-card rounded-lg p-2 flex-1 flex flex-col">
        <div className="flex items-center justify-between px-4 py-2">
           <Link to="/library" className="flex items-center gap-4 text-muted-foreground hover:text-sidebar-foreground transition-colors">
            <Library className="h-5 w-5" />
            <span className="text-sm font-medium">Your Library</span>
          </Link>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-sidebar-foreground h-8 w-8">
            <Plus className="h-4 w-4" />
            <span className="sr-only">Create Playlist</span>
          </Button>
        </div>
        <Separator className="bg-border my-2" />
        <ScrollArea className="flex-1">
          <div className="px-2 py-2 space-y-1">
            {playlists.map((playlist, index) => (
              <Link
                key={index}
                to={`/playlist/${playlist.toLowerCase().replace(/\s+/g, '-')}`}\n                className="block text-muted-foreground hover:text-sidebar-foreground text-sm px-2 py-1.5 rounded"\n              >
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