import React, { useEffect, useState } from "react";
import { data } from "../../contant";
import { Link, Navigate } from "react-router-dom";

const InitialPageRender = () => {
  const [destination, setDestination] = useState("");
  const [budget, setBudget] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    console.log(data.categories);
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log(destination, budget);
  };

  return (
    <>
      <div className="bg-gray-900 min-h-screen">
        <section className="relative">
          <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
            <div className="space-y-5 max-w-4xl mx-auto text-center">
              <h2 className="text-4xl text-white font-extrabold mx-auto md:text-5xl">
                Personalized Trip Planning
              </h2>
              <p className="max-w-2xl mx-auto text-gray-400">
                Personalized Trip Planner is an app designed to help users
                create tailored travel itineraries by recommending popular
                places, temples, museums, parks, and restaurants based on their
                preferences.
              </p>
              <form
                onSubmit={onSubmitHandler}
                className="justify-center items-center gap-x-3 sm:flex"
              >
                <input
                  type="text"
                  placeholder="Enter Destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full px-3 py-2.5 text-gray-400 bg-gray-700 focus:bg-gray-900 duration-150 outline-none rounded-lg shadow sm:max-w-sm sm:w-auto"
                  required
                />
                <span className="text-white mx-2">or</span>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full px-3 py-2.5 text-gray-400 bg-gray-700 focus:bg-gray-900 duration-150 outline-none rounded-lg shadow sm:max-w-sm sm:w-auto"
                  required
                >
                  <option value="">Select a Destination</option>
                  <option value={data.place}>{data.place}</option>
                  <option value="Bengaluru">Bengaluru</option>
                  <option value="Noida">Noida</option>
                </select>
                <input
                  type="number"
                  placeholder="Budget (₹)"
                  required
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-3 py-2.5 text-gray-400 bg-gray-700 focus:bg-gray-900 duration-150 outline-none rounded-lg shadow sm:max-w-sm sm:w-auto"
                />
                <button className="flex items-center justify-center gap-x-2 py-2.5 px-4 mt-3 w-full text-sm text-white font-medium bg-sky-500 hover:bg-sky-400 active:bg-sky-600 duration-150 rounded-lg sm:mt-0 sm:w-auto">
                  Get started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </form>

              <div className="flex justify-center items-center gap-x-4 text-gray-400 text-sm">
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                    </svg>
                  ))}
                </div>
                <p>
                  <span className="text-gray-100">5.0</span> by over 200 users
                </p>
              </div>
              <div className="flex items-center text-gray-100 space-x-2">
                <span>For Destination Suggestions:</span>
                <Link to={destination ? `/suggestion/${destination}` : "#"}>
                  <button
                    className={`flex items-center justify-center gap-x-2 py-2.5 px-4 mt-3 w-full text-sm text-white font-medium rounded-lg sm:mt-0 sm:w-auto ${
                      destination
                        ? "bg-sky-500 hover:bg-sky-400 active:bg-sky-600"
                        : "bg-gray-500 cursor-not-allowed"
                    }`}
                    title={
                      !destination
                        ? "Please select the destination for suggestions"
                        : ""
                    }
                    disabled={!destination}
                  >
                    click here
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
              {submitted && (
                <Navigate to={`/destination-search/${destination}/${budget}`} />
              )}
            </div>
          </div>
          <div
            className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
            style={{
              background:
                "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
            }}
          ></div>
        </section>
      </div>
    </>
  );
};

export default InitialPageRender;
