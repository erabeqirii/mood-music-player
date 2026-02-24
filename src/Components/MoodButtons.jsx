import Happy from "../Assets/Images/happy.png";
import Sad from "../Assets/Images/sad.png";
import Chill from "../Assets/Images/chill.png";
import Energetic from "../Assets/Images/energetic.png";
import "../Style/MoodButtons.css";

export default function MoodButtons({ onMoodSelect }) {
  return (
    <div className="mood-buttons">
      <h2>How are you feeling right now?</h2>
      <div className="mood-buttons-wrapper">
        <button onClick={() => onMoodSelect("happy")} className="pixel-rpg"><div className="mood-container">
          <img src={Happy} alt="Happy"/>
          Happy
        </div></button>
        <button onClick={() => onMoodSelect("chill")} className="pixel-rpg">
        <div className="mood-container">
          <img src={Chill} alt="Chill"/>
          Chill
        </div></button>
         <button onClick={() => onMoodSelect("sad")} className="pixel-rpg">
        <div className="mood-container">
          <img src={Sad} alt="Sad"/>
         Sad
        </div></button>
        <button onClick={() => onMoodSelect("energetic")} className="pixel-rpg">
        <div className="mood-container">
          <img src={Energetic} alt="Energetic"/>
          Energetic
        </div></button>
      </div>
    </div>
  );
}
