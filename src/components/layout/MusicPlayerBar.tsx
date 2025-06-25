import React, { useState } from 'react';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
  Volume2,
  ListMusic,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const MusicPlayerBar: React.FC = () => {
  console.log('MusicPlayerBar loaded');
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([50]);
  const [progress, setProgress] = useState([25]);

  return (
    <footer className="fixed bottom-0 left-0 right-0 h-24 bg-neutral-900 border-t border-neutral-800 text-white p-4 flex items-center justify-between z-50">
      {/* Song Info */}
      <div className="flex items-center gap-4 w-1/4">
        <Avatar className="h-14 w-14 rounded-md">
          <AvatarImage src="https://i.scdn.co/image/ab67616d000048516d742d41a72d3f087d18de48" alt="Album Art" />
          <AvatarFallback>NN</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold text-sm truncate">Dreaming On</p>
          <p className="text-xs text-neutral-400 truncate">NEFFEX</p>
        </div>
      </div>

      {/* Playback Controls */}
      <div className="flex flex-col items-center gap-2 w-1/2">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-white">
            <Shuffle className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-white">
            <SkipBack className="h-5 w-5" />
          </Button>
          <Button
            variant="default"
            size="icon"
            className="h-10 w-10 rounded-full bg-white text-black hover:bg-neutral-200"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause className="h-5 w-5 fill-black" /> : <Play className="h-5 w-5 fill-black" />}
          </Button>
          <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-white">
            <SkipForward className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-white">
            <Repeat className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex items-center gap-2 w-full max-w-lg">
          <span className="text-xs text-neutral-400">1:05</span>
          <Slider
            defaultValue={[33]}
            value={progress}
            onValueChange={setProgress}
            max={100}
            step={1}
            className="w-full"
          />
          <span className="text-xs text-neutral-400">3:15</span>
        </div>
      </div>

      {/* Volume and Other Controls */}
      <div className="flex items-center justify-end gap-2 w-1/4">
         <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-white">
            <ListMusic className="h-5 w-5" />
          </Button>
        <Volume2 className="h-5 w-5 text-neutral-400" />
        <Slider
          defaultValue={[50]}
          value={volume}
          onValueChange={setVolume}
          max={100}
          step={1}
          className="w-24"
        />
      </div>
    </footer>
  );
};

export default MusicPlayerBar;