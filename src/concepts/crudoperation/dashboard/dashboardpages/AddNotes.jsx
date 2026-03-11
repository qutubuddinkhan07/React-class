import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const AddNotes = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tags: "",
  });
  const { userId } = useParams();
  const navigate = useNavigate();

  const handleInput = (e) => {
    let { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleForm = async (e) => {
    e.preventDefault();

    // api call
    try {
      const { data } = await axios.post("http://localhost:3000/notes", {
        ...formData,
        userId,
      });

      toast.success("Note added");

      setFormData({
        title: "",
        description: "",
        tags: "",
      });

      navigate(`/dashboard/allnotes/${userId}`);
    } catch (error) {
      toast.error("Something went wrong.", { position: "top-center" });
      console.error("some error occured");
    }
  };

  return (
    <div className="w-[500px] mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Add New Note
      </h2>

      <form className="space-y-4" onSubmit={handleForm}>
        {/* Note Title */}
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter note title"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleInput}
            value={formData.title}
          />
        </div>

        {/* Note Description */}
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter note description"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            onChange={handleInput}
            value={formData.description}
          ></textarea>
        </div>

        {/* Tags */}
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="tags">
            Tags
          </label>
          <input
            type="text"
            id="tags"
            name="tags"
            placeholder="Enter tags separated by commas"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleInput}
            value={formData.tags}
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-3">
          <button
            type="button"
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold"
          >
            Add Note
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNotes;
