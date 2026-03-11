import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import Notes from "./Notes";
import { useParams } from "react-router-dom";

const AllNotes = () => {
  const [allNotes, setAllNotes] = useState([]);
  const { userId } = useParams();

  const fdata = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/notes");
      const fileteredData = data.filter((note) => note.userId === userId);
      setAllNotes(fileteredData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fdata();
  }, []);

  const handleDelete = (id) => {
    setAllNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return (
    <div className="w-full flex items-center justify-center flex-wrap">
      {allNotes.length > 0 ? (
        allNotes.map((ele) => {
          return (
            <Fragment key={ele.id}>
              <Notes data={ele} onDelete={handleDelete} />
            </Fragment>
          );
        })
      ) : (
        <h1 className="text-3xl text-white font-medium">
          You don't have any notes
        </h1>
      )}
    </div>
  );
};

export default AllNotes;
