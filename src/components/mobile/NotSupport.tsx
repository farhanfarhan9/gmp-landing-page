"use client";
import React, { useState } from "react";

function NotSupport() {
  const [closeModal, setcloseModal] = useState(false);
  if (!closeModal) {
    return (
      <div
        className="fixed inset-0 bg-gray-700 overflow-auto md:hidden z-50"
        id="my-modal"
      >
        <div className="relative p-4 mt-40 w-full mx-auto px-3 rounded-md">
          <div className="bg-white px-5 py-5 rounded-xl shadow-xl">
            <p className="my-5 text-center ">
              Maaf Untuk pengalaman terbaik, mohon gunakan perangkat desktop
              untuk mengakses website ini. Untuk saat ini website ini belum
              mendukung untuk tampilan mobile.
            </p>
            {/* <div className="flex justify-center">
              <button
                onClick={() => setcloseModal(true)}
                className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Close
              </button>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default NotSupport;
