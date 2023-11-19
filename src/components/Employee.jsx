import { useParams } from "react-router-dom";
import employees from "../assets/employeeList";
import NavBar from "./NavBar";

const Employee = () => {
  const { id } = useParams();
  const employee = employees.find((emp) => emp.id === parseInt(id, 10));

  if (!employee) {
    return (
      <div className="h-screen flex items-center justify-center bg-black">
        <div className="text-red-500 border border-white p-16 text-center font-bold text-2xl">
          Employee not found
        </div>
      </div>
    );
  }

  return (
    <>
      <NavBar />
      <div className="h-screen flex items-center justify-center bg-black">
        <div className="bg-green-500 w-96 text-white rounded-lg overflow-hidden shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">{employee.name}</h2>
          <p className="text-white text-sm">Role: {employee.role}</p>
          <p className="text-white text-sm">Employee ID: {employee.empId}</p>
          <p className="text-white text-sm">DOB: {employee.dob}</p>
        </div>
      </div>
    </>
  );
};

export default Employee;
