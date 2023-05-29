import React from "react";

function Booking() {
  return (
    <div className="container my-4 py-4 bg-slate-200 rounded-lg shadow-sm border-2 border-slate-300 w-auto">
      <h4 className="text-lg font-regular px-3">Search Ticket</h4>
      <form className="flex mt-3">
        <input
          type="text"
          name="text"
          className="mx-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-60 h-11 rounded-md sm:text-sm focus:ring-1"
          placeholder="From"
        />
        <input
          type="text"
          name="text"
          className="mx-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-60 h-11 rounded-md sm:text-sm focus:ring-1"
          placeholder="To"
        />
        {/* <div class="relative w-auto items-center">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            datepicker
            type="text"
            class="bg-white border shadow-sm border-slate-300 text-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-60 h-11 rounded-md sm:text-sm focus:ring-10 pl-10 p-2.5"
            placeholder="Select date"
          />
        </div> */}
        <input
          type="text"
          name="text"
          className="mx-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-60 h-11 rounded-md sm:text-sm focus:ring-1"
          placeholder="Select Date"
        />
        <input
          type="text"
          name="text"
          className="mx-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-60 h-11 rounded-md sm:text-sm focus:ring-1"
          placeholder="General"
        />
        <input
          type="text"
          name="text"
          className="mx-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-60 h-11 rounded-md sm:text-sm focus:ring-1"
          placeholder="All Classes"
        />
      </form>
    </div>
  );
}

export default Booking;
