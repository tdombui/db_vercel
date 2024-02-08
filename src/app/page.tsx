"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import BackgroundAws from "./components/bg-aws/background-aws";
import { motion } from "framer-motion";
import { TrackList } from "../../lib/tracklist";
import TracklistComponent from "./components/ui/tracklist";
import {
  Dices,
  Play,
  Pause,
  SkipForward,
  CircleDot,
  Mail,
  Rabbit,
  ListMusic,
  ChevronDown,
} from "lucide-react";
import YouTube from "react-youtube";
import "./style/style.css";

interface Song {
  title: string;
  artist: string;
  youtubeId: string;
}

const shuffleArray = (array: Song[]): Song[] => {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

function App() {
  // Background shuffler
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const totalBackgrounds = 23;
  const changeBackground = () => {
    setBackgroundIndex((prevIndex) => (prevIndex + 1) % totalBackgrounds);
  };
  // Music player
  const [isPlaying, setPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [shuffledSongs, setShuffledSongs] = useState([]);
  const [isTracklistVisible, setIsTracklistVisible] = useState(false);
  // Shuffle songs and update state on component mount
  useEffect(() => {
    // Create a new array to avoid mutating the original songs array
    setShuffledSongs(shuffleArray([...TrackList]));
  }, []);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    audioRef.current = new Audio();
  });
  useEffect(() => {
    // Ensure you're using shuffledSongs here
    if (shuffledSongs.length > 0) {
      audioRef.current.src = `https://www.youtube.com/watch?v=${shuffledSongs[currentSongIndex].youtubeId}`;
    }
  }, [currentSongIndex, shuffledSongs]);
  const playPause = () => {
    if (!isPlaying) {
      audioRef.current.play();
      setPlaying(true);
    } else {
      audioRef.current.pause();
      setPlaying(false);
    }
  };
  const playNextSong = () => {
    const nextIndex = (currentSongIndex + 1) % shuffledSongs.length;
    setCurrentSongIndex(nextIndex);
  };
  const opts = {
    height: "0",
    width: "0",
    playerVars: {
      autoplay: 1,
    },
  };
  const videoContainerStyle = {
    bottom: "0",
    left: "0",
    padding: "12px",
    color: "white",
    fontSize: "14px",
    zIndex: "1000", // Ensure it appears above other elements
    height: isPlaying ? "auto" : "0", // Set the height to auto when playing, 0 when not playing
    overflow: "hidden",
    transition: "height 0.3s ease", // Add smooth transition
  };
  0;
  const handleVideoEnd = () => {
    playNextSong();
  };
  const sortedSongs = [...shuffledSongs].sort((a, b) =>
    a.artist.localeCompare(b.artist)
  );
  // Function to handle song selection from the tracklist
  const handleSongSelect = (youtubeId: string) => {
    const songIndex = shuffledSongs.findIndex(
      (song) => song.youtubeId === youtubeId
    );
    if (songIndex !== -1) {
      setCurrentSongIndex(songIndex);
      setPlaying(true); // Assuming setPlaying is your state setter to start playback
    }
  };
  // RESET
  const resetPage = () => {
    audioRef.current.pause();
    setPlaying(false);
    setBackgroundIndex(0);
  };

  return (
    <>
      <BackgroundAws backgroundIndex={backgroundIndex} />

      <div
        className="flex flex-col justify-center items-center min-h-screen "
        style={{ userSelect: "none" }}
      >
        <motion.div
          className="group border-transparent transition-colors hover-bg-center dombui"
          initial={{ opacity: 0, y: 100, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            type: "spring",
            duration: 1.66,
          }}
        >
          <a
            className={`mt-2 mb-1 text-3xl text-emerald-50 hover:text-rose-200 font-bold`}
          >
            <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
              dom
            </span>
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none mr-1.5">
              bui
            </span>
            <span className="inline-block transition-transform group-hover:translate-x-1.5 motion-reduce:transform-none mr-2 font-normal">
              /
            </span>
            <span className="inline-block transition-transform group-hover:translate-x-3 motion-reduce:transform-none">
              INSOMNYC
            </span>
          </a>
        </motion.div>

        <div className=" items-center max m-4"></div>
        {/* MAIN ICON BUTTONS */}
        <div className="flex items-center justify-center mb-2 space-x-4">
          <motion.a
            href="/contact"
            className="bg-emerald-300 text-emerald-50 p-4 rounded-xl bg-button"
            aria-label="Scrum Board"
            rel="noopener noreferrer"
            whileTap={{
              scale: 0.89,
            }}
            whileFocus={{ scale: 0.89 }}
            whileHover={{
              scale: 0.97,
            }}
            initial={{ opacity: 0, x: -400, scale: 0 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              type: "spring",
              duration: 1.25,
            }}
          >
            <Mail className="w-8 h-8" />
          </motion.a>
          <motion.button
            onClick={changeBackground}
            className="bg-emerald-300 text-emerald-50 p-4 rounded-xl bg-button"
            whileTap={{
              scale: 0.89,
            }}
            whileFocus={{ scale: 0.89 }}
            whileHover={{
              scale: 0.97,
            }}
            initial={{ opacity: 0, y: 400, scale: 0 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              type: "spring",
              duration: 1.25,
            }}
          >
            <Dices className="w-8 h-8" />
          </motion.button>
          <motion.a
            href="https://agile.dombui.com"
            className="bg-emerald-300 text-emerald-50 p-4 rounded-xl bg-button"
            aria-label="Scrum Board"
            rel="noopener noreferrer"
            whileTap={{
              scale: 0.89,
            }}
            whileFocus={{ scale: 0.89 }}
            whileHover={{
              scale: 0.97,
            }}
            initial={{ opacity: 0, x: 400, scale: 0 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              type: "spring",
              duration: 1.25,
            }}
          >
            <Rabbit className="w-8 h-8" />
          </motion.a>
        </div>
        {/* RED TEXT BUTTONS */}
        <span className="max-w-auto">
          <div className="flex flex-col items-center text-5xl mt-3">
            <motion.a
              href="/gallery"
              className="font-extrabold inline-block bg-rose-400 px-4 rounded-xl nav-button"
              aria-label="Gallery"
              whileTap={{
                scale: 0.89,
              }}
              whileFocus={{ scale: 0.89 }}
              whileHover={{
                scale: 0.97,
              }}
              initial={{ opacity: 0, x: 400, scale: 0 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                type: "spring",
                duration: 1.25,
              }}
            >
              gallery
            </motion.a>

            <motion.a
              href="/shop"
              className="font-extrabold inline-block bg-rose-400 px-11 mt-4 rounded-xl nav-button"
              aria-label="Shop"
              whileTap={{
                scale: 0.89,
              }}
              whileFocus={{ scale: 0.89 }}
              whileHover={{
                scale: 0.97,
              }}
              initial={{ opacity: 0, y: 400, scale: 0 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                type: "spring",
                duration: 1.25,
              }}
            >
              shop
            </motion.a>
          </div>
        </span>
        {/* SM NAV BUTTONS */}
        <div className="m-2">
          {/* <Link
            href="/about"
            className="text-xl font-bold bg-rose-400 py-1 px-2.5 rounded-md nav-button"
            aria-label="About Dom Bui"
          >
            about
          </Link> */}
        </div>
        {/* MUSIC PLAYER */}
        <div className="flex items-center justify-center mb-5 space-x-8 mt-6">
          <motion.button
            onClick={playPause}
            className="text-emerald-50 mr-3 bg-transparent p-2  rounded-xl bg-button"
            whileTap={{
              scale: 0.89,
            }}
            whileFocus={{ scale: 0.89 }}
            whileHover={{
              scale: 0.97,
            }}
            initial={{ opacity: 0, x: -400, scale: 0 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              type: "spring",
              duration: 1.25,
            }}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4" />
            )}
          </motion.button>
          <motion.button
            onClick={playNextSong}
            className="text-emerald-50 bg-transparent p-2 rounded-xl bg-button"
            whileTap={{
              scale: 0.89,
            }}
            whileFocus={{ scale: 0.89 }}
            whileHover={{
              scale: 0.97,
            }}
            initial={{ opacity: 0, x: 400, scale: 0 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              type: "spring",
              duration: 1.25,
            }}
          >
            <SkipForward className="w-4 h-4" />
          </motion.button>
        </div>
        {/* 2024 TERMS */}
        <motion.div
          className="group border-transparent transition-colors hover-bg-center dombui mt-4"
          initial={{ opacity: 0, y: 100, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            type: "spring",
            duration: 3.66,
          }}
        >
          <Link
            href="/terms"
            className={` mb-1 text-sm text-emerald-50 hover:text-rose-200 `}
          >
            © 2024{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              dom
            </span>
            <span className="inline-block transition-transform group-hover:translate-x-2.5 motion-reduce:transform-none">
              bui
            </span>
          </Link>
        </motion.div>
        {/* MUSIC PLAYER BUTTONS */}
        {/* RESET PAGE BUTTON -  conditionally render btn if bgIndex>0 or isPlaying ? */}
        {backgroundIndex > 0 || isPlaying ? (
          <motion.button
            onClick={resetPage}
            className="text-emerald-50 m-4 bg-transparent py-1 flex items-center reset fixed top-0 left-0 mt-4 ml-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              duration: 2.75,
            }}
          >
            <CircleDot className="w-4 h-4" />
            <p className="ml-2 text-2xs">Reset</p>
          </motion.button>
        ) : null}
        {/* NOW PLAYING */}
        {isPlaying && (
          <>
            <motion.div
              className="text-center text-white fixed bottom-0 left-0 p-4" // Adjusted classes for fixed positioning
              style={videoContainerStyle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "spring", duration: 2.75 }}
            >
              <div className="flex items-center space-x-2">
                {" "}
                {/* Removed justify-center to align content to the start */}
                <button
                  onClick={() => setIsTracklistVisible(!isTracklistVisible)}
                  className="focus:outline-none"
                >
                  {isTracklistVisible ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ListMusic className="w-4 h-4" />
                  )}
                </button>
                <p className="flex-1">
                  {shuffledSongs[currentSongIndex]?.title} by{" "}
                  {shuffledSongs[currentSongIndex]?.artist}
                </p>
              </div>
            </motion.div>

            <YouTube
              videoId={shuffledSongs[currentSongIndex]?.youtubeId}
              opts={opts}
              onEnd={handleVideoEnd}
            />
          </>
        )}
        <TracklistComponent
          songs={shuffledSongs}
          isVisible={isTracklistVisible}
          onClose={() => setIsTracklistVisible(false)}
          onSongSelect={handleSongSelect}
        />
      </div>
    </>
  );
}

export default App;
