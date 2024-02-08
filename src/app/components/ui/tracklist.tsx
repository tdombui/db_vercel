// TracklistComponent.tsx
import React from "react";
import { Play, X } from "lucide-react";

interface Song {
  title: string;
  artist: string;
  youtubeId: string;
}

interface Props {
  songs: Song[];
  isVisible: boolean;
  onClose: () => void; // Adding an onClose prop to handle closing the tracklist
  onSongSelect: (youtubeId: string) => void; // Function to handle song selection
}

const TracklistComponent: React.FC<Props> = ({
  songs,
  isVisible,
  onClose,
  onSongSelect,
}) => {
  if (!isVisible) return null;
  const sortedSongs = songs.sort((a, b) => a.artist.localeCompare(b.artist));

  return (
    // Overlay container
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-10 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-black p-8 rounded-lg max-h-[80vh] overflow-auto w-3/4 md:w-1/2 lg:w-1/3 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-0 right-0 text-lg p-1 m-1 rounded-full text-emerald-200 hover:bg-rose-300 hover:text-black"
        >
          <X className="w-4 h-4" />
        </button>
        <div className="grid grid-cols-2 gap-4 text-xs text-left text-emerald-200">
          <div className="font-bold">Title</div>
          <div className="font-bold">Artist</div>
          {sortedSongs.map((song, index) => (
            <React.Fragment key={index}>
              <div
                className="cursor-pointer hover:underline"
                onClick={() => onSongSelect && onSongSelect(song.youtubeId)}
              >
                <Play className="inline-flex w-2 h-2 mr-2 hover:color" />
                {song.title}
              </div>
              <div>{song.artist}</div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TracklistComponent;
