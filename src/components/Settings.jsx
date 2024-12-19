import React from "react";

const Settings = ({ exportData }) => (
  <div className="p-6 mt-20 text-black bg-white">
    <h2 className="mb-6 text-3xl font-bold">Settings</h2>
    <div className="mb-6">
      <label className="block mb-2 font-semibold">Dark Mode</label>
      <input type="checkbox" className="w-6 h-6" />
    </div>
    <div className="mb-6">
      <label className="block mb-2 font-semibold">Font Style</label>
      <select className="w-full p-3 border border-black rounded-md">
        <option value="Roboto">Roboto</option>
        <option value="Arial">Arial</option>
        <option value="Times New Roman">Times New Roman</option>
      </select>
    </div>
    <button
      onClick={exportData}
      className="px-4 py-2 text-white bg-black rounded-md"
    >
      Export Data
    </button>
  </div>
);

export default Settings;
