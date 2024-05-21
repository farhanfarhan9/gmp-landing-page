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


  useEffect(() => {
    // Define the async function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.satrianusa.group/api/get-downloader"
        );
        const result = await response.json();
        setData(result); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching company profile data:", error);
      }
    };

    fetchData(); // Call the function to fetch data
  }, []); 
  
  return (
    <>
      <div className="mx-auto my-20 max-w-7xl">
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
                    {index+1}

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
      </div>
    </>
  );
}

export default Bluewave;
