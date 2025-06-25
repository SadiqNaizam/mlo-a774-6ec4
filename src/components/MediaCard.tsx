import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import PlayButtonIcon from '@/components/PlayButtonIcon';
import { cn } from '@/lib/utils';

interface MediaCardProps {
  /** The URL the card should navigate to on click. */
  href: string;
  /** The URL for the cover art image. */
  imageUrl: string;
  /** The main title, e.g., album name or artist name. */
  title: string;
  /** The subtitle, e.g., artist name or item type. */
  subtitle: string;
  /** The type of media, used for styling variations. */
  type: 'album' | 'artist' | 'playlist';
  /** Callback function when the play button is clicked. */
  onPlay: () => void;
}

const MediaCard: React.FC<MediaCardProps> = ({
  href,
  imageUrl,
  title,
  subtitle,
  type,
  onPlay,
}) => {
  console.log('MediaCard loaded for:', title);

  /**
   * Handles the play button click.
   * Prevents the Link navigation from firing when the button is clicked.
   */
  const handlePlayClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating to `href`
    e.stopPropagation(); // Stop the event from bubbling up
    onPlay();
  };

  const isArtist = type === 'artist';

  return (
    <Link to={href} className="block group w-full outline-none" aria-label={`View details for ${title}`}>\n      <Card className="w-full bg-card hover:bg-muted focus-visible:bg-muted transition-colors duration-300 p-4 rounded-lg cursor-pointer border-none">\n        <div className="relative mb-4">\n          <AspectRatio ratio={1}>\n            <img
              src={imageUrl || 'https://via.placeholder.com/150'}
              alt={`Cover for ${title}`}
              className={cn(
                "object-cover w-full h-full shadow-lg",
                isArtist ? "rounded-full" : "rounded-md"
              )}
            />
          </AspectRatio>
          <div
            className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-2 transition-all duration-300 ease-in-out"
            onClick={handlePlayClick}
          >\n            <PlayButtonIcon isPlaying={false} />
          </div>
        </div>
        <CardContent className="p-0 space-y-1">\n          <p className="font-bold truncate text-foreground">{title}</p>
          <p className="text-sm text-muted-foreground truncate">{subtitle}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default MediaCard;