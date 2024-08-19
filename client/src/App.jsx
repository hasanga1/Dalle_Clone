import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";
import { Home, CreatePost } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-2 border-b border-gray-300 shadow-md">
        <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
          <Link to="/" className="flex-1 flex justify-center">
            <h1 className="text-2xl font-medium text-gray-700">InspireAI.</h1>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link
              to="/create-post"
              className="font-inter text-gray-800 hover:text-black"
            >
              Create
            </Link>
          </div>
        </div>
      </header>

      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
