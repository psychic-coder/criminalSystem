"use client"
import { useState } from 'react';

export default function Home() {
  const [criminalId, setCriminalId] = useState('');
  const [criminalDetails, setCriminalDetails] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setCriminalDetails(null);

    try {
      const response = await fetch(`/api/getCriminalDetails`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ criminalId }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch criminal details');
      }

      const data = await response.json();
      setCriminalDetails(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-black py-10 flex justify-center items-center ">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg  shadow-xl shadow-blue-700">
        <h1 className="text-2xl font-bold mb-6 text-center">Criminal Details Lookup</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="criminalId" className="block text-sm font-medium text-gray-700">
              Criminal ID
            </label>
            <input
              type="text"
              id="criminalId"
              value={criminalId}
              onChange={(e) => setCriminalId(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter Criminal ID"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Search
          </button>
        </form>

        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}

        {criminalDetails && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Criminal Details</h2>
            <div className="space-y-2">
              <p><span className="font-medium">Name:</span> {criminalDetails.name}</p>
              <p><span className="font-medium">Age:</span> {criminalDetails.age}</p>
              <p><span className="font-medium">Crime:</span> {criminalDetails.crime}</p>
              <p><span className="font-medium">Status:</span> {criminalDetails.status}</p>
              <p><span className="font-medium">Description:</span> {criminalDetails.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}