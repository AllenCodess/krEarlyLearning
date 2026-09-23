import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postsResults } from "../slices/postSlice";

export const Announcements = () => {
  const post = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/v1/announcements/");
        const json = await res.json();
        console.log(json);
        if (!res.ok) {
          throw new Error(json.message || "Fetching Data failed");
        }

        dispatch(postsResults(json.data[0]));
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <>
      {post.title === null ? (
        <p className="no-posts">There are no announcements at this time.</p>
      ) : (
        <div className="announcement-container">
          <h1 className="announcement-heading">Announcements</h1>
          <div className="announcement-info-container">
            <h2 className="announcement-subject">{post?.title}</h2>
            <p className="announcement-date">{post?.date}</p>
            <hr className="solid-line" />
            <p className="announcement-subject">{post?.subject}</p>
            <p className="announcement-desc">{post?.description}</p>
          </div>
        </div>
      )}
    </>
  );
};
