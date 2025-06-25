import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Header: React.FC = () => {
  console.log('Header loaded');
  const navigate = useNavigate();

  return (
    <header className="flex h-16 items-center justify-between px-6 bg-background/80 backdrop-blur-sm sticky top-0 z-20">\n      <div className="flex items-center gap-2">\n        <Button variant="ghost" size="icon" className="rounded-full bg-black/30" onClick={() => navigate(-1)}>\n          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Go back</span>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full bg-black/30" onClick={() => navigate(1)}>\n          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Go forward</span>
        </Button>
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full">\n              <Avatar className="h-9 w-9">\n                <AvatarImage src="https://pbs.twimg.com/profile_images/1377313061033238531/S6gnp_CM_400x400.jpg" alt="Trainer Ash" />
                <AvatarFallback>
                  <User className="h-5 w-5" />
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">\n              <div className="flex flex-col space-y-1">\n                <p className="text-sm font-medium leading-none">Trainer Ash</p>
                <p className="text-xs leading-none text-muted-foreground">\n                  ash.ketchum@pokemon.net
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;