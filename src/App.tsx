import React from "react";

import TopNavbar from "./components/TopNavbar";
import DocumentTemplates from "./components/DocumentTemplates";

import { templates } from "./assets/templates";

function App() {
  return (
    <div>
      <TopNavbar />
      <DocumentTemplates templates={templates} />
    </div>
  );
};

export default App;
