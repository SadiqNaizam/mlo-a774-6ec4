import { NavLink } from 'react-router-dom';
import { Home, Search, Library, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

const LeftSidebar = () => {
  const playlists = [
    { id: '1', name: 'Kanto Classics' },
    { id: '2', name: 'Johto Journeys' },
    { id: '3', name: 'Hoenn Hits' },
    { id: '4', name: 'Sinnoh Soundtracks' },
    { id: '5', name: 'Unova Beats' },
    { id: '6', name: 'Kalos Rhythms' },
    { id: '7', name: 'Alola Tunes' },
    { id: '8', name: 'Galar Grooves' },
  ];

  const NavItem = ({ to, icon, children }: { to: string; icon: React.ElementType; children: React.ReactNode }) => {
    const Icon = icon;
    return (
      <NavLink to={to} className={({ isActive }) => `flex items-center gap-4 px-4 py-2 rounded-md font-semibold transition-colors ${isActive ? 'text-primary' : 'text-foreground/70 hover:text-foreground'}`}>
        <Icon className="h-6 w-6" />
        <span>{children}</span>
      </NavLink>
    );
  };

  return (
    <aside className="hidden lg:flex lg:flex-col w-72 border-r bg-card/50 p-2">
      <Card className="border-none shadow-none bg-transparent">
        <CardContent className="p-2">
          <nav className="space-y-2">
            <NavItem to="/" icon={Home}>Home</NavItem>
            <NavItem to="/search" icon={Search}>Search</NavItem>
          </nav>
        </CardContent>
      </Card>
      <Card className="flex-1 border-none shadow-none bg-transparent mt-2">
        <CardContent className="p-2 h-full flex flex-col">
          <div className="flex items-center justify-between px-4 py-2">
            <div className="flex items-center gap-4 font-semibold text-foreground/70 hover:text-foreground cursor-pointer">
              <Library className="h-6 w-6" />
              <span>Your Library</span>
            </div>
            <Button variant="ghost" size="icon" className="text-foreground/70 hover:text-foreground">
              <Plus className="h-5 w-5" />
            </Button>
          </div>
          <ScrollArea className="flex-1 mt-2">
            <div className="space-y-1 pr-4">
              {playlists.map((playlist) => (
                <NavLink key={playlist.id} to={`/playlist/${playlist.id}`} className={({ isActive }) => `block px-4 py-2 text-sm rounded-md truncate ${isActive ? 'bg-primary/10 text-primary' : 'text-foreground/70 hover:bg-muted/50 hover:text-foreground'}`}>
                  {playlist.name}
                </NavLink>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </aside>
  );
};

export default LeftSidebar;