import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const Documents = () => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/v1/documents");
        const json = await res.json();

        setDocs(json.data);
        if (!res.ok) {
          throw new Error(json.message || "Fetching File failed");
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  const handleClick = async (id) => {
    try {
      const res = await fetch(`/api/v1/documents/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (!res.ok) {
        throw new Error(res.message || "Network response was not ok");
      }
      setDocs((prev) => prev.filter((doc) => doc._id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <h1 className="docs-header">Documents</h1>
      {docs.length === 0 ? (
        <p className="doc-text">There are no documents to show right now</p>
      ) : (
        <ul>
          {docs.map((doc) => (
            <li className="docs" key={doc._id}>
              <a className="docs-link" href={doc.fileUrl} target="_blank">
                {doc.name}
              </a>
              <button onClick={() => handleClick(doc._id)}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
