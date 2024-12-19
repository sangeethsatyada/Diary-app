import React, { useState } from "react";

const DiaryEntry = ({ onDataChange }) => {
  const [data, setData] = useState({
    title: "",
    mode: "",
    content: "",
  });

  const { title, mode, content } = data;

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function submit(e) {
    e.preventDefault();
    onDataChange(data);
    setData({ title: "", mode: "", content: "" });
  }

  return (
    <div className="p-6 mt-20 text-black bg-white">
      <h2 className="mb-4 text-3xl font-bold">New Diary Entry</h2>
      <form className="space-y-4" onSubmit={submit}>
        <input
          type="text"
          placeholder="Entry Title"
          className="w-full p-3 border border-black rounded-md"
          onChange={handleChange}
          name="title"
          value={title}
        />
        <select
          className="w-full p-3 border border-black rounded-md"
          onChange={handleChange}
          name="mode"
          value={mode}
        >
          <option value="" disabled>
            Select Mood
          </option>
          <option value="😊 Happy">😊 Happy</option>
          <option value="😔 Sad">😔 Sad</option>
          <option value="😡 Angry">😡 Angry</option>
        </select>
        <textarea
          rows="10"
          className="w-full p-3 border border-black rounded-md"
          placeholder="Write your thoughts here..."
          onChange={handleChange}
          name="content"
          value={content}
        ></textarea>
        <div className="flex justify-end space-x-4">
          <button
            type="submit"
            className="px-4 py-2 text-white bg-black rounded-md"
          >
            Save
          </button>
          <button
            type="button"
            className="px-4 py-2 text-black bg-gray-200 rounded-md"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default DiaryEntry;
