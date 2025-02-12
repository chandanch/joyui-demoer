import React from "react";
import { CssVarsProvider } from "@mui/joy/styles";

import ActionButton from "./components/ActionButton";
import ManageGrowthPlanner from "./components/ManageGrowthPlanner";

function App() {
  return (
    <CssVarsProvider>
      <h1> RGM Planner App</h1>
      <ActionButton />
      <br />

      <ManageGrowthPlanner />
    </CssVarsProvider>
  );
}

export default App;
