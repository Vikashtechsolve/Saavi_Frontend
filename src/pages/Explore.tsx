import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Business from "@/components/explore/business";
import Family from "@/components/explore/family";
import Leisure from "@/components/explore/leisure";
import Select from "@/components/explore/select";
import Staycation from "@/components/explore/staycation";


const ExplorePage: React.FC = () => {
  const location = useLocation();
  const [activePage, setActivePage] = useState<string>("Terms and Conditions");

  const pages = [
    { name: "Business", hash: "#business" },
    { name: "Family", hash: "#family" },
    { name: "Leisure", hash: "#leisure" },
    { name: "Select", hash: "#select" },
    { name: "Staycation", hash: "#staycation" },
  ];

  useEffect(() => {
    const hash = location.hash;
    const matchedPage = pages.find((page) => page.hash === hash);
    if (matchedPage) {
      setActivePage(matchedPage.name);
    }
  }, [location.hash]);

  const renderContent = () => {
    switch (activePage) {
      case "Business":
        return <Business />;
      case "Family":
        return <Family />;
      case "Leisure":
        return <Leisure />;
      case "Select":
        return <Select />;
      case "Staycation":
        return <Staycation />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <div className="mx-auto px-4 py-8">

      <h1 className="text-5xl font-bold text-center text-[#8B2B06]">{activePage}</h1>
        <div className="content p-6">{renderContent()}</div>
      </div>
    </div>
  );
};

export default ExplorePage;
