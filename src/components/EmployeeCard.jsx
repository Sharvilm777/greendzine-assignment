import { Link } from "react-router-dom";

const EmployeeCard = ({ employee }) => {
  return (
    <div className="max-w-sm mx-auto border border-green-500 text-white shadow-lg rounded-lg overflow-hidden mb-4">
      <Link to={`/employee/${employee.id}`} className="block">
        <div className="px-6 py-4">
          <h2 className="font-bold text-xl mb-2">{employee.name}</h2>
          <p className="text-white">
            <span className="font-semibold text-lg">Role</span>: {employee.role}
          </p>
          <p className="text-white text-sm">
            <span className="font-semibold text-lg">Employee ID</span>:{" "}
            {employee.empId}
          </p>
          <p className="text-white text-sm">
            <span className="font-semibold text-lg">DOB</span>: {employee.dob}
          </p>
        </div>
        <div className="px-6 py-4 border border-green-500 rounded m-4">
          View Details
        </div>
      </Link>
    </div>
  );
};

export default EmployeeCard;
