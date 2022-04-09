import React from "react";
import DefaultNavbar from "../../Components/DefaultNavbar";
import Header from "./Components/Header";
import ContentCreation from "./Sections/ContentCreation";
import Services from "./Sections/Services";
import SocialDepartment from "./Sections/SocialDepartment";

function HomePage() {
  return (
    <div>
      <DefaultNavbar />
      <Header />
      <Services />
      <SocialDepartment />
      <ContentCreation />
    </div>
  );
}

export default HomePage;
