import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ info }) => {
  const navigate = useNavigate();
  const [selectedEntry, setSelectedEntry] = useState(null);

  function nav() {
    navigate("/diary-entry");
  }

  function handleEntryClick(entry) {
    setSelectedEntry(selectedEntry === entry ? null : entry); // Toggle visibility
  }

  return (
    <div className="p-6 space-y-6">
      <h2 className="mb-4 text-3xl font-bold text-purple-700">Welcome to Your Diary</h2>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Calendar */}
        <div className="p-6 bg-white rounded-lg shadow-lg lg:col-span-1">
          <h3 className="mb-4 text-lg font-semibold text-gray-700">Your Calendar</h3>
          <Calendar className="w-full" />
        </div>

        {/* Recent Entries */}
        <div className="space-y-4 lg:col-span-2">
          {info.length === 0 ? (
            <p className="text-gray-500">No entries yet. Start adding one!</p>
          ) : (
            info.map((data, index) => (
              <div
                key={index}
                className="p-6 transition-shadow bg-white rounded-lg shadow-lg cursor-pointer hover:shadow-xl"
                onClick={() => handleEntryClick(data)}
              >
                <h3 className="mb-2 text-xl font-semibold text-gray-800">{data.title}</h3>
                <p className="text-sm text-gray-900">{data.mode}</p>
                <p className="text-sm text-gray-500">{data.content}</p>
                <p className="text-sm text-gray-700">{new Date().toLocaleString()}</p>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Display Selected Entry Details */}
      {selectedEntry && (
  <div className="p-6 mt-6 bg-white rounded-lg shadow-lg">
    <h3 className="mb-2 text-2xl font-semibold text-gray-800">{selectedEntry.title}</h3>
    <p className="mb-2 text-lg text-gray-900">{selectedEntry.mode}</p>
    <p className="text-sm text-gray-700">{selectedEntry.content}</p>
    <p className="text-sm text-gray-700">{new Date().toLocaleString()}</p>
  </div>
)}


      {/* Floating Button */}
      <button
        className="fixed p-4 text-2xl text-white transition-transform transform bg-purple-600 rounded-full shadow-lg bottom-6 right-6 hover:bg-purple-700 hover:scale-110"
        onClick={nav}
      >
        +
      </button>
    </div>
  );
};

export default Dashboard;
