import { Link, Outlet, useParams } from "react-router-dom";

// Detail component to display message details
export default function Details() {
  // Use useParams hook to get parameters from the URL
  const { id, title, content } = useParams();
  //   :title/:content
  return (
    <div>
      <hr />
      <h2>Details:</h2>
      <div>
        <p>ID: {id}</p>
        <p>Title: {title}</p>
        <p>Content: {content}</p>
      </div>
    </div>
  );
}
