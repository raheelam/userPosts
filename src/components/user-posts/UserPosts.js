import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import LoadingPage from "../common/LoadingPage";
import "./userPosts.css";

function UserPosts() {
  const { id, username } = useParams();
  const [userPosts, setUserPosts] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        let temp = json.filter((p) => parseInt(p.userId) === parseInt(id));
        setUserPosts(temp);
      });
  }, [id]);
  if (userPosts == null) {
    return <LoadingPage />;
  }
  return (
    <div className="posts-wrapper">
      <Link to="/" className="back-btn">
        Back
      </Link>
      <h1>{`${username}'s posts`}</h1>
      <div className="posts">
        {userPosts.map((p) => (
          <div key={p.id} className="post-block">
            <div className="post">
              <h2 className="post-title">Title: {p.title}</h2>
              <p className="post-body">{p.body}</p>
              <small>post id: {p.id}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserPosts;
