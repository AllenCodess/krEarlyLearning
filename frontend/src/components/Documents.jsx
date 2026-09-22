import { useEffect, useState } from "react";

export const Documents = () => {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/v1/documents");
        const json = await res.json();
        console.log(json);
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
  return (
    <>
      <h1 className="docs-header">Documents</h1>
      {docs.length === 0 ? (
        <p className="doc-text">There are no documents to show right now</p>
      ) : (
        <ul>
          {docs.map((doc) => (
            <li className="docs" key={doc._id}>
              <a className="docs-link" href={doc.fileUrl} target="_blank" rel="noopener noreferrer">
                {doc.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
