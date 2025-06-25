import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PlayButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isPlaying: boolean;
  size?: 'default' | 'large';
}

const PlayButtonIcon: React.FC<PlayButtonIconProps> = ({ 
  isPlaying, 
  onClick, 
  className, 
  size = 'default', 
  ...props 
}) => {
  console.log('PlayButtonIcon loaded');

  const sizeClasses = size === 'large' ? 'w-14 h-14' : 'w-10 h-10';
  const iconSize = size === 'large' ? 32 : 20;

  return (
    <Button
      variant="default"
      size="icon"
      onClick={onClick}
      className={cn(
        'rounded-full shadow-lg transition-transform duration-200 ease-in-out hover:scale-105 active:scale-100',
        'bg-blue-500 text-white hover:bg-blue-600',
        'focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        sizeClasses,
        className
      )}
      {...props}
    >
      <span className="sr-only">{isPlaying ? 'Pause' : 'Play'}</span>
      {isPlaying ? (
        <Pause size={iconSize} fill="currentColor" />
      ) : (
        <Play size={iconSize} fill="currentColor" className="ml-0.5" />
      )}
    </Button>
  );
};

export default PlayButtonIcon;