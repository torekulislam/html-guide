import "../styles/App.css";
import { Outlet } from "react-router";

function App() {
  return (
    <div className="min-h-screen bg-[#eaf0f5] w-full relative">
      <Outlet />

    </div>
  );
}

export default App;
