import "./music-list.css";
export default function Musiclist() {
  return (
    <div>
      <h3 className="song-interest">Songs you may interest</h3>
      <table className="table">
        <tr className="th-headers">
          <td className="td-1">Index</td>
          <td className="td-2">Title</td>
          <td className="td-2">Release Date</td>
          <td className="td-1">Action</td>
        </tr>
        <tr className="th">
          <td className="td-1-bold">1</td>
          <td className="td-2">Mocking Bird</td>
          <td className="td-2">1989-1-2</td>
          <td className="td-1">
            <i className="fa-solid fa-plus"></i>
          </td>
        </tr>
      </table>
    </div>
  );
}
