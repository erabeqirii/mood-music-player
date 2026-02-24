import { useState } from "react";
import { getTracksByMood } from "./Services/jamendo";
import MoodButtons from "./Components/MoodButtons";
import TrackList from "./Components/TrackList";
import Player from "./Components/Player";
import "./Style/MusicPlay.css";

function App() {
  const [tracks, setTracks] = useState([]);
  const [selectedMood, setSelectedMood] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState(null);
  

  const handleMoodSelect = async (mood) => {
    setSelectedMood(mood);
    const data = await getTracksByMood(mood);
    setTracks(data);
    setSelectedTrack(null);
  };

  return (
    <div className="music-play">
      <h1 className="description">Discover Indie Music by Mood</h1>
      {tracks.length === 0 && !selectedTrack && (
        <MoodButtons onMoodSelect={handleMoodSelect} />
      )}

{tracks.length > 0 && !selectedTrack && (
  <TrackList
    tracks={tracks}
    mood={selectedMood}          
    onSelectTrack={setSelectedTrack}
    onBack={() => {
      setTracks([]);
      setSelectedMood(null);   
    }}
  />
)}

      {selectedTrack && (
        <Player
          track={selectedTrack}
          onBack={() => setSelectedTrack(null)}
        />
      )}
    </div>
  );
}

export default App;
