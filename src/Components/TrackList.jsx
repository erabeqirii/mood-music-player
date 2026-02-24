import "../Style/TrackList.css";
import play from "../Assets/Images/play.png"
import nophoto from "../Assets/Images/default.png";

export default function TrackList({ tracks, onSelectTrack, onBack, mood }) {
  return (
    <div className="track-list">
      <button onClick={onBack} className="button-back">&larr; back to moods</button>

      <h4 className="desc-list">Songs when you're feeling {mood.charAt(0).toUpperCase() + mood.slice(1)}</h4>
      <div className="tracks">
      {tracks.map((track) => (
        <div key={track.id} className="track-song" onClick={() => onSelectTrack(track)}>
          {track.album_image && (
            <img
              src={track.album_image || nophoto} 
              alt={track.name}
              width="200"
            />
          )}

          <p
            style={{ cursor: "pointer" }}
          >
            {track.name} <br/> <span>{track.artist_name}</span>
          </p>
          <img src={play} alt="play-song" id="play-song"/>
        </div>
      ))}
      </div>
    </div>
  );
}
