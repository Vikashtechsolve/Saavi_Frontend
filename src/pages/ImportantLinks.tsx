import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TermsAndConditions from "@/components/importantLinks/termsAndConditions";
import PrivacyPolicy from "@/components/importantLinks/privacyPolicy";
import LoyaltyProgram from "@/components/importantLinks/loyaltyProgram";

const PoliciesPage: React.FC = () => {
  const location = useLocation();
  const [activePage, setActivePage] = useState<string>("Terms and Conditions");

  const pages = [
    { name: "Terms and Conditions", hash: "#terms" },
    { name: "Privacy Policy", hash: "#privacy-policy" },
    { name: "Loyalty Program", hash: "#loyalty-program" },
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
      case "Terms and Conditions":
        return <TermsAndConditions />;
      case "Privacy Policy":
        return <PrivacyPolicy />;
      case "Loyalty Program":
        return <LoyaltyProgram />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <div className="mx-auto px-4 py-8">
        <div className="content p-6">{renderContent()}</div>
      </div>
    </div>
  );
};

export default PoliciesPage;
