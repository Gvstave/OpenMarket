import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../ui/header";
import Footer from "../ui/footer";

const MainLayout = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen flex flex-col">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
