import { useParams } from "react-router-dom";

// Detail component to display message details
export function Detail() {
  // Use useParams hook to get parameters from the URL
  let { id, title, content } = useParams();
  //   :title/:content
  return (
    <div>
      <h2>Message Detail</h2>
      <p>ID: {id}</p>
      <p>Title: {title}</p>
      <p>Content: {content}</p>
    </div>
  );
}
