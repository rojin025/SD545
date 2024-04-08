import { useState, useRef } from "react";
import classNames from "classnames";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

import "./App.scss";
import avatar from "./images/bozai.png";

interface User {
  uid: string;
  avatar: string;
  uname: string;
}

interface Comment {
  rpid: number | any;
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
  uid: "30009257",
  avatar,
  uname: "John",
};

// Nav Tab
const tabs = [
  { type: "hot", text: "Top" },
  { type: "newest", text: "Newest" },
];

const App = () => {
  const [userList, setUserList] = useState<Comment[]>(defaultList);
  const [activeType, setActiveType] = useState("hot");

  const userPostRef = useRef<HTMLTextAreaElement | null>(null);

  function CommentList() {
    const newUserList = userList.map((item) => {
      return (
        <div className="reply-item" key={item.user.uid}>
          <CommentComp key={item.rpid} comment={item} />
        </div>
      );
    });

    return <>{newUserList}</>;
  }

  interface CommentProps {
    comment: Comment;
  }

  function CommentComp({ comment }: CommentProps) {
    return (
      <>
        <div className="root-reply-avatar">
          <div className="bili-avatar">
            <img className="bili-avatar-img" alt="" />
          </div>
        </div>

        <div className="content-wrap">
          <div className="content-wrap">
            <div className="user-info">
              <div className="user-name">{comment.user.uname}</div>
            </div>

            <div className="root-reply">
              <span className="reply-content">{comment.content}</span>
              <div className="reply-info">
                <span className="reply-time">
                  {"2023-" + comment.ctime.split(" ")[0]}
                </span>

                <span className="reply-time">Like:{comment.like}</span>
                {comment.user.uid === user.uid && (
                  <span
                    className="delete-btn"
                    onClick={() => {
                      handleDelete(comment.rpid);
                    }}
                  >
                    Delete
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  function handleDelete(rpid: any) {
    console.log("Delete clicked");
    const updatedList = userList.filter((user) => user.rpid !== rpid);
    setUserList(updatedList);
  }

  function handleNewComment() {
    const newComment = {
      rpid: uuidv4(),
      user,
      content: userPostRef.current!.value,
      ctime: dayjs(Date.now()).format("MM-DD HH:mm"),
      like: 0,
    };

    setUserList([...userList, newComment]);
    userPostRef.current!.value = "";
    userPostRef.current!.focus();
  }

  function handeChangeActiveType(type: string) {
    setActiveType(type);
    if (type === "hot") {
      setUserList(_.orderBy(userList, "like", "desc"));
    } else {
      setUserList(_.orderBy(userList, "ctime", "desc"));
    }
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
            {tabs.map((tab) => {
              return (
                <span
                  key={tab.type}
                  className={classNames("nav-item", {
                    active: tab.type === activeType,
                  })}
                  onClick={() => handeChangeActiveType(tab.type)}
                >
                  {tab.text}
                </span>
              );
            })}
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
              ref={userPostRef}
            />
            {/* post button */}
            <div className="reply-box-send" onClick={handleNewComment}>
              <div className="send-text">post</div>
            </div>
          </div>
        </div>
        {/* comment list */}

        <div className="reply-list">
          {/* comment item */}
          {CommentList()}
        </div>
      </div>
    </div>
  );
};

export default App;
