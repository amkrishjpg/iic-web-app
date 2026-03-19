import React from "react";

function GenerateReport() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">AI Event Report Generator</h1>

      <div className="bg-white p-6 rounded-lg shadow w-full max-w-lg">
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Event Title"
            className="border p-2 rounded"
          />

          <textarea
            placeholder="Event Description"
            className="border p-2 rounded"
          />

          <input type="file" multiple />

          <button className="bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
            Generate Report
          </button>
        </form>
      </div>
    </div>
  );
}

export default GenerateReport;
