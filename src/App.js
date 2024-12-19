import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import DiaryEntry from "./components/DiaryEntry";
import Settings from "./components/Settings";

function App() {
  const [entries, setEntries] = useState([]);

  const handleNewEntry = (entry) => {
    setEntries([...entries, entry]);
  };

  const exportData = () => {
    const formattedEntries = entries.map((entry, index) => {
      return `
Entry ${index + 1}:
Title: ${entry.title}
Mode: ${entry.mode}
Content:
${entry.content}

--------------------------
      `;
    }).join("\n");

    const textBlob = new Blob([formattedEntries], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(textBlob);
    link.download = "diary_entries.txt";
    link.click();
  };

  return (
    <BrowserRouter>
    <div className="flex">
      <Header />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Dashboard info={entries} />} />
          <Route path="/diary-entry" element={<DiaryEntry onDataChange={handleNewEntry} />} />
          <Route path="/settings" element={<Settings exportData={exportData} />} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
