"use client";
import Translator from "@/utils/Translator";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

interface RequesterData {
  id: number;
  name: string;
  position: string;
  email: string;
  phone: string;
}

function Bluewave() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;

  const [data, setData] = useState<RequesterData[]>([]); // State to store API data, initialized as an array of CompanyData
  const [password, setPassword] = useState<string>(""); // State for password input
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false); // State to track if the user is authorized

  const correctPassword = "snerequester2024"; // The correct password (ideally this should be securely managed)

  useEffect(() => {
    if (isAuthorized) {
      // Define the async function to fetch data from the API
      const fetchData = async () => {
        try {
          const response = await fetch('https://api.satrianusa.group/api/get-downloader', {
            method: 'GET', // Assuming GET method
            headers: {
              'Content-Type': 'application/json',
              'password': 'password' // Add the header here
            }
          });
          const result = await response.json();
          setData(result); // Update state with fetched data
        } catch (error) {
          console.error("Error fetching company profile data:", error);
        }
      };

      fetchData(); // Call the function to fetch data
    }
  }, [isAuthorized]);

  const handlePasswordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthorized(true);
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <div className="mx-auto my-20 max-w-7xl">
      {!isAuthorized ? (
        <div className="flex items-center justify-center h-screen">
          <form onSubmit={handlePasswordSubmit} className="p-6 bg-white rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Enter Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <button
              type="submit"
              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  No
                </th>
                <th scope="col" className="px-6 py-3">
                  Fullname
                </th>
                <th scope="col" className="px-6 py-3">
                  Job title
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone number
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="border-b odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {index + 1}
                  </th>
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4">{item.position}</td>
                  <td className="px-6 py-4">{item.email}</td>
                  <td className="px-6 py-4">{item.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Bluewave;
