import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import "./music.player.css";

export default function MusicPlayer() {
  return (
    <div>
      <table className="table-playing">
        <tr className="tr-headers-playing">
          <td>
            <AudioPlayer
              autoPlay
              src="http://localhost:4000/music/mocking_bird.mp3"

              // other props here
            />
          </td>
        </tr>
      </table>
    </div>
  );
}
