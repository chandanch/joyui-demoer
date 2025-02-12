import React from "react";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";

function ManageGrowthPlanner() {
  return (
    <>
      <Sheet
        variant="outlined"
        sx={{
          width: "80%",
          mx: "auto", // margin left & right
          my: 4, // margin top & bottom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: "flex",
          flexDirection: "column",
          gap: 2,
          borderRadius: "sm",
          boxShadow: "md",
        }}
      >
        <div>
          <Typography level="h2" sx={{ textAlign: "center" }} component={"h2"}>
            Create Growth Planner
            <Typography level="body-sm"> Link Planner Data Here!</Typography>
          </Typography>
        </div>
      </Sheet>
    </>
  );
}

export default ManageGrowthPlanner;
