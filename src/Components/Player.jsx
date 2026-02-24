import { useState, useRef, useEffect } from "react";
import "../Style/Player.css";
import playIcon from "../Assets/Images/play.png";
import pauseIcon from "../Assets/Images/pause.png";
import nophoto from "../Assets/Images/default.png";

export default function Player({ track, onBack }) {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setIsPlaying(true);
    audioRef.current.play();
  }, [track]);

  const togglePlay = () => {
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const current = audioRef.current.currentTime;
    const total = audioRef.current.duration || 0;

    setCurrentTime(current);
    setDuration(total);

    setProgress((current / total) * 100);
  };
const formatTime = (seconds) => {
  if (!seconds) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
};
  return (
    <div className="player">
      <button onClick={onBack} className="button-back">&larr; back to list</button>
      <div className="playing-song">
      {track.album_image && (
<div className={`vinyl ${isPlaying ? "spin" : ""}`}>
  <img
    className={`song-cover ${isPlaying ? "playing" : ""}`}
    src={track.album_image || nophoto} 
    alt={track.name}
  />
</div>
      )}

      <p>{track.name} <br/> <span>{track.artist_name}</span></p>

      {/* Custom Player Bar */}
      <div className="audio-wrapper">
      <div className="audio-player">
        <div className="progress-bar" onClick={(e) => {
            const rect = e.target.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            audioRef.current.currentTime = pos * audioRef.current.duration;
        }}>
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
        <div className={`equalizer ${isPlaying ? "active" : ""}`}>
  <span></span><span></span><span></span><span></span>
</div>
      </div>
      </div>
      <audio
        ref={audioRef}
        src={track.audio}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)} 
        hidden
      />
                        <div className="time">
  {formatTime(currentTime)} / {formatTime(duration)}
</div>
              <button onClick={togglePlay} className="play-btn">
          <img src={isPlaying ? pauseIcon : playIcon} alt="play/pause" />
        </button>
    </div>
    </div>
  );
}