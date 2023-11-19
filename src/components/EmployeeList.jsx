import { useState } from "react";
import EmployeeCard from "./EmployeeCard";
import employees from "../assets/employeeList";
import NavBar from "./NavBar";
const EmployeeList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedEmployees, setSortedEmployees] = useState(employees);

  const handleSearch = () => {
    const filteredEmployees = employees.filter((employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSortedEmployees(filteredEmployees);
  };

  const handleSortByName = () => {
    const sortedByName = [...sortedEmployees].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setSortedEmployees(sortedByName);
  };

  return (
    <>
      <NavBar />
      <div className="container mx-auto  p-4 bg-black text-white h-screen">
        <div className="flex flex-col items-center mb-4 sm:flex-row">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border border-gray-300 rounded mb-2 sm:mb-0 md:w-3/4 w-full  bg-black text-white"
          />

          <div className="flex flex-wrap items-center sm:ml-2">
            <button
              onClick={handleSearch}
              className="bg-green-500 text-white px-4 py-2 rounded  sm:mb-0 sm:mr-2  sm:w-auto"
            >
              Search
            </button>

            <button
              onClick={handleSortByName}
              className="bg-green-500 text-white px-4 py-2 rounded m-2 sm:m-0 "
            >
              Sort by Name
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {sortedEmployees.map((employee) => (
            <div key={employee.id} className="w-full">
              <EmployeeCard employee={employee} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default EmployeeList;
