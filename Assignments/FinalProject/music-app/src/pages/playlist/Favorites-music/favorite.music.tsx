import { Music } from "../../../types/types";
import "./favorites.css";

interface Props {
  favList: Music[];
  onRemoveFavPlaylist: (music: Music) => void;
  onCurrentMusic: (muisc: Music) => void;
}

export default function FavoriteMusic({
  favList,
  onRemoveFavPlaylist,
  onCurrentMusic,
}: Props) {
  return (
    <div>
      <h3 className="playlist">Your Playlist</h3>
      <table className="table-playlist">
        <tr className="th-headers-playlist">
          <td className="td-playlist-bold">Index</td>
          <td className="td-22-playlist">Title</td>
          <td className="td-actions">Actions</td>
        </tr>

        {favList.map((music, index) => (
          <tr className="th-playlist" key={music.id}>
            <td className="td-playlist-bold">{index + 1}</td>
            <td className="td-22-playlist">{music.title}</td>
            <td className="td-actions">
              {" "}
              <i
                className="fa-solid fa-circle-minus"
                onClick={() => onRemoveFavPlaylist(music)}
              ></i>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <i
                className="fa-solid fa-circle-play"
                onClick={() => onCurrentMusic(music)}
              ></i>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
