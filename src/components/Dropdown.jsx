import React from "react";

const Dropdown = () => {
  return (
    <div className="bg-white shadow-xl">
      <div>
        <div className="flex items-start space-x-8 pl-44">
          {/* Unordered List */}
          <ul className="flex-1">
            <li>
              <p className="text-lg font-bold">CORE VALUES</p>
            </li>
            <div>
              <li className="mb-2">
                <p className="text-gray-700 font-semibold">Dignity</p>
              </li>
              <li className="mb-2">
                <p className="text-gray-700 font-semibold">Integrity</p>
              </li>
              <li className="mb-2">
                <p className="text-gray-700 font-semibold">Honor</p>
              </li>
              <li className="mb-2">
                <p className="text-gray-700 font-semibold">Resilience</p>
              </li>
              <li>
                <p className="text-gray-700 font-semibold">Empathy</p>
              </li>
            </div>
          </ul>

          {/* Image */}
          <div className="w-1/3">
            <img
              src="assets/other/5.jpg"
              alt="Core Values Illustration"
              className="w-full h-full shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
