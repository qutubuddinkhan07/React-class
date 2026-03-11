import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Notes = ({ data, onDelete }) => {
  const deleteNote = async (id) => {
    if (!confirm("Are you sure that you want to delete?")) {
      return;
    }
    const { data } = await axios.delete(`http://localhost:3000/notes/${id}`);
    toast.success(`${data.title} delete successfully`);
    // onDelete(id);
  };

  return (
    <div className="max-w-sm mx-auto mt-6 bg-white shadow-md rounded-xl overflow-hidden border border-gray-200">
      <div className="p-4">
        {/* Note Title */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {data.title}
        </h3>

        {/* Note Description */}
        <p className="text-gray-600 mb-3">{data.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-full">
            Tag1
          </span>
          <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full">
            Tag2
          </span>
          <span className="bg-purple-100 text-purple-700 text-xs font-medium px-2 py-1 rounded-full">
            Tag3
          </span>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-2">
          <button className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg text-sm font-medium">
            <Link to={`/dashboard/editnotes/${data.userId}/${data.id}`}>
              Update
            </Link>
          </button>
          <button
            className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm font-medium"
            onClick={() => deleteNote(data.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notes;
