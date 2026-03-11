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
  return (
    <div className="w-full flex items-center flex-wrap">
      {allNotes?.map((ele) => {
        return (
          <Fragment key={ele.id}>
            <Notes data={ele} />
          </Fragment>
        );
      })}
    </div>
  );
};

export default AllNotes;
