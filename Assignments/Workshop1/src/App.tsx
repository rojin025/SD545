import { useState } from "react";

import "./App.scss";
import avatar from "./images/bozai.png";

interface User {
  uid: string;
  avatar: string;
  uname: string;
}

interface Comment {
  rpid: number;
  user: User;
  content: string;
  ctime: string;
  like: number;
}

// Comment List data
const defaultList = [
  {
    // comment id
    rpid: 3,
    // user info
    user: {
      uid: "13258165",
      avatar: "",
      uname: "Jay Zhou",
    },
    // comment content
    content: "Nice, well done",
    // created datetime
    ctime: "10-18 08:15",
    like: 88,
  },
  {
    rpid: 2,
    user: {
      uid: "36080105",
      avatar: "",
      uname: "Song Xu",
    },
    content: "I search for you thousands of times, from dawn till dusk.",
    ctime: "11-13 11:29",
    like: 90,
  },
  {
    rpid: 1,
    user: {
      uid: "30009257",
      avatar,
      uname: "John",
    },
    content:
      "I told my computer I needed a break... now it will not stop sending me vacation ads.",
    ctime: "10-19 09:00",
    like: 66,
  },
];

// current logged in user info
const user = {
  // userid
  uid: "30009257",
  // profile
  avatar,
  // username
  uname: "John",
};

// Nav Tab
const tabs = [
  { type: "hot", text: "Top" },
  { type: "newest", text: "Newest" },
];

const App = () => {
  // created datetime
  const [userList, setUserList] = useState<Comment[]>(defaultList);

  function handleComment() {
    const newUserList = userList.map((user) => {
      return (
        <>
          <div className="reply-item" key={user.user.uid}>
            <div className="root-reply-avatar">
              <div className="bili-avatar">
                <img className="bili-avatar-img" alt="" />
              </div>
            </div>
            <div className="content-wrap">
              <div className="content-wrap">
                <div className="user-info">
                  <div className="user-name">{user.user.uname}</div>
                </div>

                <div className="root-reply">
                  <span className="reply-content">{user.content}</span>
                  <div className="reply-info">
                    <span className="reply-time">
                      {"2023-" + user.ctime.split(" ")[0]}
                    </span>

                    <span className="reply-time">Like:{user.like}</span>
                    <span
                      className="delete-btn"
                      onClick={() => {
                        handleDelete(user.rpid);
                      }}
                    >
                      Delete
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    });

    return <>{newUserList}</>;
  }

  function handleTopComment() {
    const topList = defaultList
      .map((o) => ({ ...o }))
      .sort((x, y) => y.like - x.like);

    setUserList(topList);
  }

  function handleNewestComment() {
    const newestCommentList = userList
      .map((o) => ({ ...o }))
      .sort((x, y) => {
        const dateX = new Date(x.ctime);
        const dateY = new Date(y.ctime);
        return dateY.getTime() - dateX.getTime();
      });
    setUserList(newestCommentList);
  }

  function handleDelete(rpid: number) {
    const updatedList = userList
      .map((o) => ({ ...o }))
      .filter((user) => user.rpid !== rpid);
    setUserList(updatedList);
  }

  return (
    <div className="app">
      {/* Nav Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">Comments</span>
            {/* Like */}
            <span className="total-reply">{10}</span>
          </li>
          <li className="nav-sort">
            {/* highlight class name： active */}
            <span className="nav-item" onClick={handleTopComment}>
              Top
            </span>
            <span className="nav-item" onClick={handleNewestComment}>
              Newest
            </span>
          </li>
        </ul>
      </div>

      <div className="reply-wrap">
        {/* comments */}
        <div className="box-normal">
          {/* current logged in user profile */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={avatar} alt="Profile" />
            </div>
          </div>
          <div className="reply-box-wrap">
            {/* comment */}
            <textarea
              className="reply-box-textarea"
              placeholder="tell something..."
            />
            {/* post button */}
            <div className="reply-box-send">
              <div className="send-text">post</div>
            </div>
          </div>
        </div>
        {/* comment list */}

        <div className="reply-list">
          {/* comment item */}
          {handleComment()}
        </div>
      </div>
    </div>
  );
};

export default App;
