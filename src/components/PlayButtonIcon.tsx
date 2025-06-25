import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PlayButtonIconProps {
  className?: string;
}

const PlayButtonIcon = ({ className }: PlayButtonIconProps) => {
  return (
    <Button
      variant="default"
      className={cn(
        "h-12 w-12 rounded-full flex items-center justify-center bg-primary p-0 transition-opacity opacity-0 group-hover:opacity-100 hover:scale-105",
        className
      )}
    >
      <Play className="h-6 w-6 text-primary-foreground" fill="currentColor" />
    </Button>
  );
};

export default PlayButtonIcon;