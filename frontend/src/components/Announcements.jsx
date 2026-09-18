import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postsResults } from "../slices/postSlice";

export const Announcements = () => {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/v1/announcements");
        const json = await res.json();
        if (!res.ok) {
          throw new Error(json.message || "Fetching Data failed");
        }
        setData(json.data[0]);
        dispatch(postsResults(json.data[0]));
        console.log(json.data[0]);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="announcement-container">
        <h1 className="announcement-heading">Announcements</h1>
        <div className="announcement-info-container">
          <h2 className="announcement-subject">{data?.title}</h2>
          <p className="announcement-date">{data?.date}</p>
          <hr className="solid-line" />
          <p className="announcement-desc">{data?.description}</p>
        </div>
      </div>
    </>
  );
};
