import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import "./music.player.css";
import { Music } from "../../../types/types";

interface Props {
  favList: Music[];
  currentMusic: Music | null;
  onCurrentMusic: (muisc: Music) => void;
}
const URL = "http://localhost:4000/";

export default function MusicPlayer({
  favList,
  currentMusic,
  onCurrentMusic,
}: Props) {
  function handlePlay() {
    console.log("play");
  }
  function handleNext() {
    console.log("next");
  }

  function handlePrevious() {
    console.log("Previous");
  }

  return (
    <div>
      <table className="table-playing">
        <tr className="tr-headers-playing">
          <td>
            <AudioPlayer
              autoPlay
              showSkipControls
              header={currentMusic?.title}
              src={`${URL}${currentMusic?.urlPath}`}
              // onPlay={handlePlay}
              onPlay={(e) => console.log("onPlay")}
              onClickNext={handleNext}
              onClickPrevious={handlePrevious}
              hasDefaultKeyBindings={true}
            />
          </td>
        </tr>
      </table>
    </div>
  );
}
