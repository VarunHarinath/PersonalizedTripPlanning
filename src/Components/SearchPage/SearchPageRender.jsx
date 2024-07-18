import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../../contant";

const SearchPageRender = () => {
  const { destination, cost } = useParams(); // Assuming you're using cost from URL params
  const categories = Object.keys(data.categories); // Extracting category names from data
  const [activeCategory, setActiveCategory] = useState(categories[0]); // Default active category

  const handleTabClick = (category) => {
    setActiveCategory(category);
  };

  const renderPlaces = () => {
    if (data.categories.hasOwnProperty(activeCategory)) {
      // Filter places based on cost condition (< cost)
      const filteredPlaces = data.categories[activeCategory].filter(
        (place) => place.cost <= cost
      );

      if (filteredPlaces.length > 0) {
        return filteredPlaces.map((place, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded-lg my-5">
            <h2 className="text-lg font-bold text-sky-600">{place.name}</h2>
            <p className="mt-2 text-gray-600">{place.description}</p>
            <p className="mt-2 text-gray-600 font-semibold">
              Cost: ₹{place.cost}
            </p>
          </div>
        ));
      } else {
        return (
          <p>No places found for this category within the specified cost.</p>
        );
      }
    } else {
      return <p>No places found for this category.</p>;
    }
  };

  return (
    <div className="m-7 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        {/* Button to navigate back to home page */}
        <Link to="/" className="text-sm text-gray-600 hover:text-gray-900">
          &larr; Back to Home
        </Link>
      </div>
      <div className="my-7 ">
        {destination && (
          <h1 className="text-2xl font-bold">
            Places in {destination} under ₹{cost}
          </h1>
        )}{" "}
      </div>

      <div className="sm:hidden">
        {/* Responsive tabs for mobile */}
        <select
          className="block w-full p-2 border border-gray-300 rounded-md bg-white text-gray-700"
          value={activeCategory}
          onChange={(e) => handleTabClick(e.target.value)}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="hidden sm:block">
        {/* Desktop view tabs */}
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex gap-6" aria-label="Tabs">
            {categories.map((category, index) => (
              <a
                key={index}
                onClick={() => handleTabClick(category)}
                className={`inline-flex items-center gap-2 border-b-2 ${
                  activeCategory === category
                    ? "border-sky-600 text-sky-600"
                    : "border-transparent text-gray-500 hover:border-sky-600 hover:text-sky-600"
                } px-1 pb-4 text-sm font-medium`}
              >
                {category}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="mt-4">
        {/* Render places based on activeCategory */}
        {renderPlaces()}
      </div>
    </div>
  );
};

export default SearchPageRender;
