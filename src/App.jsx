import { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className=" min-h-screen flex items-center justify-center bg-gray-400">
      <div className="text-4xl font-bold text-blue-900">
        Health care landing page
      </div>
    </div>
  );
}

export default App;
