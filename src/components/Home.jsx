import productivityData from "../assets/productivityData";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      <header className=" text-white p-4 flex items-center justify-center">
        <h1 className="text-2xl font-semibold">
          Employee Productivity Dashboard
        </h1>
      </header>

      <div className="container mx-auto p-4">
        <div className=" p-6 rounded-md shadow-md mb-4">
          <h2 className="text-xl font-semibold mb-4 text-white">
            This Week Productivity
          </h2>
          {productivityData.map((data, index) => (
            <div key={index} className="mb-4">
              <p className=" text-white text-lg font-semibold">{data.day}</p>
              <div className="bg-gray-300 h-4 w-full rounded-md">
                <div
                  className="bg-green-500 h-full rounded-md"
                  style={{
                    width: `${(data.completedTasks / data.totalTasks) * 100}%`,
                  }}
                />
              </div>
              <p className="text-sm mt-2 text-white">{`${data.completedTasks}/${data.totalTasks} tasks completed`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
