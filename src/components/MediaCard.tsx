import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import PlayButtonIcon from './PlayButtonIcon';

interface MediaCardProps {
  id: string;
  imageUrl: string;
  title: string;
  subtitle: string;
}

const MediaCard = ({ id, imageUrl, title, subtitle }: MediaCardProps) => {
  return (
    <Card className="group relative w-full overflow-hidden border-none shadow-none bg-transparent hover:bg-muted/50 transition-colors p-4 rounded-lg">
      <CardContent className="p-0 flex flex-col gap-4">
        <div className="relative">
          <AspectRatio ratio={1 / 1} className="bg-muted rounded-md">
            <img src={imageUrl} alt={title} className="rounded-md object-cover w-full h-full" />
          </AspectRatio>
          <div className="absolute bottom-2 right-2">
            <PlayButtonIcon />
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold truncate">{title}</h3>
          <p className="text-sm text-muted-foreground truncate">{subtitle}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MediaCard;