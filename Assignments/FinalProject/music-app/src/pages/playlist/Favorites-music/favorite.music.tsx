import "./favorites.css";
export default function FavoriteMusic() {
  return (
    <div>
      <h3 className="playlist">Your Playlist</h3>
      <table className="table-playlist">
        <tr className="th-headers-playlist">
          <td className="td-playlist-bold">Index</td>
          <td className="td-22-playlist">Title</td>
          <td className="td-actions">Actions</td>
        </tr>
        <tr className="th-playlist">
          <td className="td-playlist-bold">1</td>
          <td className="td-22-playlist">Mocking Bird</td>
          <td className="td-actions">
            {" "}
            <i className="fa-solid fa-circle-minus"></i>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <i className="fa-solid fa-circle-play"></i>
          </td>
        </tr>
      </table>
    </div>
  );
}
